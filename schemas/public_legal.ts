import { Type, type Static } from "@sinclair/typebox"
import { StringEnum } from "../utils"
import * as core from "./core"

const Record = Type.Object({
    identifier: core.Identifier,
    recordStatus: StringEnum([])
}, { $id: "Record" })

const Registered = Type.Object({
    record: Type.Array(Type.Ref(Record)),
}, { $id: "Registered" })

export {
    Record,
    Registered
}