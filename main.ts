import { FormatRegistry, TSchema, Type, type Static } from "@sinclair/typebox"
import { TypeCompiler } from '@sinclair/typebox/compiler'
import { Value } from '@sinclair/typebox/value'
import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { NaturalPerson, Birth } from "./schemas/natural_person"
import { PersonRelationship } from "./schemas/private_legal"
import { PayloadComponent } from "./schemas/payload"
import addFormats from "ajv-formats"
import Ajv from "ajv"

// Configuration
const Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i

/**
 * `[ajv-formats]` Internet Email Address [RFC 5321, section 4.1.2.](http://tools.ietf.org/html/rfc5321#section-4.1.2)
 * @example `user@domain.com`
 */
export function IsEmail(value: string): boolean {
    return Email.test(value)
}

FormatRegistry.Set('email', IsEmail)


// console.log(JSON.stringify(Payload, null, 2))
// console.log(NaturalPerson.properties)

function printNatPerSchemaToFile() {
    const NaturalPersonComponent = PayloadComponent(NaturalPerson)
    const BirthComponent = PayloadComponent(Birth)
    const PersonRelationshipComponent = PayloadComponent(PersonRelationship)
    const Payload = Type.Array(Type.Union([NaturalPersonComponent, BirthComponent, PersonRelationshipComponent]))
    fs.writeFileSync("./output/schemas/natural_person_schema.json", JSON.stringify(Payload, null, 2))
}

function printNatPerExampleToFile() {
    const NaturalPersonComponent = PayloadComponent(NaturalPerson)
    const BirthComponent = PayloadComponent(Birth)
    const PersonRelationshipComponent = PayloadComponent(PersonRelationship)
    const Payload = Type.Array(Type.Union([NaturalPersonComponent, BirthComponent, PersonRelationshipComponent]))
    const payloadInstance = [
        {
            entityId: "07052200000",
            type: "NaturalPerson",
            attributes: {
                givenName: ["Georges", "Prosper"],
                familyName: ["Remi"],
                gender: "Male",
                email: "test@test.com",
                phone: "test"
            }
        },
        {
            type: "Birth",
            attributes: {
                person: "/0",
                birthTime: "1907-05-22",
                birthLocation: "1040"
            }
        },
        {
            type: "PersonRelationship",
            attributes: {
                person: "/0",
                relative: "34080100000",
                relationshipType: "Marriage",
                startTime: "1977-05-20"
            }
        }
    ]

    const typeboxCompiler = TypeCompiler.Compile(Payload)
    const errors = [...typeboxCompiler.Errors(payloadInstance)]
    if (errors.length != 0) {
        console.log(errors)
    }

    fs.writeFileSync("./output/examples/natural_person_example.json", JSON.stringify(payloadInstance, null, 2))
}

printNatPerSchemaToFile()
printNatPerExampleToFile()


