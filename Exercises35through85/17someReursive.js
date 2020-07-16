 function someRecursive (arr, callback) {
    if (arr.length == 1) {    // base case
       return callback(arr[0]);
    }
    return callback(arr[0]) || someRecursive(arr.slice(1), callback) ? true : false;
    
} // end someRecursive()

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false}
console.log(someRecursive([4,6,8], val => val > 10)); // false

/* function someRecursive(arr, aCallback){

    //fix the name of the file

    //create some pseudocode:
    // the base case is when the array has only one element 
    //use the callback to test that element and return the treu or false result

    //test the first element of the array and call someRecursive
    // on the subarray that doesn't contain the first element
} // end 17someRecursive
 */

/*
 Without the callback
 function someRecursive (arr) {
    if (arr.length == 1) {    // base case
        return arr[0] % 2 !==0 ? true : false;
    }
    return arr[0] % 2 !== 0 || someRecursive(arr.slice(1)) ? true : false;
} // end someRecursive()
 */

/* 
Instructions:

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false. */

/* simple example of a callback:
function anotherFunction() {
    console.log("Hello", anotherVar);
}
function aFunctionWithACallback(aVar, aFunction){
    aFunction();
}
let anotherVar = "world";
anotherFunction(anotherVar, anotherFunction);
 */