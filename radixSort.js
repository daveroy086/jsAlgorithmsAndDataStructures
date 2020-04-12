function radixSort(arr){

    console.log(arr);

    /*
    Pseudocode:
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

    //figure out how many digits the largest number has
    let howManyDigits = digitCount(arr);

    //Loop from k = 0 up to this largest number of digits
    for(k = 0; k < howManyDigits; k++){
        //For each iteration of the loop:
        //Create buckets for each digit (0 to 9)
        let buckets = [[], [], [], [], [], [], [], [], [], []];

        //Place each number in the corresponding bucket based on it's kth digit
        arr.forEach(function(element){
            //get it's kth digit
            let kthDigit = getDigit(element, k);
            //push it to the kth bucket
            buckets[kthDigit].push(element);
            //console.log(buckets);
            //delete it from arr:
              //get it's index
              let index = arr.indexOf(element);
              // don't remove it...redefine the empty arr before you fill it
              //arr.splice(index, 1);
              //console.log('arr is ', arr);
        });//end forEach()
        
        //Replace our existing array with values in our buckets, starting with zero and going up to 9
        arr = [];
        console.log("arr is ", buckets);
        buckets.forEach(function(eachSubArray){
            console.log('eachSubArray is ', eachSubArray);
            arr.concat(eachSubArray);
        });
        console.log(arr);
        console.log("new loop");
    }

}//end radixSort()

let anArray = [1, 456, 23, 7890, 2, 45, 789, 4, 78, 7];
console.log(radixSort(anArray));