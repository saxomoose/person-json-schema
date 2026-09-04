import { Type } from "typebox";
import { FamilyName, GivenName } from "../name";
import { AttributeValue, Entity } from "../eav";
import { Sex } from "../sex";
import { Birth } from "../birth";
import { Death } from "../death";
import { NaturalPersonRegistration, RegisteredNaturalPerson } from "../domestic_natural_person_register";

const NaturalPersonBaseAttributes = Type.Array(Type.Union([
    AttributeValue(NaturalPersonRegistration),
    AttributeValue(GivenName),
    AttributeValue(FamilyName),
    AttributeValue(Sex),
    AttributeValue(Birth),
    AttributeValue(Death),
])
);

// Current view with effectivity period.
const NaturalPersonCurrent = Type.Object({
    subject: Entity(RegisteredNaturalPerson),
    attributes: NaturalPersonBaseAttributes
});

export {
    NaturalPersonCurrent
}