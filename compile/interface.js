"use strict";
function createDetail(config) {
    var newEmployee = { empFirstName: 'Default Firstname', empLastName: 'Default Lastname', empID: 11111, empAges: 0, empSalary: 20000, empIsBonus: true };
    if (config.empFirstName) {
        newEmployee.empFirstName = config.empFirstName;
    }
    if (config.empLastName) {
        newEmployee.empLastName = config.empLastName;
    }
    if (config.empID) {
        newEmployee.empID = config.empID;
    }
    if (config.empAges) {
        newEmployee.empAges = config.empAges;
    }
    if (config.empSalary) {
        newEmployee.empSalary = config.empSalary;
    }
    if (config.empIsBonus === true) {
        newEmployee.empSalary = newEmployee.empSalary * 2.5;
    }
    return newEmployee;
}
var myEmp = createDetail({ empFirstName: 'Christian', empLastName: 'Labutong', empID: 11111, empAges: 30, empSalary: 35000, empIsBonus: true });
console.log("myDetail", myEmp);
