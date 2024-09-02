import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";
import { LegalAct } from "./legal_event";

const LegalCase = Type.Object({
    identifier: Identifier
});

const LegalRequest = Type.Intersect([
    LegalAct,
    Type.Object({
        case: LegalCase
    })
], { $id: "LegalRequest" });

const LegalOutcome = Type.Intersect([
    LegalAct,
    Type.Object({
        case: LegalCase
    })
], { $id: "LegalOutcome" });

export {
    LegalCase,
    LegalOutcome,
    LegalRequest
}
