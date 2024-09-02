import { Type } from "@sinclair/typebox";
import { Document } from "./document"

const Documentation = Type.Object({
    document: Type.Array(Document)
});