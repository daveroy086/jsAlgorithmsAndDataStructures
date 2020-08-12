/******after i get this working replace my quicksort with  one that uses my pivot below...
 * ...also should I try to reuse that version i had of quickSort that used one line with concat
*/
//get his quickSort...
function quickSort(arr, comparator, left = 0, right = arr.length - 1){

    if(typeof comparator !== "function"){    // ifa < b return a negative number
        comparator = function(a, b){ return a-b;};
    }
 
    if(left < right) {
        let index = pivot(arr, comparator, left, right);    // pass the comparator EVERYWHERE
        quickSort(arr, comparator, left, index - 1);
        //sort the right half
        quickSort(arr, comparator, index + 1, right);
    } // end if
     return arr;
}//end quickSort()

//with his pivotHelper...
function pivot(arr, comparator, start = 0, end = arr.length + 1) {

    if(typeof comparator !== "function"){    // if a < b return a negative number
        comparator = function(a, b){ return a-b;};
    }

    function swap(arr1, a, b) {
        let temp = arr1[a];
        arr1[a] = arr1[b];
        arr1[b] = temp;
    }

    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++) {
        if(comparator(pivot, arr[i]) > 0) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    } // end for i
    swap(arr, start, swapIndex);
  //  console.log(arr);
    return swapIndex;
} // end pivot
/* 
// Tests for pivot:
    console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strLength(a, b) {
      return a.length - b.length;
    }
     
    console.log(pivot(arr1)); // 3
    console.log(pivot(arr2)); // 4
    console.log(pivot(arr3, strLength)); // 1
 */

//Tests for quickSort:
    
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

    console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); 
    console.log(quickSort(arr1)); // 3
    console.log(quickSort(arr2)); // 4

    function strLength(a, b) {
      return a.length - b.length;
    }
   
    console.log(quickSort(arr3, strLength)); // 1


//console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
//make sure it works...***they do***...both pivot and quickSort
//add the comparator to the pivotHelper/******works******/
//make sure it works
//add it back to quickSort
//make sure it works*****it does


/*
his code with comments:

function pivot(arr, start = 0, end = arr.length + 1) {
    console.log("original arr is ", arr);
    function swap(arr1, a, b) {    // swaps the two elements of arr1 at positions a and b
        let temp = arr1[a];
        arr1[a] = arr1[b];
        arr1[b] = temp;
    }

    let pivot = arr[start];    // pivot has the value of the first element of the array
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++) {    // loop thru the array starting with the second element
        if(pivot > arr[i]) {    // for each element less than the pivot
            swapIndex++;    // increment the index of the element's new home so it moves to the end of the moved items
            swap(arr, swapIndex, i);    // actually move them
        }
        console.log(arr);
    } // end for i
    swap(arr, start, swapIndex);    //moves pivot to it's correct position at swapIndex
    console.log(arr);
    return swapIndex;
} // end pivot */

/*
slightly edited:
I like the logic more... moves smaller elements to before the pivot insead of to somewhere in the middle of the array
FWIW it's two lines shorter

function pivot(arr, start = 0, end = arr.length + 1) {
    console.log("original arr is ", arr);

    function move(arr, b) {    // renamed 'swap' to 'move'
        arr.unshift(arr[b]);    //place a copy of arr[b] at the beginning of the array
        arr.splice(b + 1, 1);    // remove the original from it's original location
    }

    let pivot = arr[start];    // pivot has the value of the first element of the array
    let pivotIndex = start;

    for(let i = start + 1; i < arr.length; i++) {    // loop thru the array starting with the second element
        if(pivot > arr[i]) {    // for each element less than the pivot
            pivotIndex++;    // increment the index of the element's new home so it moves to the end of the moved items
            move(arr, 1, i);    // actually move them ...edited veersion saves a few keystrokes
        }
        console.log(arr);
    } // end for i
    //swap(arr, start, swapIndex);    //moves pivot to it's correct position at swapIndex...
        // ...edited version does not need this line 
    console.log(arr);
    return pivotIndex;
} // end pivot*/