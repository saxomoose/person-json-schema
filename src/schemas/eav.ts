import { TSchema, Type } from "typebox";
import { EffectivityPeriod } from "./temporal";

const Entity = <T extends TSchema>(type: T): TSchema => {
    return Type.Object({
        identifier: Type.Index(type, ["identifier"]),
        type: Type.Literal((type as any).$id)
    })
};

const Attribute = <T extends TSchema>(type: T): TSchema => {
    return Type.Literal((type as any).$id)
};

const Value = <T extends TSchema>(type: T): TSchema => {
    return Type.Intersect([
        Type.Object({
            value: type
        }),
        EffectivityPeriod
    ]);
};

const AttributeValue = <T extends TSchema>(type: T): TSchema => {
    return Type.Intersect([
        Attribute(type),
        Value(type)
    ]);
};

export {
    Attribute, AttributeValue, Entity, Value
};

