/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/^\s+|\s+$/g, '')
//     this rids of all potential whitespace
    let arr = s.split(' ');
// the split method will turn our string into an array of two respective elements;
    let lastElement =  arr[arr.length -1 ].length;
    return lastElement;
    
    
};