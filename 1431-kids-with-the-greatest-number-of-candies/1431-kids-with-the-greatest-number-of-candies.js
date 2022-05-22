/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    let result = []
        for(let i = 0; i < candies.length; i++){
           if(candies[i] > max){
               max = candies[i]
           }
        }
    
    for(let i = 0; i < candies.length; i++){
        let extra = candies[i] + extraCandies
        
        if(extra >= max){
            result[i] = true
        } else {
            result[i] = false
        }
    
    
    }
    return result
    
    
};