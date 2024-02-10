const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: String,
    numOfEmployees:String,
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Department", departmentSchema);
