const Employee = require("../models/employee");

const createEmployee = async function (req, res) {
    try {
        const {
            name,
            state,
            city,
            address,
            pinCode,
            email,
            phone,
            doj,
            nameDepartment,
        } = req.body;

        const newEmployee = new Employee({
            name,
            state,
            city,
            address,
            pinCode,
            email,
            phone,
            doj,
            nameDepartment,
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getEmployee = async function (req, res) {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const updateEmployeeById = async function (req, res) {
    try {
        const { id } = req.params;
        const {
            name,
            state,
            city,
            address,
            pinCode,
            email,
            phone,
            doj,
            nameDepartment,
        } = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            {
                name,
                state,
                city,
                address,
                pinCode,
                email,
                phone,
                doj,
                nameDepartment,
            },
            { new: true }
        );

        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const deleteEmployeeById = async function (req, res) {
    try {
        const { id } = req.params;
        await Employee.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
const getEmployeesByLocationAscending = async function (req, res) {
    try {
        const { state, city } = req.params;
        const employees = await Employee.getEmployeesByLocationAscending(state, city);
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getEmployeesByLocationDescending = async function (req, res) {
    try {
        const { state, city } = req.params;
        const employees = await Employee.getEmployeesByLocationDescending(state, city);
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
module.exports = {
    createEmployee,
    getEmployee,
    updateEmployeeById,
    deleteEmployeeById,
    getEmployeesByLocationAscending,
    getEmployeesByLocationDescending
};
