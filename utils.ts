import { Type, Kind, SchemaOptions, TypeRegistry, Static } from "@sinclair/typebox"

TypeRegistry.Set("StringEnum", (schema: { enum: string[] }, value: unknown) => {
    return typeof value === "string" && schema.enum.includes(value)
});

export function StringEnum<T extends string[]>(values: [...T], options: SchemaOptions = {}) {
    return Type.Unsafe<T[number]>({ ...options, [Kind]: "StringEnum", enum: values })
};
