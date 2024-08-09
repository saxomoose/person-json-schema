import * as jsonpointer from "jsonpointer"

const payloadInstance = [
    {
        entityId: "07052200000",
        type: "NaturalPerson",
        attributes: {
            givenName: ["Georges", "Prosper"],
            familyName: ["Remi"],
            gender: "Male"
        }
    },
    {
        type: "Birth",
        attributes: {
            person: {
                type: "NaturalPerson"
            },
            birthTime: "1907-05-22",
            birthLocation: "1040"
        }
    },
    {
        type: "PersonRelationship",
        attributes: {
            person: {
                type: "NaturalPerson"
            },
            relative: "34080100000",
            tag: {
                relationshipType: "Marriage"
            },
            startTime: "1977-05-20"
        }
    }
]

const result = jsonpointer.get(payloadInstance, "/0")
console.log(JSON.stringify(result, null, 2))