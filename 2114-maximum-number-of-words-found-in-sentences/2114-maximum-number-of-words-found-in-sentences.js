/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    mostWords = 0
    a = 0
    for(let i = 0; i < sentences.length; i++){
        a = sentences[i].split(" ").length;
        console.log(a)
        
        if (a > mostWords){
            mostWords = a
        } 
    }
    return mostWords
    
};