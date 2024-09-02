import { Type } from "@sinclair/typebox";
import { Identifier } from "./identifier";

const Register = Type.Object({
    identifier: Identifier,
    url: Type.String()
}, { $id: "Register" });

const Record = Type.Object({
    identifier: Identifier,
    register: Register
});

export {
    Record,
    Register
};

