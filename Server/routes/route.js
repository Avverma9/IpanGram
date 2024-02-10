const express = require('express');
const router = express.Router();

const signup = require('../controllers/signup')
const employeeController = require('../controllers/employee');
const departmentController = require('../controllers/department');

// Create a new department
router.post('/departments', departmentController.createDepartment);

// Get all departments
router.get('/departments', departmentController.getDepartment);

// Update department by ID
router.put('/departments/:id', departmentController.updateById);

// Delete department by ID
router.delete('/departments/:id', departmentController.deleteById);
// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Get all employees
router.get('/employees', employeeController.getEmployee);

// Update employee by ID
router.put('/employees/:id', employeeController.updateEmployeeById);

// Delete employee by ID
router.delete('/employees/:id', employeeController.deleteEmployeeById);

// Get employees by location in ascending order
router.get('/employees/location/ascending/:state/:city', employeeController.getEmployeesByLocationAscending);

// Get employees by location in descending order
router.get('/employees/location/descending/:state/:city', employeeController.getEmployeesByLocationDescending);
//--------------------------------------------
router.post("/signup", signup.register)
router.post("/login/user", signup.login)
router.get("/profile", signup.profile)
//--------------------------------------------

router.all("/*", function (req, res) {
    res.status(404).send({ msg: "invalid http request" })
})

module.exports = router;
