const express = require("express");
const mongoose = require("mongoose");
const citiesModel = require("./model/citiesModel");
const eventsModel = require("./model/eventsModel");
const departmentsModel = require("./model/departmentsModel");
const gendersModel = require("./model/gendersModel");
const empdetailsModel = require("./model/empdetailsModel");
const transportsModel = require("./model/transportsModel");
const fullnamesModel = require("./model/fullnamesModel");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/empdb").then(() =>
    console.log("DB is connected successfullt!!!")
)

app.get("/", (req, res) => {
    res.send("Welcome to PickupBizz")
})
app.get("/cities", async (req, res) => {
    const result = await citiesModel.find({});
    res.send(result);

})
app.post("/addcity", async (req, res) => {
    const newCity = new citiesModel(req.body)
    await newCity.save()
    res.send("Successfully added new city!")
})
app.get("/events", async (req, res) => {
    const result = await eventsModel.find({});
    res.send(result);

})
app.post("/addevent", async (req, res) => {
    const newEvent = new eventsModel(req.body)
    await newEvent.save()
    res.send("Successfully added new event!")
})
app.get("/departments", async (req, res) => {
    const result = await departmentsModel.find({});
    res.send(result);

})
app.post("/adddepartment", async (req, res) => {
    const newDept = new departmentsModel(req.body)
    await newDept.save()
    res.send("Successfully added new department!")
})
app.get("/genders", async (req, res) => {
    const result = await gendersModel.find({});
    res.send(result);

})
app.post("/addgender", async (req, res) => {
    const newGender = new gendersModel(req.body)
    await newGender.save()
    res.send("Successfully added new gender!")
})
app.get("/empdetails", async (req, res) => {
    const result = await empdetailsModel.find({});
    res.send(result);

})
app.post("/addemp", (req, res) => {
    const newEmp = new empdetailsModel(req.body)
    newEmp.save()
    res.send("Successfully added new employee!")
})
app.post("/delemp", async (req, res) => {
    await empdetailsModel.findByIdAndRemove(req.body);
    res.send("Deleted successfully!");
})
// app.post("/updateemp", async (req, res) => {
//     await empdetailsModel.findOneAndUpdate({
//         id: req.body.id
//     }, {
//         empid: req.body.empid
//     }, {
//         fname: req.body.fname
//     }, {
//         lname: req.body.lname
//     }, {
//         mob: req.body.mob
//     }, {
//         city: req.body.city
//     });
//     res.send("Updated successfully");
// })

app.get("/transports", async (req, res) => {
    const result = await transportsModel.find({});
    res.send(result);
})
app.post("/addtransport", (req, res) => {
    const newTran = new transportsModel(req.body)
    newTran.save()
    res.send("Successfully added new transport!")
})
app.get("/fullnames", async (req, res) => {
    const result = await fullnamesModel.find({});
    res.send(result);
})
app.post("/addfullname", (req, res) => {
    const newName = new fullnamesModel(req.body)
    newName.save()
    res.send("Successfully added new fullname!")
})

app.listen(7070, () => {
    console.log("Service is up and running....")
})