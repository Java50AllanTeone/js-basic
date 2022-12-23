function numberValidation(number) {
    number = typeof(number) == "boolean" ? "boolean" : number; //checks if number has boolean value

        return isNaN(number) ? false : true;
}

function getDigitsSum(number) {
    let res = 0;

    if (!numberValidation(number)) {
        return -1;
    }

    number = Math.trunc(+number);
    number = number >= 0 ? number : -number;

    while (number > 0) {
        res += number % 10;
        number = Math.trunc(number / 10);
    }

    return res;
}






getDigitsSum(-1234.456);