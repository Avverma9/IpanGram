const Department = require("../models/departmentModel");

const createDepartment = async function (req, res) {
    try {
        const { name, numOfEmployees } = req.body;
        const newDepartment = new Department({
            name,
            numOfEmployees,
        });
        const savedDepartment = await newDepartment.save();
        res.status(201).json(savedDepartment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getDepartment = async function (req, res) {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const updateById = async function (req, res) {
    try {
        const { id } = req.params;
        const { name, numOfEmployees } = req.body;
        const updatedDepartment = await Department.findByIdAndUpdate(
            id,
            { name, numOfEmployees },
            { new: true }
        );
        res.status(200).json(updatedDepartment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const deleteById = async function (req, res) {
    try {
        const { id } = req.params;
        await Department.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    createDepartment,
    getDepartment,
    updateById,
    deleteById,
};
