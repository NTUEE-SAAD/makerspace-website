import instrument from "../models/instrument"
//[must] initialize data
const InstrumentList = {
    "X1E-Plus": {
        type: "3DP",
        healthy: true
    },
    "HyperCube": {
        type: "3DP",
        healthy: true
    },
    "Formlab": {
        type: "3DP",
        healthy: true
    },
    "Anycubic": {
        type: "3DP",
        healthy: true
    },
    "ThunderLaser": {
        type: "LazerCut",
        healthy: true
    },
    "GreenLaser": {
        type: "LazerCut",
        healthy: true
    }
}

const init = async () => {
    await instrument.deleteMany({})
    for (const [key, value] of Object.entries(InstrumentList)) {
        const obj = new instrument({
            name: key,
            type: value.type,
            healthy: true
        })
        await obj.save();
    }
}


export { init };