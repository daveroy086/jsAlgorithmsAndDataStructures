function getDigit(num, i){
        return Math.floor(num / Math.pow(10, i) % 10);
}

/* 
this code did not run and threw many errors eeven though it worked when I ran radixSort on my computer:

function getDigit(anInt, place){    //gets the digit, at a place, in anInt
        return Math.floor(anInt / (10**(place - 1)) % 10);
    }
*/

/* Implement a function called getDigit  which accepts a positive integer and a position, and returns the digit in that number at the given position. The position reads from right to left, so the 0th position corresponds to the rightmost digit.

Examples

    getDigit(12345, 0); // 5
    getDigit(12345, 1); // 4
    getDigit(12345, 2); // 3
    getDigit(12345, 3); // 2
    getDigit(12345, 4); // 1
    getDigit(12345, 5); // 0
     
    getDigit(8987, 0); // 7
    getDigit(8987, 1); // 8
    getDigit(8987, 2); // 9
    getDigit(8987, 3); // 8
    getDigit(8987, 4); // 0

subject should return the correct digit for positive integers

Expected 0 to be 5, 'getDigit(12345, 0) should be 5.'.
Expected 5 to be 4, 'getDigit(12345, 1) should be 4.'.
Expected 4 to be 3, 'getDigit(12345, 2) should be 3.'.
Expected 3 to be 2, 'getDigit(12345, 3) should be 2.'.
Expected 2 to be 1, 'getDigit(12345, 4) should be 1.'.
Expected 1 to be 0, 'getDigit(12345, 5) should be 0.'.
Expected 0 to be 7, 'getDigit(8987, 0) should be 7.'.
Expected 7 to be 8, 'getDigit(8987, 1) should be 8.'.
Expected 8 to be 9, 'getDigit(8987, 2) should be 9.'.
Expected 9 to be 8, 'getDigit(8987, 3) should be 8.'.
Expected 8 to be 0, 'getDigit(8987, 4) should be 0.'.
 */