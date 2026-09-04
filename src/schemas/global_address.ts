import { Type } from "typebox";
import { IetfBcp47Language } from "./language";

const AddressLanguage = Type.Intersect([IetfBcp47Language], { $id: "AddressLanguage" });

export {
    AddressLanguage
};
