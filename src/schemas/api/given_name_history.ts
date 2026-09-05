import { Type } from "typebox";
import { GivenName } from "../name";
import { Attribute, AttributeValue, Entity, Value, } from "../eav";
import { RegisteredNaturalPerson } from "../domestic_natural_person_register";
import { DateTime, EffectivityPeriod } from "../temporal";

// Historic view on given name attribute.
const GivenNameHistory = Type.Object({
    subject: Entity(RegisteredNaturalPerson),
    attribute: Attribute(GivenName),
    cutOffTime: DateTime,
    history: Type.Array(Value(GivenName))
});

export {
    GivenNameHistory
}
