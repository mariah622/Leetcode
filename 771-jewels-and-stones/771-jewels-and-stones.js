/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    count = 0 
    for(i = 0; i < stones.length; i++){
        if(jewels.indexOf(stones.charAt(i)) >= 0){
            count++
        }
    }
    return count
    
};