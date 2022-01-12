import mongoose from "mongoose"

const Schema = mongoose.Schema;

const InstrumentSchema = Schema(
    {
        type: {
            type: String,
            enum: ['3DP', 'LazerCut'],
            required: [true, "Type is required"]
        },
        name: {
            type: String,
            lowercase: true,
            required: [true, "Name is required"]
        },
        busyUntil: {
            type: Date,
            required: false
        },
        healthy: {
            type: Boolean
        },
        reservation: {
            type: [String],
            required: false
        }
    }
)

const exportSchema = mongoose.model("instrument", InstrumentSchema);
export default exportSchema;