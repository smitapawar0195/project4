const mongoose = require("mongoose")

const eventsModel = mongoose.model("events", {
    name: {
        type: String
    }
})

module.exports = eventsModel;