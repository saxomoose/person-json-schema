import { Type } from "@sinclair/typebox";
import { NisCountryCode } from "./country";
import { Municipality } from "./domestic_municipality_register";
import { DomesticPostalCode } from "./domestic_postal_code_register";
import { Iso31661Alpha2Code, Iso31662Code } from "./iso";

const Locality = Type.Object({
    localityName: Type.String(),
    municipality: Municipality,
    postalCode: DomesticPostalCode
}, { $id: "Locality" });

const GlobalLocality = Type.Object({
    localityName: Type.String(),
    postalCode: Type.String(),
    isoAdministrativeSubdivisionCode: Type.Array(Iso31662Code),
    nisCountryCode: NisCountryCode,
    isoAlpha2CountryCode: Iso31661Alpha2Code
}, { $id: "GlobalLocality" });

export {
    GlobalLocality
};
