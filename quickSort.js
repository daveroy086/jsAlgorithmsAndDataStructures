function swap(anArray, a, b){
    let temp = anArray[a];
    anArray[a] = anArray[b];
    anArray[b] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1){

    //arrPivot = [arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]];
    let pivot = arr[start];
    let target = 0;
  
    for(i = start + 1; i < arr.length; i++){
        if(arr[i] <= pivot){    // moves smaller values to front of array after pivot
            swap(arr, i,  target + 1);
            target++;
        }
    }//end for i

    swap(arr, 0, target);
    console.log(arr);
    return target;
}//end pivot()

function quickSort(aNFA){    //aNFA = anotherNameForArray
    
    //Psuedocode:
    //  call pivot on the array
    //  when pivot returns the pivot index,recursively call pivot on the subarray to the left 
    //  that index, and the subarray to the right of that index
    //  your base case occurs when you have a subarray of less then two elements
    

}

anotherArray = [];  
for(i = 0; i < 9; i++){
    anotherArray.push(Math.floor(Math.random() * 10));
}
console.log("anotherArray is ", anotherArray);
console.log(pivot(anotherArray));
