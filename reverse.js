function reverse(aString){

    //reverse becomes my recursive function wrapper

    let reversedArray = []; //an array to hold the letters as I accumulate them

    function reverseInner(aString){

        if(aString.length == 1){    //base case
            return reversedArray.push(aString[0]);
        }
        
        //recursive
        let aNewString = aString.substring(0, aString.length - 1);
        reverseInner(aNewString);          
        return reversedArray.unshift(aString[aString.length - 1]);

    }//end reverseInner()

    reverseInner(aString);

    return reversedArray.join("");
        
}//end reverse()

console.log(reverse('ewa')); //awesome
console.log(reverse('rithmschool')); //loohcsmhtir