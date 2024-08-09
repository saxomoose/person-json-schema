import { Type } from "@sinclair/typebox";
import * as core from "./core"

// Enumerations
const Marriage = Type.Literal("Marriage")
const StatutoryCohabitation = Type.Literal("StatutoryCohabitation")
const RelationshipType = Type.Union([Marriage])

const ReferencePerson = Type.Literal("ReferencePerson")
const HouseholdRoleValue = Type.Union([RelationshipType])

// Types
const PersonRelationship = Type.Object({
    person: Type.Union([core.Identifier, core.JsonPointer]),
    relative: Type.Union([core.Identifier, core.JsonPointer]),
    relationshipType: RelationshipType,
    startTime: core.TemporalPosition
}, { $id: "PersonRelationship" })

const HouseholdRole = Type.Object({
    person: Type.Union([core.Identifier, core.JsonPointer]),
    household: Type.Union([core.Identifier, core.JsonPointer]),
    householdRoleValue: HouseholdRoleValue
}, { $id: "HouseholdRole" })

const Household = Type.Object({
    householdAddress: Type.Any()
})

export {
    PersonRelationship
}