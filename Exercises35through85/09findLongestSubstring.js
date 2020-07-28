function findLongestSubstring(str){
    
/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

    // pseudocode:init two interators, a substring and a max length
    let p1 = 0;
    let p2 = 0;
    let subString = "";
    let maxLength = 0;
    let strLength = str.length;
    // loop thru the str looking for the max
    while(p2 < strLength) {
        // if the charAt p2 is not in subString increment p2 and increment maxlength and p2
        subString = str.slice(p1, p2);
        if(!subString.includes(str.charAt(p2))) {
            // increment the second iterator
            p2 += 1;
            if (subString.length + 1 > maxLength) maxLength = subString.length + 1;
        } else {
            // if it is move p1 to the spot after the previous instance of the charAt p2 
             for(i = p1; i < p2; i++) {
                if(str.charAt(i) == str.charAt(p2)) {
                     p1 = i + 1;
                }
            } // end for           
        }
    } // end while
    return maxLength;    
} // end findLongestSubstring

//Tests:
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6    