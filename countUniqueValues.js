function countUniqueValues(arr){

   let i = 0;
   let j = 1;
   let len = arr.length;

   if(len == 0){
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

countUniqueValues([1, 1, 1, 1, 1, 2]);//2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);//7
countUniqueValues([]);//0
countUniqueValues([-2, -1, -1, 0, 1]);//4
