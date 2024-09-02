import { Type } from "@sinclair/typebox";
import { CountryRelationship } from "./country_relationship";
import { Country } from "./country";

const InternationalLegalStatus = Type.Intersect([
    CountryRelationship,
    Type.Object({
        homeCountry: Country
    })
], { $id: "InternationalLegalStatus" });

const AsylumStatus = Type.Intersect([InternationalLegalStatus], { $id: "AsylumStatus" });
const SubsidiaryProtectionStatus = Type.Intersect([InternationalLegalStatus], { $id: "SubsidiaryProtectionStatus" });
const DiplomaticStatus = Type.Intersect([InternationalLegalStatus], { $id: "DiplomaticStatus" });
const StatelessStatus = Type.Intersect([CountryRelationship], { $id: "StatelessStatus" });