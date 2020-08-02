function linearSearch(arr, val){

    /* find the value in the array and return it's index
         or return -1 if value is not an element */

    let len = arr.length;
    for(let i = 0; i < len; i ++){
        if(arr[i] == val){
            return i;
        }
    }//end for i
    return -1;
}//end introToLinearSearch()