import { Type } from "@sinclair/typebox";

const Iso31661Alpha2Code = Type.String({ $id: "Iso31661Alpha2Code" });
const Iso31661Alpha3Code = Type.String();
const Iso31662Code = Type.String();
const Iso31663Code = Type.String();
const Iso5218Code = Type.String();


export {
    Iso31661Alpha2Code,
    Iso31662Code,
    Iso5218Code
};
