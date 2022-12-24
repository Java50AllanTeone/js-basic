const ERR_MSG = "number is not valid";


function getDigitsSum(number) {
    let res = 0;

    if (!isNumber(number)) {
        return ERR_MSG;
    }

    number = Math.trunc(+number);
    number = number >= 0 ? number : -number;

    while (number) {
        res += number % 10;
        number = Math.trunc(number / 10);
    }

    return res;
}

function computeExpression(expression) {
    return eval(expression);
}

function printAnanas() {
    const letA = "A";
    const letS = "S";

    const res = letA + letA / letS + letA + letS;
    console.log(res.toLowerCase());

    return res.toLowerCase();       //for test
}

function reverse(number) {
    let res = "";

    if (!isNumber(number)) {
        return ERR_MSG;
    }

    number = Math.trunc(+number);

    if (number < 0) {
        res = "-";
        number = -number;
    }

    do {
        res += number % 10;
        number /= 10;
        number = Math.trunc(number);
    } while (number);

    return res;
}

function isNumber(number) {
    number = typeof(number) == "boolean" ? "boolean" : number; //checks if number has boolean value and prevents converting to numeric type

        return isNaN(number) ? false : true;
}

function testFn(fn, arg, expRes) {
    const passMsg = `${fn.name} test are passed`;
    const errMsg = `there is some issue in ${fn.name} with argument ${arg}`;
    
    return fn(arg) === expRes ? passMsg : errMsg;
}


console.log(testFn(getDigitsSum, 123.45, 6));   //test getDigitsSum
console.log(testFn(getDigitsSum, -280.123, 10));
console.log(testFn(getDigitsSum, 123, 6));

console.log(testFn(computeExpression, "9000 / ((10 + 20) ** 2)", 10));  //test computeExpression
console.log(testFn(computeExpression, "9 + 100 / 2", 59));

console.log(testFn(printAnanas, null, "ananas"));   // test printAnanas

console.log(testFn(reverse, 123.45, "321"));    //test reverse
console.log(testFn(reverse, -280.123, "-082"));
console.log(testFn(reverse, 123, "321"));
console.log(testFn(reverse, -123, "-32"));