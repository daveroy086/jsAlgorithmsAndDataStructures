/*linear search psuedocode
    this function accepts an array and a value
    loop thru the array and check if the current array element is equal to the value
    If it is, return the index at which the element is found
*/

function introToLinearSearch(arr, val){

    //find the value in the array and return it's index or -1 if it does not exist

    let len = arr.length
    for(i = 0; i < len; i ++){
        if(arr[i] == val){
            return i;
        }
    }
    return -1;
}
