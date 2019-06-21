function greatestCommonDenominator(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[arr.length - 1] == 0) {
            return arr[arr.length - 2];
        } else if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            return greatestCommonDenominator(arr);
        } else if (arr[i] > 0 && arr[i + 1] >= arr[i]) {
            arr[i + 1] = arr[i + 1] % arr[i];
            return greatestCommonDenominator(arr);
        }
    }
}

function leastCommonMultiple(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = (arr[i] * arr[i + 1]) / (greatestCommonDenominator([arr[i], arr[i + 1]]));
    }
    return arr[arr.length - 1];
}