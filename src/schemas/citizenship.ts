import { Type } from "typebox";
import { CountryRelationship } from "./country_relationship";

const Citizenship = Type.Intersect([CountryRelationship], { $id: "Citizenship" });
