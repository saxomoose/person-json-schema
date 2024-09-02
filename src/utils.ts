import { Type, Kind, SchemaOptions, TObject, TypeRegistry, Static } from "@sinclair/typebox"
import { Url } from "url";

async function fetchEnumValues(url: string): Promise<string[]> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch enum values from ${url}`);
    }
    return await response.json();
}

TypeRegistry.Set("StringEnum", (schema: { enum: string[] }, value: unknown) => {
    return typeof value === "string" && schema.enum.includes(value);
});

// This function should fetch the enumeration values from source.
export function StringEnum<T extends string[]>(values: [...T], options: SchemaOptions = {}) {
    return Type.Unsafe<T[number]>({ ...options, [Kind]: "StringEnum", enum: values })
};

type Schema = {
    $id: Url,
    $schema: "https://json-schema.org/draft/2020-12/schema"
}

interface LineageOptions {
    lineage?: boolean;
}

interface TemporalScopeOptions {
    effectivityPeriod?: boolean;
    recordTime?: boolean;
}

interface ValueOptions extends LineageOptions, TemporalScopeOptions { }

interface Attribute {
    attribute: {
        const: string;
        type: string;
    };
}

interface Value {
    value: {
        type: string;
        $id?: string;
        items?: {
            type: string;
        };
    };
}

interface AttributeValue {
    type: string;
    allOf: [
        {
            type: string;
            properties: Attribute | Value;
            required: string[];
        }
    ]
}

interface AttributeValueSchema {
    anyOf: AttributeValue[];
}

export {
    Attribute,
    AttributeValueSchema,
    LineageOptions,
    ValueOptions,
    TemporalScopeOptions,
    Schema
}



