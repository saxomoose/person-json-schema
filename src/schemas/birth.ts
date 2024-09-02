import { Type } from "@sinclair/typebox";
import { TemporalPosition } from "./temporal";
import { Municipality } from "./domestic_municipality_register";
import { DabsNumber, RegisteredNaturalPerson } from "./domestic_natural_person_register";
import { GlobalLocality } from "./locality";

const Birth = Type.Object({
    person: RegisteredNaturalPerson,
    birthTime: TemporalPosition,
    birthLocation: Type.Union([Municipality, GlobalLocality])
}, { $id: "Birth" });

const BirthDocument = Type.Object({
    identifier: DabsNumber
});

export {
    Birth
}