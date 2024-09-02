import { Type } from "@sinclair/typebox";
import { CountryRelationship } from "./country_relationship";

const Citizenship = Type.Intersect([CountryRelationship], { $id: "Citizenship" });
