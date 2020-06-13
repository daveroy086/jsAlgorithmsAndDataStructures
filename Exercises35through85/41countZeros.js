/* Divide and Conquer - countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
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