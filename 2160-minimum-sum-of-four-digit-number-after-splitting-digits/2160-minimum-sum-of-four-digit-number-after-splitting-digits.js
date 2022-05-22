/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString().split("").sort();
    return (Number(num[0]+num[3]) + Number(num[1]+num[2]))
    
    
};