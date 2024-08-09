import { Type, type Static } from "@sinclair/typebox"
import { StringEnum } from "../utils"
import * as core from "./core"
import * as publicLegal from "./public_legal"

// Enumerations
const Male = Type.Literal("Male")
const Female = Type.Literal("Female")
const Unknown = Type.Literal("Unknown")
const Gender = Type.Union([Male, Female, Unknown])

// Types
const NaturalPerson = Type.Composite([
    Type.Object({
        givenName: Type.Array(Type.String()),
        familyName: Type.Array(Type.String()),
        gender: Gender,
    }),
    core.Contactable
], { $id: "NaturalPerson" })

const Birth = Type.Object({
    person: Type.Union([core.Identifier, core.JsonPointer]),
    birthTime: core.TemporalPosition,
    birthLocation: Type.String()
}, { $id: "Birth" })

const Death = Type.Object({
    person: Type.Union([core.Identifier, core.JsonPointer]),
    deathTime: core.TemporalPosition,
    deathLocation: Type.String()
}, { $id: "Death" })

const RegisteredPerson = Type.Composite([NaturalPerson, publicLegal.Registered], { $id: "RegisteredPerson" })

export {
    NaturalPerson,
    Birth
}