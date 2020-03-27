function selectionSort(anArray){

    /*
    Psuedocode:
      Store the first element as the smallest value you've seen so far
      Compare this item to the next items in the array until you find a smaller item
      If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
      If the "minimum" is not the value (index) you initially began with, swao the two values
      Repeat this with the next element until the array is sorted*/

    return anArray;
}


let arr = [];
for(k = 0; k < 10; k++){
    arr.push(Math.floor(Math.random() * 100));
}
console.log("The original array is ", arr);

console.log("The sorted array is ", selectionSort(arr)); 
