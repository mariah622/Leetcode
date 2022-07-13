/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W|_/g, '').toLowerCase();
    
    return s === s.split("").reverse().join("");
};