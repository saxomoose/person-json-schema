import { GivenNameHistory } from "./schemas/api/given_name_history";
import { GivenNameLineage } from "./schemas/api/given_name_lineage";
import { NaturalPersonCurrent } from "./schemas/api/current";
import { TSchema } from "typebox"
import * as fs from 'fs'
import Schema from "typebox/schema"


function outputSchemaToFile(filename: string, schemaId: string, type: TSchema) {
    const schema = {
        $id: schemaId,
        $schema: "https://json-schema.org/draft/2020-12/schema",
        ...type
    }
    fs.writeFileSync(`./output/schemas/${filename}.json`, JSON.stringify(schema, null, 2))
}

function validateExamplesAgainstSchemas() {
    const schemaFiles = [
        "natural_person_current",
        "given_name_history",
        "given_name_lineage"
    ];

    for (const schemaFile of schemaFiles) {
        // Read the schema file
        const schemaPath = `./output/schemas/${schemaFile}.json`;
        const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
        const schema = JSON.parse(schemaContent);

        // Read the corresponding example file
        const examplePath = `./output/examples/${schemaFile}.json`;
        const exampleContent = fs.readFileSync(examplePath, 'utf-8');
        const exampleData = JSON.parse(exampleContent);

        // Remove TypeBox-specific properties that may conflict with the compiler
        const { $id, $schema, ...compilerSchema } = schema;

        // Compile the schema
        const validator = Schema.Compile(compilerSchema);

        // Validate the example
        const isValid = validator.Check(exampleData);

        if (isValid) {
            console.log(`${schemaFile}: Validation passed`);
        } else {
            console.log(`${schemaFile}: Validation failed`);
            // Get error details
            const errors = [...validator.Errors(exampleData)];
            if (errors.length > 0) {
                errors.forEach((error, index) => {
                    console.log(`Error ${index + 1}:`, error);
                });
            }
        }
    }
}

outputSchemaToFile("natural_person_current", "natural_person_current", NaturalPersonCurrent);
outputSchemaToFile("given_name_history", "given_name_history", GivenNameHistory);
outputSchemaToFile("given_name_lineage", "given_name_lineage", GivenNameLineage);

validateExamplesAgainstSchemas();