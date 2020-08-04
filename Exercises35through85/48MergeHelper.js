function merge(arr1, arr2, comparator) {

    if (typeof comparator !== 'function') {
        var comparator = (a, b) => a - b;
    }

    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
      if(comparator(arr2[j], arr1[i]) >= 1) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    } // end while

    while(i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while(j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }

    return results;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
/*
Instructions:
Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator!)

Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.
*/

//Examples
    var arr1 = [1,3,4,5];
    var arr2 = [2,4,6,8];
    console.log(merge(arr1,arr2)); // [1,2,3,4,4,5,6,8]
     
    arr1 // [1,3,4,5];
    arr2 // [2,4,6,8];
     
    var arr3 = [-2,-1,0,4,5,6];
    var arr4 = [-3,-2,-1,2,3,5,7,8];
     
    console.log(merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
     
    var arr5 = [3,4,5]
    var arr6 = [1,2]
     
    console.log(merge(arr5,arr6)); // [1,2,3,4,5]

    var names = ["Bob", "Ethel", "Christine"]
    var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
     
    function stringLengthComparator(str1, str2) {
      return str1.length - str2.length;
    }
     
    console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"] */

    /*
    function mergeArrays(arr1, arr2){    //merge two sorted arrays

    let output = [];
    let i = 0;
    let j = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;

    while((i + j) < (len1 + len2)){
        if(arr1[i] < arr2[j]){
          output.push(arr1[i]);
          i++;
          if( i == len1){
            output = output.concat(arr2.splice(j));
            return output;    
          }
        }else{
          output.push(arr2[j]);
          j++;
          if( j == len2){
            output = output.concat(arr1.slice(i));
            return output;    
          }
        }//end else
    }//end while()
}//end mergeArrays()
*/