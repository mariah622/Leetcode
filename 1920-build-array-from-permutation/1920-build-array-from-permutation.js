/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    ans = []
    
    for(let i=0; i < nums.length; i++){
//         side note for self: always check for typos please!!!!
        ans[i] = nums[nums[i]]
    }
    
    return ans
  
    
};