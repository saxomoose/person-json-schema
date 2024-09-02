import { TSchema, Type } from "@sinclair/typebox";
import { ValueOptions, TemporalScopeOptions } from "../utils";
import { Lineage } from "./lineage";
import { EffectivityPeriod, RecordTime } from "./temporal";

const Entity = <T extends TSchema>(type: T): TSchema => {
    return Type.Object({
        identifier: Type.Index(type, ["identifier"]),
        type: Type.Literal(type.$id as string)
    })
};

const Attribute = <T extends TSchema>(type: T): TSchema => {
    return Type.Object({
        attribute: Type.Literal(type.$id as string)
    })
};

const Value = <T extends TSchema>(type: T, valueOptions?: ValueOptions): TSchema => {
    let schema: TSchema = Type.Object({
        value: type
    });

    if (valueOptions?.lineage) {
        schema = Type.Intersect([schema, Lineage])
    }

    if (valueOptions?.effectivityPeriod) {
        schema = Type.Intersect([schema, EffectivityPeriod]);
    }

    if (valueOptions?.recordTime) {
        schema = Type.Intersect([schema, RecordTime]);
    }

    return schema;
};

const AttributeValue = <T extends TSchema>(type: T, valueOptions?: TemporalScopeOptions): TSchema => {
    return Type.Intersect([
        Attribute(type),
        Value(type, valueOptions)
    ]);
};

export {
    Attribute, AttributeValue, Entity, Value
};

