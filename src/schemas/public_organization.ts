import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";

const PublicOrganization = Type.Object({
    identifier: Identifier
})

export {
    PublicOrganization
}