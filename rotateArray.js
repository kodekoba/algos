// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// void return; alter the input, no new array; only O(1) extra memory

var rotateArray = function(nums, k) {
    const originalLength = nums.length;
    for (let i = 0; i < k; i++) {
        for (let j = originalLength - 1; j >= 0; j--) { // this forloop is basically unshift
            nums[j+1] = nums[j]
        }
        nums[0] = nums[nums.length - 1];
    }
    nums.pop();
    console.log(nums);
    return;
}

//console.log(rotateArray([1,2,3,4,5,6,7],3));

var rotateArray2 = function(nums, k) { 
    for (let i = 0; i < nums.length - k; i++) {
        nums.push(nums[0]);
        nums.shift();
    }
    console.log(nums);
    return;
}

console.log(rotateArray2([1,2,3,4,5,6,7],3));

var rotateArray3 = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        nums[i] = nums[(i + k) % nums.length];
        nums[(i + k) % nums.length] = temp;
        console.log(nums);
    }
    //console.log(nums);
    return;
}

//console.log(rotateArray3([1,2,3,4,5,6,7],3));

/*
[1 2 3 4 5 6 7]
[4 2 3 1 5 6 7]
[4 5 3 1 2 6 7]
[4 5 6 1 2 3 7]
[4 5 6 7 2 3 1]
[2 5 6 7 4 3 1]
[]


[5,6,7,1,2,3,4]
*/
