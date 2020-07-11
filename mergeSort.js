function mergeSort(anArray){
  //check this out:
      //https://www.freecodecamp.org/news/the-complete-guide-to-loops-in-javascript-f5e242921d8c/
      //see the section on breaking to a label
    
    /* Pseudocode:
        Break up the array into halves until you have that are empty or have one element
        from audio:
          use .slice() to bisect the array and
          use recursion to get it down to one element arrays
          base case is when each subarray length is <= 1
        Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
        Once the array has been merged back together, return the merged (and sorted!) array
    */
    let arraylength  = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));

    return mergeArrays(mergeSort(firstHalf), mergeSort(secondHalf));
    
}//end mergeSort()

function mergeArrays(array1, array2){    //merge two sorted arrays
    let output = [];
    let i = 0;
    let j = 0;
    let len1 = array1.length;
    let len2 = array2.length;
    while((i + j) < (len1 + len2)){
        if(array1[i] < array2[j]){
          output.push(array1[i]);
          i++;    // moves the pointer instead of removing the element?...why? 
          if( i == len1){    // if you reach the end of a1 concat the rest of a2?
            output = output.concat(array2.splice(j));    //check the vid
            i = i + array2.slice(j).length;
            return output;}
        }else{
          output.push(array2[j]);
          j++;
          if( j == len2){
            output = output.concat(array1.slice(i));
            j = j + array1.slice(i).length;
            return output;
}}}}//console.log(mergeArrays([ 2, 3, 6, 7, 8], [ 0, 1, 4, 5, 9, 10, 11, 12])); 

console.log(mergeSort( [8, 4, 7, 1, 6, 3, 5, 2, 9]));

/*Note to self:

    this works:
    let arraylength  = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));

    output = mergeArrays(mergeSort(firstHalf), mergeSort(secondHalf));
    return output;
    //the output is correct...[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    this doesn't:
    let arraylength  = anArray.length;

    if(arraylength <= 1){    //base case
      return anArray;
    }

    let firstHalf = anArray.slice(0, Math.floor(arraylength / 2));
    let secondHalf = anArray.slice(Math.floor(arraylength / 2));

    firstSorted = mergeSort(firstHalf);
    secondSorted = mergeSort(secondHalf);
    output = mergeArrays(firstSorted, secondSorted);
    return output;
    
*/