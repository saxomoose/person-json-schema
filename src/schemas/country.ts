import { Type } from "@sinclair/typebox";
import { Iso31661Alpha2Code } from "./iso";

const CountryRegister = Type.Object({});

const NisCountryCode = Type.String({ $id: "NisCountryCode" });

const CountryName = Type.Array(Type.String());
const ShortCountryName = Type.Array(Type.String());

const Country = Type.Object({
    identifier: NisCountryCode,
});

const DomesticRepresentation = Type.Object({
    identifier: Type.String(),
    country: Country
});

export {
    Country,
    NisCountryCode
};
