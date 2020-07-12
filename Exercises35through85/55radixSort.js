function getDigit(num, i){
        return Math.floor(num / Math.pow(10, i) % 10);
}

function digitCount(x) {    //gets the numer of digits in x...was numDigits
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}
    
function mostDigits(theArray){    //gets the length of the longest number in an array
                                  // was digitCount
    let longestInt = 0;
    theArray.forEach(function(element){
            if(digitCount(element) > longestInt) longestInt = digitCount(element); 
    });
    return longestInt;
}

function radixSort(arr) {
    
    let howManyDigits = mostDigits(arr);

    for(let k = 0; k <= howManyDigits; k++){    //seperate numbers by place and digit
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
console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); 
    // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]