function isSubsequence(part, all) {
    
    let len = part.length;
    let len2 = all.length;
    let toAdd = 0;
    //loop thru the 'part'
    for(let p1 = 0; p1 < len; p1++) {
        // for each letter loop thru 'all' looking for it's match begininng where you found the last match
        for(var p2 = p1 + toAdd; p2 < len2; p2++) {
            if(part.charAt(p1) == all.charAt(p2)) break;
        }
        if((p1 == len - 1) && (part.charAt(p1) == all.charAt(p2))) return true;
    }
    return false;
} // end isSubsequence
//Tests:

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'abraadabrac')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)


/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */
