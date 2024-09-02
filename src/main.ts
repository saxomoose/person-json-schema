import { TSchema, Type } from "@sinclair/typebox"
import * as fs from 'fs'
import { NaturalPersonCurrent } from "./schemas/api/current";
import { GivenNameHistory } from "./schemas/api/given_name_history";
import { GivenNameLineage } from "./schemas/api/given_name_lineage";
import { GlobalLocality } from "./schemas/locality";

function outputSchemaToFile(filename: string, schemaId: string, type: TSchema) {
    const schema = {
        $id: schemaId,
        $schema: "https://json-schema.org/draft/2020-12/schema",
        ...type
    }
    fs.writeFileSync(`./output/schemas/${filename}.json`, JSON.stringify(schema, null, 2))
}

outputSchemaToFile("natural_person_current", "natural_person_current", NaturalPersonCurrent);
outputSchemaToFile("given_name_history", "given_name_history", GivenNameHistory);
outputSchemaToFile("given_name_lineage", "given_name_lineage", GivenNameLineage);

console.log(JSON.stringify(GlobalLocality, null, 2));