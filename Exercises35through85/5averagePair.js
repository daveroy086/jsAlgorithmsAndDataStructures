function averagePair(arr, target) {
    
    if(arr.length == 0) return false;
    let len = arr.length - 1;
    let ave = 0;
    for(let p1 = 0; p1 < len; p1++) {
        let p2 = p1 + 1;
        while(p2 < len + 1) {
            ave = (arr[p1] +arr[p2]) / 2;
            if(ave > target) break;
            if(ave == target) return true;
            p2++;
        }
    }
    return false;
} // end averagePair()

/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1) */

//tests:

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19,20,21,22,23],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false