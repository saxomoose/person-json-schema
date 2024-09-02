import { Type } from "@sinclair/typebox";
import { Codelist } from "./codelist";

const Year = Type.String({ $id: "Year" });
const Month = Type.String({ $id: "Month" });
const Date = Type.Date({ $id: "Date" });
const DateTime = Type.String({ $id: "DateTime", format: "datetime" });

const TemporalPosition = Type.Union([DateTime, Date, Month, Year], { $id: "TemporalPosition" });

const TemporalInterval = Type.Object({
    start: TemporalPosition,
    end: Type.Optional(TemporalPosition)
});

const Duration = Type.Array(
    Type.Object({
        timeUnit: Codelist,
        timeValue: Type.Integer()
    })
);

const TemporalExtent = Type.Union([TemporalInterval, Duration]);

const EffectivityPeriod = Type.Object({
    effectivityStart: TemporalPosition,
    effectivityEnd: Type.Optional(TemporalPosition)
});

const RecordTime = Type.Object({
    creationTimestamp: DateTime,
    lastModifiedTimestamp: DateTime
});

export {
    DateTime,
    TemporalPosition,
    EffectivityPeriod,
    RecordTime
}