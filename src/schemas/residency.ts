import { Type } from "@sinclair/typebox";
import { CountryRelationship } from "./country_relationship";

const Residency = Type.Intersect([CountryRelationship], { $id: "Residency" });

export {
    Residency
};
