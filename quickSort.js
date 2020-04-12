function swap(anArray, a, b){
    let temp = anArray[a];
    anArray[a] = anArray[b];
    anArray[b] = temp;
}

function pivot(arr, left, right){
    let pivot = arr[start];
    let target = 0;
    for(i = start + 1; i < arr.length; i++){
        if(arr[i] <= pivot){    // moves smaller values to front of array after pivot
            swap(arr, i,  target + 1);
            target++;
        }
    }//end for i

    swap(arr, 0, target);
    console.log("returned from pivot ", arr);
    return target;
}//end pivot()

function quickSort(anotherArray, left = 0, right = anotherArray.length - 1){
    console.log([].concat([1]));
    console.log("parameter is ", anotherArray);
    
    if(anotherArray.length < 2){
        return anotherArray;
    }
    if (anotherArray.length == 0){
        return;
    }
    
    //Psuedocode:
    //  call pivot on the array
    let index = (pivot(anotherArray, left, right));
   
    if (index === 0){
        index = 1;
    }
    let indexArray = [index];
    console.log("index is ", index);
    let lesser = anotherArray.slice(0, index);
    console.log("lesser is ", lesser);
    let greater = anotherArray.slice(index + 1);
    console.log("greater is ", greater);
    let myAns = quickSort(anotherArray.slice(0, index))
                   .concat(indexArray
                       .concat(quickSort(anotherArray.slice(index + 1))));
    console.log("returned is ", myAns);
    return myAns;
    //  that index, and the subarray to the right of that index
    //  your base case occurs when you have a subarray of less then two elements
    
}//end quickSort()

testArray = [5, 1, 2, 5, 3, 8, 1];  
/* for(i = 0; i < 6; i++){
    testArray.push(Math.floor(Math.random() * 10));
} */
//console.log("testArray is ", testArray);
console.log(quickSort(testArray));
//getMedian = [arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]];