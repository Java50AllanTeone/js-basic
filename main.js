function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    for(let i = 0; i < str.length; i++) {
        res = res * base + getCode(str[i]);
    }

    return res;
}

function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;

    return res;
}

function myToString(number, base) {
    let res = '';
    base = base || 10;
    number = Math.trunc(Math.abs(number));

    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);
    } while (number);

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
    
    return fn(arg, arg2) === expRes ? passMsg : errMsg;
}

console.log(testFn(myParseInt, "ff", 16, parseInt("ff", 16)));
console.log(testFn(myParseInt, "123", null, parseInt("123")));
console.log(testFn(myParseInt, "Java", 36, parseInt("Java", 36)));
console.log(testFn(myParseInt, "zz", 16, NaN));
console.log(testFn(myParseInt, "123m", null, parseInt("123m")));
console.log(testFn(myParseInt, "123.35", null, parseInt("123.35")));
console.log(testFn(myParseInt, "-123", null, parseInt("-123")));
console.log("");

let num = 990500;
console.log(testFn(myToString, num, null, num.toString()));
console.log(testFn(myToString, num, 36, num.toString(36)));
num = 123.45;
console.log(testFn(myToString, num, 16, num.toString(16)));
console.log(testFn(myToString, num, null, num.toString()));
num = -123;
console.log(testFn(myToString, num, null, num.toString()));

