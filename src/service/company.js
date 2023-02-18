import { getRandomNumber } from "../utils/random.js";
import { employeeConfig } from "./config/employee-config.js";

// Employee structure and function createEmployee() taken from previous HW
export function createEmployee(name, birthYear, salary, city, country) {
    return {name, birthYear, salary, address: {city, country}}
}

function employeeSalaryValidation(empl) {
    let res = "";

    if (empl.salary < employeeConfig.minSalary) {
        res = `salary must not be less then ${employeeConfig.minSalary}\n`;
    } else if (empl.salary > employeeConfig.maxSalary) {
        res = `salary must not be greater then ${employeeConfig.maxSalary}\n`;
    }
    return res;
}

function employeeYearValidation(empl) {
    let res = "";

    if (empl.birthYear < employeeConfig.minYear) {
        res = `birth Year must not be less then ${employeeConfig.minYear}\n`;
    } else if (empl.birthYear > employeeConfig.maxYear) {
        res = `birth Year must not be greater then ${employeeConfig.maxYear}\n`;
    }
    return res;
}


export class Company {
    #employees; //object key: <id value>, value: reference to Employee object

    constructor() {
        this.#employees = {};
    }

    addEmployee(empl) {
        let msg = "";

        this.addEmployeeUniqueId(empl)

        msg += employeeSalaryValidation(empl);
        msg += employeeYearValidation(empl);

        if (!msg) {
            this.#employees[empl.id] = empl;
        }
        return {message: msg, id: empl.id};
    }

    addEmployeeUniqueId(empl) {
        
        do {
            empl.id = getRandomNumber(employeeConfig.midId, employeeConfig.maxId + 1);
        } while(this.getEmployeeById(empl.id));
    }

    getEmployeeById(id) {
        if (this.#employees[id]) {
            return this.#employees[id];
        }
    }



    removeEmployee(id) {
        let res = true;

        this.#employees[id] ? delete this.#employees[id] : res = false;;
        return res;
    }


    getEmployeesCountry(country) {
        const emplArr = Object.values(this.#employees);

        return emplArr.filter(e => e.address.country === country);
    }
    
    getEmployeesByAge(age) {
        const emplArr = Object.values(this.#employees);
        return emplArr.filter(e => new Date().getFullYear() - e.birthYear === age); 
    }

    getEmployeesBySalaries(salryFrom, salryTo) {
        const emplArr = Object.values(this.#employees);

        return emplArr.filter(e => {
            let res;

            if (salryFrom < 0 && salryTo < 0) {
                res = e;
            } else if (salryFrom < 0) {
                res = e.salary <= salryTo;  
            } else if (salryTo < 0) {
                res = e.salary >= salryFrom;
            } else {
                res = e.salary >= salryFrom && e.salary <= salryTo;
            }  
            return res;
        });
    }

    getAllEmployees() {
        return Object.values(this.#employees);
    }
}