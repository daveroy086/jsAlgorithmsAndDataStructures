//*
function sortedFrequency(arr, x){

    let start = 0;
    let end = arr.length - 1;
    let center = Math.floor(arr.length / 2);
    if(x < arr[start] || arr[end + 1] < x) { return -1; // x is not in arr
    } else {
         //use divide and conquer to find an instance of x
        let goAgain = true;
        while(arr[center] != x || goAgain == true) {
            let originalStart = start;
            let originalCenter = center;
            let originalEnd = end;
            if(arr[center] < x) {    // x's are to the right
                start = center;
            } else {    //first x is to the left
                end = center;
            } // end inner if-else
            center = Math.floor((start + end) / 2);
            if(start == originalStart && center == originalCenter &&end == originalEnd) break;
        } // end while
        
        if(arr[start] != x && arr[end] != x) {
            return -1;}
        if(arr[start] == x) center = start;
        if(arr[end] == x) center = end;
        let numberOfXs = 0;//count to the left
        let j = center - 1;
        while (arr[j] == x) {
            j--; numberOfXs++;} //count to the right
        let k = center;
        while(arr[k] == x) {
            k++; numberOfXs++;}
        return numberOfXs;
    } // end else
} //  sortedFrequency() 

//Tests:
//it would be at the low end if it was in the array
console.log(sortedFrequency([2, 2, 3, 3, 3, 4, 4, 4, 4], 1)); // -1
//it's a single int at the beginning of the array 
console.log(sortedFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1)); // 1
//it's multiple ints at the beginning of the array
console.log(sortedFrequency([2, 2, 3, 3, 3, 4, 4, 4, 4], 2)); // 2 
//it's in the center of the array
console.log(sortedFrequency([2, 2, 3, 3, 3, 4, 4, 4, 4], 3)); // 3
//it would be in the center if it was in the array
console.log(sortedFrequency([2, 2, 4, 4, 4, 4], 3)); // -1
//it's multiple ints at the end of the array
console.log(sortedFrequency([2, 2, 4, 4, 4, 4], 4)); // 4
//it's a single int at the end of the array
console.log(sortedFrequency([2, 2, 3, 3, 3, 4, 4, 4, 4, 5], 1)); // -1
//it would be in the high end if it was in the array
console.log(sortedFrequency([2, 2, 3, 3, 3, 4, 4, 4, 4], 5)); // -1
//*/

/*  someone elses sweet code(I've edited a little):
function sortedFrequency(arr,num){

    let startIdx = 0,
        endIdx = arr.length - 1,
        middle = 0,
        firstOccur = -1,
        lastOccur = -1;

    // find first occurance
    while(startIdx <= endIdx){
        middle = Math.floor((startIdx + endIdx) / 2);
        if(arr[middle] === num && arr[middle - 1] !== num){ // when you land on the right one
            firstOccur = middle;
            break;
        }
        if(arr[middle] < num) startIdx = middle + 1; // rest the range to look at
        else endIdx = middle - 1;                    // it's what I did except for the ones and it's prettier
    }
    if(firstOccur === -1) return -1; // never found an occurance

    //reset to find last occurance
    startIdx = 0;
    endIdx = arr.length - 1;
    // find last occurance
    while(startIdx <= endIdx){
        middle = Math.floor((startIdx + endIdx) / 2);
        if(arr[middle] === num && arr[middle + 1] !== num){
            lastOccur = middle;
            break;
        }
        if(arr[middle] <= num) startIdx = middle + 1;
        else endIdx = middle - 1;
    }
    return lastOccur - firstOccur + 1;
} // end sortedFrequency
/*/