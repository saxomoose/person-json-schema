import { Type } from "typebox";
import { Identifier } from "./identifier";
import { LegalAct } from "./legal";

const LegalCase = Type.Object({
    identifier: Identifier
});

export {
    LegalCase,
}
