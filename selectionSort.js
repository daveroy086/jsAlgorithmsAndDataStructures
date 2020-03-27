function selectionSort(anArray){

    //implement silsection sort
    
    let min = Infinity;
    let start = 0;
    let placeHolder = -Infinity;
    for (j = 0; j < anArray.length; j++){    //loop thru the entire array
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