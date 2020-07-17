function reverse(aString){
    let reversedArray = [];    
    if(aString.length == 1){
        reversedArray.push(aString);
        return reversedArray;
    }
    reversedArray.unshift(aString.substring(aString.length - 1));
        reversedArray = reversedArray.concat(reverse(aString.substring(0, aString.length - 1)));         
    return reversedArray.join("");
    }//end reverse()

function isPalindrome(anotherString){

    //write a reursive function to test if the given string is a palindrome
    let aReversedString = reverse(anotherString);
    return (aReversedString == anotherString) ? true : false;

}//end isPalindrome()

// Tests:
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/