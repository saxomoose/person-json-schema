import { TSchema, Type } from "typebox";
import { Identifier } from "./identifier";
import { TemporalPosition } from "./temporal";

const Register = Type.Object({
    identifier: Identifier,
    url: Type.String()
}, { $id: "Register" });

const Record = Type.Object({
    identifier: Identifier,
    register: Register
});

// const ActivateAttribute 

const UpdateValue = <T extends TSchema>(type: T): TSchema => {
    return Type.Object({
        oldValue: type,
        newValue: type,
        effectivtyStart: TemporalPosition
    });
};

// const ExpireAttribute

export {
    Record,
    Register,
    UpdateValue
};

