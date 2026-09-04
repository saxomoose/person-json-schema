import { TSchema, Type } from "typebox"
import { Identifier } from "./identifier"
import { TemporalPosition } from "./temporal"

const Event = Type.Object({
    identifier: Identifier,
    occurenceTime: TemporalPosition
})

export {
    Event
}
