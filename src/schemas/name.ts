import { Type } from "typebox";
import { LegalCase } from "./legal_case";
import { DabsNumber, RegisteredNaturalPerson } from "./domestic_natural_person_register";
import { LegalAct } from "./legal";

const GivenName = Type.Array(Type.String(), { $id: "GivenName" });
const FamilyName = Type.Array(Type.String(), { $id: "FamilyName" });
const PreferredGivenName = Type.String();
const FullName = Type.String();
const MaidenName = Type.String();
const AlternativeName = Type.Array(Type.String());


export {
    GivenName,
    FamilyName
}