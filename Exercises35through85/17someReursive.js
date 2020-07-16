function someRecursive(arr, aCallback){

    //fix the name of the file

    //create some pseudocode:
    // the base case is when the array has only one element 
    //use the callback to test that element and return the treu or false result

    //test the first element of the array and call someRecursive
    // on the subarray that doesn't contain the first element
} // end 17someRecursive

// Tests:
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
/* 
Instructions:

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false. */