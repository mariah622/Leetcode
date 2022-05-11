/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
//     two ways to solve:
//     ans = []
    
//     for(i =0; i < nums.length; i++){
//         ans[i] = nums[i]
//         ans[i + 3] = nums[i]
        
        
//     }
//     return  ans
    ans = nums.concat(nums)
    return ans
//     concat merges two or more arrays. I am merging my nums array twice into ans. ans is the concatenation of two nums arrays. 
};