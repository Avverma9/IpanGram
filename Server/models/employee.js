const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    state: String,
    city: String,
    address: String,
    pinCode: String,
    email: String,
    phone: String,
    doj: String,
    nameDepartment: {
        type: String,
        ref: "Department", // Reference to the "Department" model
    },
});

// Function to get employees by state and city in ascending order
employeeSchema.statics.getEmployeesByLocationAscending = async function (state, city) {
    return this.find({ state, city }).sort({ name: 1 });
};

// Function to get employees by state and city in descending order
employeeSchema.statics.getEmployeesByLocationDescending = async function (state, city) {
    return this.find({ state, city }).sort({ name: -1 });
};

module.exports = mongoose.model("Employee", employeeSchema);
