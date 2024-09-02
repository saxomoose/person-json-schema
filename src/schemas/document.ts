import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";

const Document = Type.Object({
    identifier: Identifier,
});

export {
    Document
}