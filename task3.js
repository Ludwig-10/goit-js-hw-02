const findLongestWord = function (string) {
    let stringWords = string.split(' ');
    let wordlonges;
    let longesWord = 0;
 
    for(const stringWord of stringWords) {
         
        if (stringWord.length > longesWord) {
         longesWord = stringWord.length;
         wordlonges = stringWord;
        } 
    }
    return wordlonges;
   };
   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
   console.log(findLongestWord('Google do a roll'));
   console.log(findLongestWord('May the force be with you'));