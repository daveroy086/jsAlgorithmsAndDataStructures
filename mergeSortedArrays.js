function mergeArrays(array1, array2){    //merge two sorted arrays

/*
psuedocode:
  create an empty array, take a loop at the smallest values in each input array.
  while there are still values we haven't looked at:
    if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    once we exhaust one array, push all the remaining values from the other array
 */ 
    let output = [];
    let inArray = 'first';
    let i = 0;//first array index
    let j = 0;//second array index
    let len1 = array1.length;
    let len2 = array2.length;

    while((i + j) < (len1 + len2)){    //look at all the values in both arrays
        //compare first value of each array
        if(array1[i] < array2[j]){
          output.push(array1[i]);
          console.log(output);
          i++;
          if( i == len1){
            output = output.concat(array2.splice(j));
            i = i + array2.slice(j).length;
            return output;    
          }
        }else{    //if the value in the first is smaller take that value and put it in output
          output.push(array2[j]);
          console.log(output);
          j++;
          if( j == len2){
            output = output.concat(array1.slice(i));
            j = j + array1.slice(i).length;
            return output;    
          }
        }//end else
    }//end while()
    //return output;
    //set inArray to first   
    //else take the value from the second array and set inArray to second
    //if inArray is first go to the next value in first and compare it to the same value insecond
}//end mergeArrays()

//to test:
function insertionSort(arr){

    var arrLength = arr.length;
    for(i = 1; i < arrLength; i ++){
        if(i == 1){
            if(arr[i - 1] > arr[i]){
                arr.splice(i - 1, 0, arr[i]);
                arr.splice(i + 1, 1);
            }
        }else{
            for(j = i; j >= 0; j--){    //loop from current location back to beginning of sorted section
                if(((arr[j - 2] <= arr[i]) || (arr[j - 2] == undefined)) 
                           && (arr[i] < arr[j - 1])){
                    arr.splice(j - 1, 0, arr[i]);
                    arr.splice(i + 1, 1);}
            }//end for j
        }//end else
    }//end for 
    //console.log("anotherArrayN sorted is ", arr);
    return arr;
}//end insertionSort()

function makeSortedArray(){

    let anArray = [];
    for(k = 0; k < 5; k++){
        anArray.push(Math.floor(Math.random() * 10));
    }
  //  console.log("anArray is ", anArray)

return insertionSort(anArray);
}// end makeSortedArray()

//anotherArray1 = [ 2, 3, 6, 7, 8];
anotherArray1 = makeSortedArray();
console.log("anotherArray1 is ", anotherArray1);

//anotherArray2 = [ 0, 1, 4, 5, 9, 10, 11, 12];
anotherArray2 = makeSortedArray();
console.log("anotherArray2 is ", anotherArray2);

console.log(mergeArrays(anotherArray1, anotherArray2));