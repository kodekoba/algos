const u = [2,3,1,5,4]
const m = [2,4,0,1,3,1,1,10]

const jumpKing = (arr) => { // needs revision
    let jump = 0
    let i = 0
    while (i <= arr.length) {
        let max = arr[i + 1] + i;
        let maxLoc;
        for (let j = 1; j < arr[i] + 1; j++) {
            if (arr[i + j + 1] + i > max) {
                maxLoc = i + j + 1
            }
        }
        i = maxLoc
        ++jump
    }
    return jump
}

console.log(jumpKing(u))  // valid
console.log(jumpKing(m))  // invalid
