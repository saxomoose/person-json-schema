import { Type } from "typebox";
import { Codelist } from "./codelist";
import { CivilRegistrationOfficer } from "./municipality_governance_role";
import { Register, UpdateValue } from "./register";
import { LegalAct } from "./legal";
import { LegalCase } from "./legal_case";
import { GivenName } from "./name";

const NaturalPersonRegister = Type.Object({});

const InszNumber = Type.String({ $id: "InszNumber" });
const BisNumber = Type.String({ $id: "BisNumber" });

const NaturalPersonIdentifier = Type.Union([InszNumber, BisNumber], { $id: "NaturalPersonIdentifier" });
const NaturalPersonRecordStatus = Type.Intersect([Codelist]);

const RegisteredNaturalPerson = Type.Object({
    identifier: NaturalPersonIdentifier,
}, { $id: "RegisteredNaturalPerson" });

const NaturalPersonRegistration = Type.Object({
    person: RegisteredNaturalPerson,
    register: NaturalPersonRegister,
}, { $id: "NaturalPersonRegistration" });

const RegisteredNaturalPersonMaintenance = Type.Object({
    registration: NaturalPersonRegistration,
    maintainer: CivilRegistrationOfficer
});

const DabsNumber = Type.String({ $id: "DabsNumber" });
const PersonRegisterDocument = Type.Object({
    identifier: DabsNumber
})

// Aanvraag tot wijziging van de voornaam
const GivenNameChangeRequest = Type.Intersect([
    LegalAct,
    Type.Object({
        eventType: Type.Literal("GivenNameChangeRequest"),
        legalCase: LegalCase,
    }),
    UpdateValue(GivenName)
], { $id: "GivenNameChangeRequest" });
// const GivenNameChangeRequestStatement = LegalStatement(RegisteredNaturalPerson, GivenName);

// Akte van voornaamsverandering
const GivenNameChangeDocument = Type.Object({
    identifier: DabsNumber
});
// Vergunning (rechtshandeling) van voornaamsverandering
const GivenNameChangeOutcome = Type.Intersect([
    LegalAct,
    Type.Object({
        eventType: Type.Literal("GivenNameChangeOutcome"),
        legalCase: LegalCase,
    }),
    UpdateValue(GivenName)
], { $id: "GivenNameChangeOutcome" });
// const GivenNameChangeOutcomeStatement = LegalStatement(RegisteredNaturalPerson, GivenName, { effectivityPeriod: true });


export {
    DabsNumber,
    GivenNameChangeRequest,
    GivenNameChangeOutcome,
    NaturalPersonIdentifier,
    NaturalPersonRegistration,
    RegisteredNaturalPerson
};
