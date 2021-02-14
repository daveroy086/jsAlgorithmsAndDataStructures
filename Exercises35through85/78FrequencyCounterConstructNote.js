function constructNote(message, letters) {

    let lettersObject = {};
    
    for(let char of letters) {
        lettersObject[char] = (lettersObject[char] || 0) + 1;
    }
    
    for (let char of message) {
        if(lettersObject.hasOwnProperty(char) && lettersObject[char] > 0) {
            lettersObject[char] -= 1;
        } else {
            return false;
        }
    }    // end for
    return true;
}    // end constructNote
 
// Test:
console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
/**
 * Instructions:
 * Write a function called constructNote, which accepts two strings,
 * a message and some letters.
 * The function should return true if the message can be built with
 * the letters that you are given, or it should return false.
 * Assume that there are only lowercase letters and no space or special
 * characters in both the message and the letters.
 * 
 * Bonus Constraints:
 * If M is the length of message and N is the length of letters:
 * Time Complexity: O(M+N)
 * Space Complexity: O(N)
 */