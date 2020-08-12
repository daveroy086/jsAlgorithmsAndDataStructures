function pivot(arr, start = 0, end = arr.length + 1) {

    function move(arr, b) {
        arr.unshift(arr[b]);
        arr.splice(b + 1, 1);
    }

    let pivot = arr[start];
    let pivotIndex = start;

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            move(arr, i);
        }
    } // end for i
    return pivotIndex;
} // end pivot

function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right) {
        let index = (pivot(arr, left, right));
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    } // end if
     return arr;
}//end quickSort()

/*make this work:
function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right) {
        let index = (pivot(arr, left, right));
        var myAns = quickSort(arr.slice(0, index))
                        .concat(arr[index])
                            .concat(quickSort(arr.slice(index + 1)));
    } // end if
     return myAns;
}//end quickSort()
*/

testArray = [5, 1, 2, 6, 3, 8, 1]; 
console.log(quickSort(testArray));

/*
with comments:
function pivot(arr, start = 0, end = arr.length + 1) {
//    console.log("original arr is ", arr);

    function move(arr, b) {
        arr.unshift(arr[b]);    //place a copy of arr[b] at the beginning of the array
        arr.splice(b + 1, 1);    // remove the original from it's original location
    }

    let pivot = arr[start];    // pivot has the value of the first element of the array
    let pivotIndex = start;

    for(let i = start + 1; i < arr.length; i++) {    // loop thru the array starting with the second element
        if(pivot > arr[i]) {    // for each element less than the pivot
            pivotIndex++;    // increment the index of the element's new home so it moves to the end of the moved items
            move(arr, i);    // actually move them
        }
  //      console.log(arr);
    } // end for i
    //console.log(arr);
    return pivotIndex;
} // end pivot
function swap(arr, a, b){

testArray = [5, 1, 2, 6, 3, 8, 1]; 
//console.log(pivot(testArray));

function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right) {
        let index = (pivot(arr, left, right));
        //since pivot has been called the pivot index has been determined and the array has been sorted to a less than pivot set of elements to the left and a greater then pivot set of values to the right
        //sort the left half
        quickSort(arr, left, index - 1);
        //sort the right half
        quickSort(arr, index + 1, right);
    } // end if
     return arr;
}//end quickSort()

console.log(quickSort(testArray));
*/