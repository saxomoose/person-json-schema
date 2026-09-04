import { Type } from "typebox";
import { Municipality } from "./domestic_municipality_register";

const CivilRegistrationOfficer = Type.Object({
    municipality: Municipality
});

export {
    CivilRegistrationOfficer
}