function countUniqueValues(arr){

    /** Use multiple pointers to count unique values in an array.
     * The array is integers sorted in increasing order.
     */

   let i = 0;
   let j = 1;
   let len = arr.length;

   if(len == 0){
       return 0;
   }

   while(j < len){
        if(arr[i] == arr[j]){    // j is incremented until it encounter a new, larger element 
            j += 1;
        }else{    // When j reaches a new element i is incremented and the value at that index is replaced with the new element
            i += 1;
            arr[i] = arr[j];
        }
        // when the loop is done i will be at the end of a list of the unique elements in the array
   }//end while
    console.log(i + 1);
   return i + 1;

}//end countUniqueValues()

countUniqueValues([1, 1, 1, 1, 1, 2]);//2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);//7
countUniqueValues([]);//0
countUniqueValues([-2, -1, -1, 0, 1]);//4
