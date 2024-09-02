import { Type } from "@sinclair/typebox";
import { LegalResource } from "./legal_resource";

const LegalReference = Type.Object({
    sourceLegalResource: LegalResource,
    targetLegalResource: LegalResource
})
