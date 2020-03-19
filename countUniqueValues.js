function countUniqueValues(arr){

    
    /*Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the
    unique values in the array.  There can be
    negative values in the array but it will always be sorted.
    */

   //initialize two pointers
   let i = 0;
   let j = 1;
   let len = arr.length;

   //use a while loop that goes until the second pointer gets to the end of the array
   while(j < len){
        //if the values of the array at the two pointers are the same increment the second pointer up
        if(arr[i] == arr[j]){
            j += 1;
        // else, if the values are not the same move the first pointer up one and change the arr value at that position to that of the second pointer
        }else{
            i += 1;
            arr[i] = arr[j];
        }
   }//end while

        //when the while loop has ended get the location of the first pointer and add one to it.  This is the number of values we wanted
    return i;

}//end countUniqueValues()

countUniqueValues([1, 1, 1, 1, 1, 2]);//2
//countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);//7
//countUniqueValues([]);//0
//countUniqueValues([-2, -1, -1, 0, 1]);//4
