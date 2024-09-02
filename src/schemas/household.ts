import { Type } from "@sinclair/typebox";
import { DomesticResidenceAddress } from "./residence";
import { RegisteredNaturalPerson } from "./domestic_natural_person_register";
import { RegisteredAddress } from "./domestic_address_register";

const Household = Type.Object({
    householdAddress: Type.Union([RegisteredAddress, DomesticResidenceAddress])
}, { $id: "Household" });

const HouseholdRole = Type.Object({
    person: RegisteredNaturalPerson,
    household: Household,
}, { $id: "HouseholdRole" });

const HouseholdReferencePerson = Type.Intersect([HouseholdRole], { $id: "HouseholdReferencePerson" });

export {
    Household,
    HouseholdRole,
};