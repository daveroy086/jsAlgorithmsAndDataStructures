function RadixSort(arr){

    /*
    Pseudocode:
        Define a function that accepts an array of numbers
        figure out how many digits the largest number has
        Loop from k = 0 up to theis largest number of digits
        For each iteration of the loop:
            Create buckets for each digit (0 to 9)
            Place each number in the corresponding bucket based on it's kth digit
            Replace our existing array with values in our buckets, starting with zero andgoing up to 9
            return list at the end
    */
    
    function getDigit(anInt, place){//gets the digit, at a place, in anInt
        return Math.floor(anInt / (10**place)) % 10;
    }
    
    function numDigits(x) {//gets the numer of digits in x
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    }
    
    function digitCount(theArray){//gets the length of the longest number in an array
        let longestInt = 0;
        theArray.forEach(function(element){
            if(numDigits(element) > longestInt) longestInt = numDigits(element); 
        });
        return longestInt;
    }
}//end radixSort()
let anArray = [1, 456, 23, 7890];
console.log(digitCount(anArray));
