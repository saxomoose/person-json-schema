import { Type } from "@sinclair/typebox";
import { GivenName } from "../name";
import { Attribute, Entity, Value, } from "../eav";
import { RegisteredNaturalPerson } from "../domestic_natural_person_register";

// Historic view on given name attribute.
const GivenNameHistory = Type.Object({
    subject: Entity(RegisteredNaturalPerson),
    attribute: Attribute(GivenName),
    history: Value(GivenName, { effectivityPeriod: true, lineage: true })
});

export {
    GivenNameHistory
}
