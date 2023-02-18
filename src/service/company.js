
// Employee structure and function createEmployee() taken from previous HW
export function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}


export class Company {
    #employees; //object key: <id value>, value: reference to Employee object

    constructor() {
        this.#employees = {};
    }

    addEmployee(empl) {
        let res = true;

        this.#employees[empl.id] ? res = false : this.#employees[empl.id] = empl;
        return res;
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
}