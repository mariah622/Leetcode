/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let array = []
//     make an empty array for our running sum
    
    sum = 0
//     sum starts at 0
    
    for(let i = 0; i < nums.length; i++){
//         iterate through every number in our nums array
        
        sum = sum + nums[i]
//         sum is equal to the new sum plus the next number in our nums array
        
        array.push(sum);
//         push our new sum into our new array
    }
    
    return array
//     We return our array
    
};