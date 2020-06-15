/* Divide and Conquer - countZeroes

Given an array of 1s and 0s which has all 1's first followed by all 0's, write a function called countZeroes, which returns the number of zeroes in the array.
 */
function countZeroes(arr) {

    let zeros = 0;
    while(arr.length > 1) {
        let center = Math.floor(arr.length / 2);
        if(arr[center] === 1) {
            arr.splice(0, center);
        } else {
            let incomingArrayLength = arr.length;
            arr.splice(center, arr.length - center);
            zeros += incomingArrayLength - arr.length;
        }
    }
    if(arr[0] == 0) zeros += 1;
    console.log(zeros);
    return zeros;
}
countZeroes([1, 1, 1, 1, 1, 0, 0]); //2
countZeroes([1, 1, 1, 1, 0, 0, 0]); //3
countZeroes([1, 1, 1, 1, 0, 0, 0, 0, 0]); //5
countZeroes([1,1,1,1,0,0]); // 2
countZeroes([1,0,0,0,0]); // 4
countZeroes([0,0,0]); // 3
countZeroes([1,1,1,1]); // 0 


/*
recovered from site:
// i like this algorithm but need to fix the first while conditional
function countZeroes(arr) {
    //remove extra 1's with divide and conquer
    while(arr[arr.length / 2 != 0]) { 
        let savedArray = arr;
        arr.splice(0, arr.length / 2);
    }

    //remove remaining 1's one at a time
    while(arr[0]) {
        arr.splice(0, 1);
    }

    return arr.length;
} */