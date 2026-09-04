import { Type } from "typebox";
import { BelgianOfficialLanguage } from "./language";
import { NisAdministrativeUnitCode } from "./nis";

const MunicipalityRegister = Type.Object({});

const MunicipalityName = Type.Array(Type.String(), { $id: "MunicipalityName" });
const AdministrativeLanguage = Type.Intersect([BelgianOfficialLanguage]);

const Municipality = Type.Object({
    identifier: NisAdministrativeUnitCode,
}, { $id: "Municipality" });

export {
    AdministrativeLanguage, Municipality, MunicipalityName
};
