import { Type } from "@sinclair/typebox";
import { Iso5218Code } from "./iso";

const Sex = Type.Intersect([Iso5218Code], { $id: "Sex" });

export {
    Sex
}