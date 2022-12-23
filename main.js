const ERR_MSG = "number is not valid";

function isNumber(number) {
    number = typeof(number) == "boolean" ? "boolean" : number; //checks if number has boolean value

        return isNaN(number) ? false : true;
}

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


