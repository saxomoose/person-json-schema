import { Type } from "@sinclair/typebox";

const BestIdentifier = Type.Object({
    namespace: Type.String({ format: "uri" }),
    objectIdentifier: Type.String(),
    versionIdentifier: Type.String()
});

const BestAddress = Type.Object({
    code: BestIdentifier,
    houseNumber: Type.String(),
    hasStreetname: BestIdentifier,
    hasMunicipality: BestIdentifier,
    hasPostalInfo: BestIdentifier
});

export {
    BestIdentifier
};
