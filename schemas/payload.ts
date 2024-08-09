import { Type, type Static, TSchema, TObject } from "@sinclair/typebox"
import { StringEnum } from "../utils"

// Do not set $id.
const PayloadComponent = <T extends TSchema>(T: T) => Type.Object({
    entityId: Type.Optional(Type.String()),
    type: Type.Literal(T.$id as string),
    attributes: T
}, { additionalProperties: false })

export {
    PayloadComponent
}