    function capitalizeWords (arr) {
    /*
    Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
    */

   // pseudocode:
   // use forEach to loop thru the array: remove each word, get its cap version and insert it
   let aCounter = 0;
    arr.forEach(function(aWord){
        arr.splice(aCounter, 1, eachWord(aWord));
        aCounter++;
    });

   //create a function eachWord that recursivly capitalizes the word
   function eachWord(aWord) {
       if(aWord.length === 1) {   // base case: when the 'word' is a single letter capitalize it and return 
           return aWord.toUpperCase();
       }
       // take the first letter off of the string
       // call eachWord on the remaining substring
       // concat the capitalized first letter with the returned substring
       return aWord[0].toUpperCase().concat(eachWord(aWord.slice(1)));
   } // end eachWord

   return arr;
} // end capitalizeWords

// Test:
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']