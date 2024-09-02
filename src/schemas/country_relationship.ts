import { Type } from "@sinclair/typebox";
import { Country } from "./country";
import { RegisteredNaturalPerson } from "./domestic_natural_person_register";
import { IdentifierOf } from "./identifier";

const CountryRelationship = Type.Object({
    person: RegisteredNaturalPerson,
    country: IdentifierOf(Country),
});

export {
    CountryRelationship
}