import { Type } from "@sinclair/typebox";
import { TemporalPosition } from "./temporal";
import { Municipality } from "./domestic_municipality_register";
import { RegisteredNaturalPerson } from "./domestic_natural_person_register";
import { GlobalLocality } from "./locality";

const Death = Type.Object({
    person: RegisteredNaturalPerson,
    deathTime: TemporalPosition,
    deathLocation: Type.Union([Municipality, GlobalLocality])
}, { $id: "Death" });

export {
    Death
}