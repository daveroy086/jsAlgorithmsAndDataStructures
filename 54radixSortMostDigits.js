function numDigits(x) {    //gets the numer of digits in x
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    }
    
function mostDigits(theArray){    //gets the length of the longest number in an array
    let longestInt = 0;
    theArray.forEach(function(element){
            if(numDigits(element) > longestInt) longestInt = numDigits(element); 
    });
    return longestInt;
}