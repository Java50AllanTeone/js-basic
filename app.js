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
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "UK"),
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



function reducer(res, empl) {
    const newRes = res + empl.salary;
    return newRes
}

let field = "salary";

function displayFieldValue(employees, index, field) {
    console.log(employees[index][field]);
}


function computeMinMaxAvgSalary(employees) {
    const res =  employees.reduce((res, empl) => {
        if (res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if (res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;

    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary = res.avgSalary / employees.length;
    return res;
}

function displayValue(minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
};

const minMaxAvg = computeMinMaxAvgSalary(employees);


const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];


function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}

function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}

function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0){
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}

//displayStringOccurrences(strings);




//HW #19
function getMostPopulatedCountry(employees) {       //returns country with most amount of employees
    
    const stringOccurrences = getStringOccurrences(employees.map(e => e.address.country));
    const arrayOccurrences = Object.entries(stringOccurrences);

    const res = arrayOccurrences.reduce((res, cur) => {
        if (res[1] < cur[1]) {
            res = cur;
        }
        return res;
    });
    return res[0];
}


function getMostPupulatedCountries(employees, counter) {        //returns a given number (conter) of countries with most amount of employees

    const stringOccurrences = getStringOccurrences(employees.map(e => e.address.country));
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort((e1, e2) => e2[1] - e1[1]);

    return arrayOccurrences.slice(0, counter);
}


function isAnagram(word, anagram) {     //returns true if a given anagram is indeed an angram of a given word
    const wordArr = Array.from(word);
    const anagramArr = Array.from(anagram);
    wordArr.sort((e1, e2) => e1 < e2 ? -1 : 1);
    anagramArr.sort((e1, e2) => e1 < e2 ? -1 : 1);

    return wordArr.toString() === anagramArr.toString();
}

console.log(getMostPupulatedCountries(employees, 3));
console.log(isAnagram("word", "drow"));