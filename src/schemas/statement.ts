import { TSchema, Type } from "@sinclair/typebox";
import { TemporalScopeOptions } from "../utils";
import { Event } from "./lineage";
import { Attribute, Entity, Value } from "./eav";

const Statement = <Entity extends TSchema, Attribute extends TSchema>(entity: Entity, attribute: Attribute, valueOptions?: TemporalScopeOptions) => {
    return Type.Object({
        event: Event,
        subject: Entity(entity),
        attribute: Attribute(attribute),
        value: Value(attribute, valueOptions)
    });
};