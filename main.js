function myParseInt(str, base) {
    base = base || 10;
    str = str.trim();

    const isNegative = str[0] == '-';
    let res = 0;

    for (let i = isNegative ? 1 : 0; i < str.length; i++) {
        let code = getCode(str[i], base);

        if (isNaN(code)) {
            res = i > 0 ? res : code;
            break;
        }
        res = res * base + code;
    }

    return isNegative ? -res : res;
}

function getCode(symbol, base) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const symbolCode = symbol.charCodeAt() - codeA + 10;

    return symbol < 'a' || symbol > 'z' || symbolCode >= base ? +symbol : symbolCode;
    //verifies that symbol does not overstep the base numeric interval
}

function myToString(number, base) {
    base = base || 10;
    const isNegative = number < 0;
    number = Math.abs(number);

    let res = convertNumber(Math.trunc(number), base);

    if (number % 1) {
        const strNumbers = ("" + number).split(".");
        const fractNumber = myParseInt(strNumbers[1]);

        res = `${res}.${convertNumber(fractNumber, base)}`;
    }

    return isNegative ? `-${res}` : res;
}

function convertNumber(number, base) {
    let res = "";

    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);
    } while (number);

    return res;
}

function convertFraction(number, base) {
    let res = '';

    while (number) {        //method for correct converting fractional part to any numeric system as Number.toString()
                            //works correctly only with converting from decimal to binary
        number *= base;
        if (number >= 1) {
            res += Math.trunc(number);
            number = number % 1 == 0 ? 0 : number - Math.trunc(number);
        } else {
            res += "0";
        }
    }
    
    return res;
}

function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol = digit < 10 ? "" + digit : String.fromCharCode(digit - 10 + codeA);

    return symbol;
}


function testFn(fn, arg, arg2, expRes) {
    const passMsg = `${fn.name} test are passed with argument ${arg} and base ${arg2 ? arg2 : 10}`;
    const errMsg = `there is some issue in ${fn.name} with argument ${arg} and base ${arg2 ? arg2 : 10}`;

    if (isNaN(expRes)) {
        return isNaN(fn(arg, arg2)) ? passMsg : errMsg;
    }

    return fn(arg, arg2) === expRes ? passMsg : errMsg;
}

console.log(testFn(myParseInt, "ff", 16, parseInt("ff", 16)));
console.log(testFn(myParseInt, "123", null, parseInt("123")));
console.log(testFn(myParseInt, "Java", 36, parseInt("Java", 36)));
console.log(testFn(myParseInt, "zz", 16, NaN));
console.log(testFn(myParseInt, "123m", null, parseInt("123m")));
console.log(testFn(myParseInt, "123.35", null, parseInt("123.35")));
console.log(testFn(myParseInt, "-123", null, parseInt("-123")));

// let n = 0.816;
// console.log(n.toString(3));
// console.log(myToString(n, 3));


let num = 990500;
console.log(testFn(myToString, num, null, num.toString()));
console.log(testFn(myToString, num, 36, num.toString(36)));
num = 123.45;
console.log(testFn(myToString, num, 16, num.toString(16)));
console.log(testFn(myToString, num, null, num.toString()));
num = -123;
console.log(testFn(myToString, num, null, num.toString()));

