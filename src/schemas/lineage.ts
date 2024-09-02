import { Type } from "@sinclair/typebox"
import { Identifier } from "./identifier"

const Event = Type.Object({
    identifier: Identifier
})

const Lineage = Type.Object({
    event: Event
})

export {
    Event,
    Lineage
}
