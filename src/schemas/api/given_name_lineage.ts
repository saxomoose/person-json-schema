import { Type } from "@sinclair/typebox";
import { Attribute, Entity } from "../eav";
import { GivenName, GivenNameChangeOutcome, GivenNameChangeRequest } from "../name";
import { LegalEvent } from "../legal_event";
import { DateTime } from "../temporal";
import { Event } from "../lineage";
import { RegisteredNaturalPerson } from "../domestic_natural_person_register";

const GivenNameLineage = Type.Object({
    subject: Entity(RegisteredNaturalPerson),
    attribute: Attribute(GivenName),
    evaluationTime: DateTime,
    lineage: Type.Array(Type.Union([
        GivenNameChangeRequest,
        GivenNameChangeOutcome,
        Event]
    ))
});

export {
    GivenNameLineage
}