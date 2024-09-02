import { Type } from "@sinclair/typebox";

const Email = Type.String({ format: "email" });
const GlobalPhoneNumber = Type.Object({
    prefix: Type.String(),
    value: Type.String()
});
