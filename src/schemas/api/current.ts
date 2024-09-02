import { Type } from "@sinclair/typebox";
import { FamilyName, GivenName } from "../name";
import { AttributeValue, Entity } from "../eav";
import { Sex } from "../sex";
import { Birth } from "../birth";
import { Death } from "../death";
import { NaturalPersonRegistration, RegisteredNaturalPerson } from "../domestic_natural_person_register";

const NaturalPersonBaseAttributes = Type.Array(Type.Union([
    AttributeValue(NaturalPersonRegistration, { effectivityPeriod: true }),
    AttributeValue(GivenName, { effectivityPeriod: true }),
    AttributeValue(FamilyName, { effectivityPeriod: true }),
    AttributeValue(Sex, { effectivityPeriod: true }),
    AttributeValue(Birth, { effectivityPeriod: true }),
    AttributeValue(Death, { effectivityPeriod: true }),
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