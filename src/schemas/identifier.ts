import { TSchema, Type } from "@sinclair/typebox";

const Identifier = Type.String({ $id: "Identifier" });

const IdentifierOf = <T extends TSchema>(type: T): TSchema => {
    return Type.Index(type, ["identifier"])
}

// const Tagged;
const JsonPointer = Type.String({ $id: "JsonPointer", format: "json-pointer" });

export {
    Identifier,
    IdentifierOf
}