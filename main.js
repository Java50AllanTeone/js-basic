
function coloringString(str1, str2) {
    if (!isStringsValid(str1, str2)) {
        console.log("Wrong arguments");
        return undefined;
    }

    str2Arr = Array.from(str2);

    return str2Arr.map(function(char, index)  {
        return str1.indexOf(char, index) == index ? "green" : str1.indexOf(char) >= 0 ? "yellow" : "red";
    });
}

function isStringsValid(arg1, arg2) {
    return typeof arg1 == "string" && typeof arg2 == "string" && arg1.length === arg2.length;
}


function getNumbersWithDigitsAmount(digitsAmount, array) {

    return array.filter(function(number) {
        return Math.abs(number).toString().length === digitsAmount;
    });
}