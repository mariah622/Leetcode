/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sortedSentence = [];
    let sentArray = s.split(" ")
    // console.log(sentArray)
    
    for(const item of sentArray) {
        const index = Number(item[item.length-1]) - 1
        sortedSentence[index] = item.slice(0, item.length-1)
    }
    
    return sortedSentence.join(" ")
    
};