import { TSchema, Type } from "@sinclair/typebox";
import { ValueOptions } from "../utils";
import { Attribute, Entity, Value } from "./eav";
import { LegalEvent } from "./legal_event";

const LegalStatement = <Entity extends TSchema, Attribute extends TSchema>(entity: Entity, attribute: Attribute, valueOptions?: ValueOptions) => {
    return Type.Object({
        event: LegalEvent,
        subject: Entity(entity),
        attribute: Attribute(attribute),
        value: Value(attribute, valueOptions)
    });
};

export {
    LegalStatement
};

