function selectionSort(anArray){

    /*
    Psuedocode:
      Store the first element as the smallest value you've seen so far
      Compare this item to the next items in the array until you find a smaller item
      If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
      If the "minimum" is not the value (index) you initially began with, swap the two values
      Repeat this with the next element until the array is sorted*/
    
    let min = Infinity;
    let start = 0;
    let placeHolder = -Infinity;
    for (j = 0; j < anArray.length; j++){    //loop thru the entire array
    //console.log("i is ", i, " and j is ", j);
        min = Infinity;
        for (i = start; i < anArray.length; i ++){    //loop from the first number not replaced by a minimumm yet
            if(anArray[i] < min){
                min = anArray[i];
                placeHolder = i;
            }
         }//end for i
        let temp = anArray[start];
        anArray[start] = min;
        anArray[placeHolder] = temp;
        start++;
    }//end for j
        

    return anArray;
}


let arr = [];
for(k = 0; k < 6; k++){
    arr.push(Math.floor(Math.random() * 10));
}
console.log("The original array is ", arr);

console.log("The sorted array is ", selectionSort(arr)); 
