function reverse(aString){
    let reversedArray = [];
    function reverseInner(aString){
        if(aString.length == 1){
            return reversedArray.push(aString[0]);
        }
        let aNewString = aString.substring(0, aString.length - 1);
        reverseInner(aNewString);          
        return reversedArray.unshift(aString[aString.length - 1]);
    }
    reverseInner(aString);
    return reversedArray.join("");
}//end reverse()


function isPalindrome(anotherString){

    //write a reursive function to test if the given string is a palindrome
    let aReversedString = reverse(anotherString);

    return (aReversedString == anotherString) ? 'true' : 'false';

    //use the code form reverse.js to create the reversed aString then see if they are equal
    //if this works, rewrite reverse as a pure (no wrapper function) recursive function

}//end isPalindrome()

//test cases:
console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('foobar')); //false
console.log(isPalindrome('tacocat')); //true
console.log(isPalindrome('amanaplanacanalpanama')); //true
console.log(isPalindrome('amanaplanacanalpandemonium')); //false