function minSubArrayLen(arr, x) {
    
    // create some psuedocode
    // loop thru the array
    // beginning at each number create a subArray whose total is greater than or equal to the x
    // track the len of the shortest array
    let len = Infinity;
    let arrLen = arr.length;
    let p1 = 0;
    for(let p2 = 0; p2 < arrLen; p2++) {
        let subArrSum = 0;
        var count = 0;
        p1 = p2;
        while(subArrSum < x && p1 < arrLen) {    // gets the sum o fthe minimum subarray starting at i
            subArrSum += arr[p1];
            count++;
            p1++;          
        }
        if(subArrSum >= x && count < len) len = count;
    }
    if(len == Infinity) len = 0;
    return len;
} // end minSubArrayLen()

// Tests:
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5 */
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0

/* 
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. */   