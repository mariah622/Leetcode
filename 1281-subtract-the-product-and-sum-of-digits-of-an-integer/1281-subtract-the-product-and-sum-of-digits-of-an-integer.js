/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    sum = 0
    product = 1
    arr = n.toString().split(""); 
    for(let i =0; i < arr.length; i++){
        sum += Number(arr[i])
        product *= arr[i]
        
    }
    console.log(sum)
    console.log(product)
    return product - sum
};
subtractProductAndSum(234)
