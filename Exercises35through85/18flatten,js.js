function flatten(){

    // create an output array
    // loop thru the array
    // if an element is an integer push it into the output array
    // if the element is an array call flatten on it
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]) );// [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
/* 
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. */