/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let array = []
  for(let i=0; i< nums.length; i++){
      let count = 0
      let j = 0
      while(j < nums.length){
          if(nums[i]> nums[j]){
              count++
              j++
          } else {
              j++
          }
      }
      array.push(count)
//       push the each count we get from the loop
  }
    return array
    
};