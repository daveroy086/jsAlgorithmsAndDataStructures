function mergeSort(anArray, comparator){

    let arraylength  = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));

    return merge(mergeSort(firstHalf, comparator), mergeSort(secondHalf, comparator), comparator);
    
}//end mergeSort()

function merge(arr1, arr2, comparator){    //merge two sorted arrays

    if(typeof comparator !== "function"){    // ifa < b return a negative number
        comparator = function(a, b){ return a-b;};
    }

    let output = [];
    let i = 0;
    let j = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;

    while((i + j) < (len1 + len2)){
        if(comparator(arr2[j], arr1[i]) >= 1){
          output.push(arr1[i]);
          i++;
          if( i == len1){
            output = output.concat(arr2.splice(j));
            //console.log(output);
            return output;    
          }
        }else{
          output.push(arr2[j]);
          j++;
          if( j == len2){
            output = output.concat(arr1.slice(i));
            //console.log(output);
            return output;    
          }
        }//end else
    }//end while()
}//end merge()

//Tests:
console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));
     
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
  
function strComp(a, b) {  // is working correctly
  if (a < b) {  // if they're alphabetical return -1
      return -1;
  }else if (a > b) { 
    return 1;
    }
  return 0;
}
  
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"] */
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
  
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
  
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order


/*Instructions:
Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.
omparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Here's some guidance for how merge sort should work:

    Break up the array into halves until you can compare one value with another
    Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
    Once the array has been merged back together, return the merged (and sorted!) array 

In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function in the previous exercise, so copy and paste that code here.
*/