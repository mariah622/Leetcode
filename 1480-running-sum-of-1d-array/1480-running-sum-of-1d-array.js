/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let array = []
    sum = 0
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
        array.push(sum);
    }
    return array
    
};