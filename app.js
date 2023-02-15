const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
//console.log(`employee1==employee2 is ${employee1 == employee2}`)
const employee3 = employee1;
//console.log(`employee3==employee1 is ${employee3 == employee1}`)
employee3.salary = 20000;
//console.log(`employee1 salary = ${employee1.salary} `)
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Lod", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Lod", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
const index = employees.findIndex(function(empl) {
    return empl.id === 126;
})
const employee = employees.find(function(empl) {
    return empl.id === 126;
})
//HW #18
function getEmployee(employees, id) {

    return employees.find(function(e) {     //returns reference to an Employee object with a given id value
        return e.id === id;
    });
}

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {

    return employees.filter(function(e) {       //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
        return e.salary >= salaryFrom && e.salary <= salaryTo;
    });
}

function getEmployeesByCity(employees, city) {
    
    return employees.filter(function(e) {    //returns array of Employee objects from a given city   
        return e.address.city === city;
    }); 
}

function getEmployeeNames(employees) {

    return employees.map(function(e) {      //returns array of all Employee names
        return e.name;
    })
}

function sortEmployeesByAge(employees) {
    
    return employees.sort(function(e1, e2) {        //returns array of Employee objects sorted by age in ascending order
        return e2.birthYear - e1.birthYear;
    })
}

function computeSalaryBudget(employees) {
    
    return employees.reduce(function(acc, cur) {        //computes and returns total salary for all Employee objects
        return acc + cur.salary;
    }, 0);
}


//TESTS

function testGetEmployee(employees, id) {
    return `test getEmployee has result ${getEmployee(employees, id).id === id}`;
}

function testGetEmployeesBySalary(employees, salaryFrom, salaryTo, result) {
    const res = getEmployeesBySalary(employees, salaryFrom, salaryTo);

    return `test getEmployeeBySalary has result ${JSON.stringify(res) === JSON.stringify(result)}`;
}

function testGetEmployeesByCity(employees, city, result) {
    const res = getEmployeesByCity(employees, city);

    return `test getEmployeesByCity has result ${JSON.stringify(res) === JSON.stringify(result)}`;
}

function testGetEmployeeNames(employees, result) {
    return `test getEmployeeByNames has result ${getEmployeeNames(employees).toString() === result.toString()}`;
}

function testSortEmployeesByAge(employees, result) {
    const res = sortEmployeesByAge(employees).map(function(e) {
        return e.birthYear;
    });

    return `test sortEmployeesByAge has result ${res.toString() === result.toString()}`;
}

function testComputeSalaryBudget(employees) {
    let res = 0;

    for (let i = 0; i < employees.length; i++) {
        res += employees[i].salary;
    }

    return `test computeSalaryBudget has result ${computeSalaryBudget(employees) === res}`;
}


console.log(testGetEmployee(employees, 126));

console.log(testGetEmployeesBySalary(employees, 13000, 13000, [employees[3]]));
console.log(testGetEmployeesBySalary(employees, 10000, 10000, [employees[5], employees[7]]));
console.log(testGetEmployeesBySalary(employees, 0, 30000, [employees[0], employees[1], employees[2], employees[3], employees[4], employees[5], employees[6], employees[7]]));

console.log(testGetEmployeesByCity(employees, "Tel Aviv", [employees[1]]));
console.log(testGetEmployeesByCity(employees, "Lod", [employees[0], employees[4], employees[7]]));

console.log(testGetEmployeeNames(employees, ["Vasya", "David", "Sara", "Abraham", "Moshe", "Goga", "Sasha", "Victor"]));

console.log(testSortEmployeesByAge(employees, [2003, 2000, 2000, 2000, 1993, 1990, 1985, 1975]));

console.log(testComputeSalaryBudget(employees));