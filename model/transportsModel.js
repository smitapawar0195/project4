const mongoose = require("mongoose")

const transportsModel = mongoose.model("transports", {
    name: {
        type: String
    }
})

module.exports = transportsModel;