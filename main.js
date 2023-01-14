
function evenOddSort(array) {
    const res = array.sort(function(arg1, arg2) {
        const result =  arg1 % 2 == 0 ? -1 : 1;

        if (result < 0) {
            return arg2 % 2 == 0 ? 0 : -1;
        }
    });
    return res;
}

function oddEvenSort(array) {
    const res = array.sort(function(arg1, arg2) {
        const result = arg1 % 2 != 0 ? -1 : 1;

        if (result < 0) {
            return arg2 % 2 != 0 ? 0 : -1;
        }
    });
    return res;
}

function evenAscOddDesc(array) {
    const res = array.sort(function(arg1, arg2) {
        let result;

        if (arg1 % 2 == 0 && arg2 % 2 == 0) {
            result = arg1 - arg2;
        } else if (arg1 % 2 != 0 && arg2 % 2 != 0) {
            result = arg2 - arg1;
        } else {
            result = arg1 % 2 == 0 ? -1 : 1;
        }
        return result;
    });
    return res;

}

console.log(evenOddSort([20, -10, 333, 1000, 552, 7, -7]));
console.log(evenAscOddDesc([20, -10, 333, 1000, 552, 7, -7]));