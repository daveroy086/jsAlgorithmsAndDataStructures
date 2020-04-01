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
    }//end for i
    return arr;
}//end insertionSort()

for(m = 0; m < 10; m ++){
    let anArray = [];
    for(k = 0; k < 6; k++){
        anArray.push(Math.floor(Math.random() * 10));
    }

console.log("The original array is ", anArray);
console.log("The sorted array is ", insertionSort(anArray));
console.log(""); 
}//end for m
/* 
start by picking the second element in the array
now compare the second element to the one before it and swap if necessary
continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
 */