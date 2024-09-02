import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";

const LegalResource = Type.Object({
    identifier: Identifier,
    url: Type.String()
});


export {
    LegalResource
}