/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const array = [first];
    
    encoded.forEach((el, i) => {
        array.push(array[i] ^ el);
    })
    return array;
};