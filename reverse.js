function reverse(aString){

    //reverse becomes my recursive function wrapper

    let reversedArray = []; //an array to hold the letters as I accumulate them

    function reverseInner(aString){
        console.log("aString is ", aString);

        if(aString.length == 1){    //base case
            reversedArray.push(aString[0]);
            console.log("reversedArray(base) is ", reversedArray);
            return reversedArray;
        }

        //string is ewa; shorten the string to ew
        let aNewString = aString.substring(0, aString.length - 1);
          //call inner on ew
          reverseInner(aNewString);
          //string is ew; shorten to e
            //call inner on e
              //this is the base case
              //return reversedArray
          //add the last letter of ew to the beginning of reversedArray
          //return reversedArray
        //add the last letter of ewa to reversedArray and return reversedArray
        return reversedArray.unshift(aString[aString.length - 1]);
    }//end reverseInner()

    reverseInner(aString);

    let myOutput = reversedArray.join("");
    console.log(myOutput);
    return myOutput ;
        
}//end reverse()

console.log(reverse('ewa')); //awesome
//console.log(reverse('rithmschool')); //loohcsmhtir