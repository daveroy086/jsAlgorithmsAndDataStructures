function mergeSort(anArray){
  //check this out:
      //https://www.freecodecamp.org/news/the-complete-guide-to-loops-in-javascript-f5e242921d8c/
      //see the section on breaking to a label
    
    /* Pseudocode:
        Break up the array into halves until all subarays are empty or have only one element 
             (now each subarray is sorted)
        from audio:
          use .slice() to bisect the array and
          use recursion to get it down to one element arrays
          base case is when each subarray length is <= 1
        Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
        Once the array has been merged back together, return the merged (and sorted!) array
    */

    let arraylength = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));

    return mergeArrays(mergeSort(firstHalf), mergeSort(secondHalf));
    
}//end mergeSort()

function mergeArrays(array1, array2){    //merge two sorted arrays
    let output = [];
    let i = 0;   // the number of elements of array1 you've copied to output
    let j = 0;
    let len1 = array1.length;
    let len2 = array2.length;
    while((i + j) < (len1 + len2)){
        if(array1[i] < array2[j]){
            output.push(array1[i]);
            i++; 
            if( i == len1){    // if you reach the end of a1 concat the rest of a2
              output = output.concat(array2.splice(j));
              i = i + array2.slice(j).length;
              return output;}
        }else{
            output.push(array2[j]);
            j++;
            if( j == len2){
              output = output.concat(array1.slice(i));
              j = j + array1.slice(i).length;
              return output;
            }
        }
    }    // end while
}    // end mergeArrays

//console.log(mergeArrays([ 2, 3, 6, 7, 8], [ 0, 1, 4, 5, 9, 10, 11, 12])); 
//check out my improved mergeArrays below
// also his version

console.log(mergeSort( [8, 4, 7, 1, 6, 3, 5, 2, 9]));

/*Note to self:

    starting with:
    let arraylength  = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));


    this works:
    output = mergeArrays(mergeSort(firstHalf), mergeSort(secondHalf));
    // use console.log to see what mergeSort(firstHalf) and  mergeSort(secondHalf)
    // look like when they are sent to mergeArrays
    return output;
    //the output is correct...[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    this doesn't:
    firstSorted = mergeSort(firstHalf);
    secondSorted = mergeSort(secondHalf);
    output = mergeArrays(firstSorted, secondSorted);
    // use console.log to see what firstSorted and secondSorted
    // look like when they are sent to mergeArrays
    return output;
    
*/

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

/*
function merge(arr1, arr2) {

    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
      if(arr2[j] > arr1[i]) {
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
*/