import { Type } from "@sinclair/typebox";
import { Codelist } from "./codelist";
import { CivilRegistrationOfficer } from "./municipality_governance_role";
import { Register } from "./register";

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

export {
    DabsNumber,
    NaturalPersonIdentifier,
    NaturalPersonRegistration,
    RegisteredNaturalPerson
};
