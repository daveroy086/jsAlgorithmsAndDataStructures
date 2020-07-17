function flatten(arr){

    let len = arr.length;
    let outputArray = [];
    // loop thru the array
    for (let i = 0; i < len; i++) {
        if(typeof arr[i] == "object") {    // if the element is an array call flatten on it
            outputArray = outputArray.concat(flatten(arr[i]));
        } else {    // if an element is an integer push it into the output array
            outputArray.push(arr[i]);
        }
    }
    return outputArray;
} // end flatten()

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]) );// [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

/* 
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/