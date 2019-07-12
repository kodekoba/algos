const twoSum = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    while (i !== j) {
        if (nums[i] + nums[j] < target) {
            i++;
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else if (nums[i] + nums[j] === target) {
            return [i,j];
        }
    }
    return false;
};

console.log(twoSum([1,2,3,5,10,15], 30));