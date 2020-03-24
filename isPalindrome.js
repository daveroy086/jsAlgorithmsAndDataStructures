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

    let aReversedString = reverse(anotherString);

    return (aReversedString == anotherString) ? true : false;

}//end isPalindrome()

//test cases:
console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('foobar')); //false
console.log(isPalindrome('tacocat')); //true
console.log(isPalindrome('amanaplanacanalpanama')); //true
console.log(isPalindrome('amanaplanacanalpandemonium')); //false