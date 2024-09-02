import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";
import { BestIdentifier } from "./best";

const StreetNameValue = Type.String();

const StreetName = Type.Object({
    identifier: BestIdentifier
});

export {
    StreetNameValue,
};