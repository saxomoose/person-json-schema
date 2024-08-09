import { Type } from '@sinclair/typebox'
import addFormats from 'ajv-formats'
import Ajv from 'ajv'
import * as fs from "fs"

const ajv = addFormats(new Ajv({}), [
    'date-time',
    'time',
    'date',
    'email',
    'hostname',
    'ipv4',
    'ipv6',
    'uri',
    'uri-reference',
    'uuid',
    'uri-template',
    'json-pointer',
    'relative-json-pointer',
    'regex'
])
// const ajvValidate = ajv.compile(Payload)
// const ajvResult = ajvValidate(payloadInstance)

