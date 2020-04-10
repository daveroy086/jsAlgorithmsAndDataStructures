function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1){    
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){    // moves smaller values to front of array after pivot
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }//end for i
    swap(arr, start, swapIndex);
    return swapIndex;
}//end pivot()

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){    //his base case test
        let pivotIndex = (pivot(arr, left, right));//  call pivot on the arr    
        quickSort(arr, left, pivotIndex - 1);    //left half
        quickSort(arr, pivotIndex + 1, right);    //right half
    }// end if
    return arr;
}//end quickSort()