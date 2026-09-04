import { Type } from "typebox";
import { Attribute, Entity } from "../eav";
import { GivenName } from "../name";
import { DateTime } from "../temporal";
import { Event } from "../lineage";
import { RegisteredNaturalPerson, GivenNameChangeRequest, GivenNameChangeOutcome } from "../domestic_natural_person_register";

const GivenNameLineage = Type.Object({
    subject: Entity(RegisteredNaturalPerson),
    attribute: Attribute(GivenName),
    cutOffTime: DateTime,
    lineage: Type.Array(Type.Union([
        GivenNameChangeRequest,
        GivenNameChangeOutcome,
    ]))
});

export {
    GivenNameLineage
}