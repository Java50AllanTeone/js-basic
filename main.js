const ERR_MSG = "number is not valid";
const TEST_PASS = " tests are passed";
const TEST_ERR = "there is some issue in ";

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

function testGetDigitsSum(number, result) {
    return getDigitsSum(number) === result;
}

function testComputeExpression(expression, result) {
    return computeExpression(expression) === result;
}

function testPrintAnanas(string) {
    return printAnanas() === string;
}

function testReverse(number, result) {
    return reverse(number) === result;
}

function test() {
    const digitsSumRes = (testGetDigitsSum(123.45, 6) && testGetDigitsSum(-280.123, 10) && testGetDigitsSum(123, 6)) ? 
        "digit sum" + TEST_PASS : TEST_ERR + "digit sum";

    const computeExpRes = (testComputeExpression("9000 / ((10 + 20) ** 2)", 10) && testComputeExpression("9 + 100 / 2", 59)) ?
        "compute expression" + TEST_PASS : TEST_ERR + "compute expressions";

    const ananasRes = (testPrintAnanas("ananas")) ? "print ananas" + TEST_PASS : TEST_ERR + "in print ananas";

    const reverseRes = (testReverse(123.45, "321") && testReverse(-280.123, "-082") && 
        testReverse(123, "321") && testReverse(-123, "-321")) ? "reverse" + TEST_PASS : TEST_ERR + "reverse";

    console.log(digitsSumRes);
    console.log(computeExpRes);
    console.log(ananasRes);
    console.log(reverseRes);
}

test();
