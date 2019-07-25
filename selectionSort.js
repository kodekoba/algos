const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 0, 4];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minLoc = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minLoc]) {
                minLoc = j
            }
        }
        // console.log("before",arr, "i:", i, ", minLoc: ", minLoc)
        let temp = arr[i]
        arr[i] = arr[minLoc]
        arr[minLoc] = temp
        // console.log("after",arr)
    }
    return arr
}

console.log(selectionSort(nums));
