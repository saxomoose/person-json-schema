import { Type } from "@sinclair/typebox";
import { LegalStatement } from "./legal";
import { LegalOutcome, LegalRequest } from "./legal_case";
import { DabsNumber, RegisteredNaturalPerson } from "./domestic_natural_person_register";

const GivenName = Type.Array(Type.String(), { $id: "GivenName" });
const FamilyName = Type.Array(Type.String(), { $id: "FamilyName" });
const PreferredGivenName = Type.String();
const FullName = Type.String();
const MaidenName = Type.String();
const AlternativeName = Type.Array(Type.String());

// Aanvraag tot wijziging van de voornaam
const GivenNameChangeRequest = Type.Intersect([
    LegalRequest,
], { $id: "GivenNameChangeRequest" });
const GivenNameChangeRequestStatement = LegalStatement(RegisteredNaturalPerson, GivenName);

// Akte van voornaamsverandering
const GivenNameChangeDocument = Type.Object({
    identifier: DabsNumber
});
// Vergunning (rechtshandeling) van voornaamsverandering
const GivenNameChangeOutcome = Type.Intersect([
    LegalOutcome,
    Type.Object({
        document: GivenNameChangeDocument
    })
], { $id: "GivenNameChangeOutcome" });
const GivenNameChangeOutcomeStatement = LegalStatement(RegisteredNaturalPerson, GivenName, { effectivityPeriod: true });

export {
    GivenName,
    GivenNameChangeRequest,
    GivenNameChangeOutcome,
    FamilyName
}