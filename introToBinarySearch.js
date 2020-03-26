function introToBinarySearch(sortedArray, value){


    /* Pseudocode from class:
      This function accepts a sorted array and a value
      Create a left pointer at the start of the array, and
        a right pointer at the end of the array
      While the left pointer comes before the right pointer:
        Create a pointer in the middle
        If you find the value you want, return it's index
        If the value is to small, move the left pointer up
        If the value is too large, move the right pointer down
      If you never find the value, return -1 */

      let lP = 0;
      let rP = sortedArray.length;
      let mP = Math.floor((lP + rP)/2);
      let currentDiff = Infinity;
      let newDiff = -Infinity;

      while(lP < rP){
        
        if(currentDiff == newDiff){//are my variables not varying
          return -1;
        }

        currentDiff = rP - lP;
        mP = Math.floor((lP + rP)/2);
        if(sortedArray[mP] == value){
          return mP;
        }

        if(value < sortedArray[mP]){
          rP = mP;
        }

        if(value > sortedArray[mP]){
          lP = mP;
        }

        newDiff = rP - lP;

      }// end while
}//end introToBinarySearch()

console.log(introToBinarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(introToBinarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(introToBinarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(introToBinarySearch([1, 2, 3, 4, 5], 6)); //-1
console.log(introToBinarySearch([5, 6, 10, 13, 14,  79, 84, 86, 95, 96, 98, 99], 10)); //2
console.log(introToBinarySearch([5, 6, 10, 13, 14, 18, 84, 86, 95, 96, 98, 99], 95)); //8
console.log(introToBinarySearch([5, 6, 10, 13, 14,  18, 34, 35, 98, 99],  100)); //-1

/* possible changes:
  if i change rP = mP to rP = mp - 1; and
              lP = mP to lP = mP + 1; and
              the while conditions,
              I could get rid of the currentDiff/newDiff  */