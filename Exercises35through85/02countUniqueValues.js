function countUniqueValues(arr){
    
   let i = 0;
   let j = 1;
   let len = arr.length;

   if(len === 0){
       return 0;
   }

   while(j < len){
        if(arr[i] == arr[j]){
            j += 1;
        }else{
            i += 1;
            arr[i] = arr[j];
        }
   }//end while

   return i + 1;
}//end countUniqueValues()

//Tests:
//console.log(countUniqueValues([1,1,1,1,1,2]) // 2
//console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
//console.log(countUniqueValues([]) // 0
//console.log(countUniqueValues([-2,-1,-1,0,1]) // 4

/*
Instructions:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/