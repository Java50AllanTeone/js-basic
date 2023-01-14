
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

console.log(evenOddSort([20, -10, 333, 1000, 552, 7, -7]));
console.log(oddEvenSort([20, -10, 333, 1000, 552, 7, -7]));