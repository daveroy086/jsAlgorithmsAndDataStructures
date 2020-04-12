function radixSort(arr){
    
    function getDigit(anInt, place){    //gets the digit, at a place, in anInt
        return Math.floor(anInt / (10**(place - 1)) % 10);
    }
    
    function numDigits(x) {    //gets the numer of digits in x
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    }
    
    function digitCount(theArray){    //gets the length of the longest number in an array
        let longestInt = 0;
        theArray.forEach(function(element){
            if(numDigits(element) > longestInt) longestInt = numDigits(element); 
        });
        return longestInt;
    }

    let howManyDigits = digitCount(arr);

    for(k = 0; k <= howManyDigits; k++){    //seperate numbers by place and digit
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        arr.forEach(function(element){
            let kthDigit = getDigit(element, k);
            buckets[kthDigit].push(element);
        });//end forEach()

        //gather the seperated numbers into a new list
        let outputArr = [];
        buckets.forEach(function(eachSubArray){
            outputArr = outputArr.concat(eachSubArray);
        });
        arr = outputArr;
    }
return arr;
}//end radixSort()

let anArray = [1, 456, 23, 7890, 2, 45, 789, 4, 78, 7];
console.log(radixSort(anArray));