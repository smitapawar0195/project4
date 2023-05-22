const mongoose = require("mongoose")

const empdetailsModel = mongoose.model("empdetails", {
    empid: {
        type: Number
    },
    id: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    mob: {
        type: Number
    },
    city: {
        type: String
    }
})

module.exports = empdetailsModel;