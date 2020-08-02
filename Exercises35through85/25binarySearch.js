function binarySearch(sortedArray, value){

      let lP = 0;    // leftPointer
      let rP = sortedArray.length;    //rightPointer
      let mP = Math.floor((lP + rP)/2);    //middlePointer
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