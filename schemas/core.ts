import { Type, type Static, TSchema } from "@sinclair/typebox"
import { StringEnum } from "../utils"
import { cp } from "fs"

const Identifier = Type.String({ $id: "Identifier" })



/** Three types of datapoint queries:
 * - by entityId
 * - by combination of type and attribute value (usually a tag)
 * - by combination of type and attribute name (for statements)
 * All these can probably be implemented by pattern
 * */
const TypeReference = (type: string) => Type.Object({
    type: Type.Literal(type),
})

// const TaggedTypeReference

const AttributeReference = (type: string, attribute: string) => Type.Object({
    type: Type.Literal(type),
    attribute: Type.Literal(attribute)
})

const JsonPointer = Type.String({ $id: "JsonPointer", format: "json-pointer" })

// Temporal

const Year = Type.String({ $id: "Year" })
const Month = Type.String({ $id: "Month" })
const Date = Type.Date({ $id: "Month" })
const DateTime = Type.String({ $id: "DateTime", format: "datetime" })

const TemporalPosition = Type.Union([DateTime, Date, Month, Year], { $id: "TemporalPosition" })

// Contact

const HasEmail = Type.Object({ email: Type.String({ format: "email" }) })
const HasPhone = Type.Object({ phone: Type.String() })
const Contactable = Type.Composite([HasEmail, HasPhone], { $id: "Contactable" })

export {
    HasEmail,
    HasPhone,
    Contactable,
    Identifier,
    JsonPointer,
    TemporalPosition,
    TypeReference
}