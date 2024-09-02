import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";
import { TemporalPosition } from "./temporal";
import { LegalResource } from "./legal_resource";

const LegalEvent = Type.Object({
    identifier: Identifier,
    occurenceTime: TemporalPosition,
}, { $id: "LegalEvent" });

const LegalAct = Type.Intersect([LegalEvent], { $id: "LegalAct" });

export {
    LegalAct,
    LegalEvent
}