import { Type } from "@sinclair/typebox";
import { BestIdentifier } from "./best";
import { AdministrativeLanguage } from "./domestic_municipality_register";
import { StreetNameValue } from "./domestic_street_name_register";

const AddressLanguage = Type.Intersect([AdministrativeLanguage], { $id: "AddressLanguage" });

const SubPremise = Type.Optional(Type.Array(Type.String(), { $id: "SubPremise" }));

const StreetNumber = Type.String({ $id: "StreetNumber" });

const StreetName = Type.Intersect([StreetNameValue], { $id: "StreetName" })

const RegisteredAddress = Type.Object({
    identifier: BestIdentifier
}, { $id: "RegisteredAddress" });

export {
    AddressLanguage,
    RegisteredAddress,
    StreetNumber,
    StreetName,
    SubPremise
};
