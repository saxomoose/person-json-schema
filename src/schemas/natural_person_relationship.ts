import { Type } from "@sinclair/typebox";
import { RegisteredNaturalPerson } from "./domestic_natural_person_register";

const PersonRelationship = Type.Object({
    person: RegisteredNaturalPerson,
    relative: RegisteredNaturalPerson,
}, { $id: "PersonRelationship" });

const Marriage = Type.Intersect([PersonRelationship], { $id: "Marriage" });
const StatutoryCohabitation = Type.Intersect([PersonRelationship], { $id: "StatutoryCohabitation" });