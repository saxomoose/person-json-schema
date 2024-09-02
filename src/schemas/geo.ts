import { Type } from "@sinclair/typebox";

const GeometricCoordinateSystem = Type.String({ $id: "GeometricCoordinateSystem" });

const DirectPosition = Type.Object({
    srs: GeometricCoordinateSystem,
    coordinate: Type.Array(Type.Number())
}, { $id: "DirectPosition" });

const Envelope = Type.Object({
    srs: GeometricCoordinateSystem,
    lowerCorner: DirectPosition,
    upperCorner: DirectPosition
}, { $id: "Envelope" });

const Geometry = Type.Object({
    srs: GeometricCoordinateSystem,
    envelope: Envelope
}, { $id: "Geometry" });

