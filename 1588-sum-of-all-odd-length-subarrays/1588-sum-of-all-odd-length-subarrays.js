/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let oddSubArray = []
    for(i = 0; i < arr.length; i++){
        let counter = 0;
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            counter++
            sum += arr[j]
            if (counter % 2 !== 0) { 
                oddSubArray.push(sum)
            }
        }
    }
    return oddSubArray.reduce((acc, curr) => acc + curr)
    
};