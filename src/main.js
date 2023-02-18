import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { getRandomNumber } from "./utils/random.js";

const MIN_ID = 100000000;
const MAX_ID = 999999999;

const company = new Company();


const employeeForm = new EmployeeForm("form-section");

function addEmployee(employeeData) {
    const id = getRandomNumber(MIN_ID, MAX_ID);

    const employee = createEmployee(id, employeeData.name, +employeeData.birthYear, +employeeData.salary, employeeData.city, employeeData.country);
    company.addEmployee(employee);
}

employeeForm.addFormHandler(addEmployee);

