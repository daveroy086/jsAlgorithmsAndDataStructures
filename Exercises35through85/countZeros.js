/* Divide and Conquer - countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
 */
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
}
//let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
//countZeroes(arr);

 
    countZeroes([1,1,1,1,0,0]); // 2
    countZeroes([1,0,0,0,0]); // 4
    countZeroes([0,0,0]); // 3
    countZeroes([1,1,1,1]); // 0 