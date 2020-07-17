function reverse(aString){

    //reverse becomes my recursive function wrapper

    let reversedArray = []; //an array to hold the letters as I accumulate them
    function reverseInner(aString){

        if(aString.length == 1){    //base case
            return reversedArray.push(aString[0]);
        }
        let aNewString = aString.substring(0, aString.length - 1);
        reverseInner(aNewString);          
        return reversedArray.unshift(aString[aString.length - 1]);

    }//end reverseInner()

    reverseInner(aString);

    return reversedArray.join("");
        
}//end reverse()

//if this works, rewrite reverse as a pure (no wrapper function) recursive function
//se 16isPalindrome for help

// Tests:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

/*
Instructions:
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/