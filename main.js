
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

function getMin(array) {
    const result = array.reduce(function(res, cur) {
        return res < cur ? res : cur;
    });

    return result;
}

function getMax(array) {
    const result = array.reduce(function(res, cur) {
        return res > cur ? res : cur;
    });

    return result;
}

function getMinMaxAvg(array) {
    const result = array.reduce(function(res, cur, index) {
        res[0] = res[0] < cur ? res[0] : cur;
        res[1] = res[1] > cur ? res[1] : cur;
        res[2] += cur;
        return res;

    }, [array[0], array[0], 0]);

    result[2] /= array.length;
    return result;
}
