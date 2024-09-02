import { Type } from "@sinclair/typebox";
import { Iso31661Alpha2Code } from "./iso";
import { Residency } from "./residency";
import { AddressLanguage as DomesticAddressLanguage, StreetName as DomesticStreetName, RegisteredAddress, StreetNumber, SubPremise } from "./domestic_address_register";
import { AddressLanguage } from "./global_address";
import { MunicipalityName } from "./domestic_municipality_register";
import { DomesticPostalCode } from "./domestic_postal_code_register";

const DomesticResidenceAddress = Type.Object({
    addressLanguage: DomesticAddressLanguage,
    subPremise: SubPremise,
    streetNumber: StreetNumber,
    streetName: DomesticStreetName,
    municipalityName: MunicipalityName,
    postalCode: DomesticPostalCode
}, { $id: "DomesticResidenceAddress" });

const GlobalResidenceAddress = Type.Object({
    addressLanguage: AddressLanguage,
    subPremise: Type.Optional(Type.Array(Type.String(), { $id: "SubPremise" })),
    streetNumber: Type.String(),
    streetName: Type.String(),
    localityName: Type.String(),
    postalCode: Type.String(),
    isoAlpha2CountryCode: Iso31661Alpha2Code
}, { $id: "GlobalResidenceAddress" });

const Residence = Type.Object({
    residency: Residency,
    address: Type.Union([RegisteredAddress, DomesticResidenceAddress])
});
const Domicile = Type.Intersect([Residence], { $id: "Domicile" });

const GlobalResidence = Type.Object({
    residency: Residency,
    address: GlobalResidenceAddress,
});


export {
    DomesticResidenceAddress,
    Domicile
};
