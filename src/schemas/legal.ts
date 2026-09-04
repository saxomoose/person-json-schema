import { Attribute, Entity, Value } from "./eav";
import { Identifier } from "./identifier";
import { TemporalPosition } from "./temporal";
import { TSchema, Type } from "typebox";
import { ValueOptions } from "../utils";
import { Event } from "./lineage"

const LegalEvent = Type.Intersect([Event], { $id: "LegalEvent" });

const LegalAct = Type.Intersect([LegalEvent], { $id: "LegalAct" });

// const LegalStatement = <Entity extends TSchema, Attribute extends TSchema>(entity: Entity, attribute: Attribute, valueOptions?: ValueOptions) => {
//     return Type.Object({
//         event: LegalEvent,
//         subject: Entity(entity),
//         attribute: Attribute(attribute),
//         value: Value(attribute, valueOptions)
//     });
// };

export {
    LegalAct,
    LegalEvent
};

