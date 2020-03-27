function bubbleSort(anotherArray){

    console.log(anotherArray);
    console.log("");
    
    /*
        psueodcode:
          start looping from with a variable called i theend of the array towards the beginning
          start the inner loop with a variable called j from the beginning to i - 1
          if arr[j] is greater the arr[j + 1], swap those two values!
          return the sorted array
    */

    let aFlag = false;
    let range = anotherArray.length;
    while(aFlag == false){
        aFlag = true;
        for(i = 0; i < range; i ++){
            if(anotherArray[i] > anotherArray[i + 1]){
                 let temp = anotherArray[i];
                anotherArray[i] = anotherArray[i + 1];
                anotherArray[i + 1] = temp;
                //console.log("i is ", i, " and anotherArray is ", anotherArray);
                aFlag = false;
                }

        }//end for i
        range--;
    }//end while
    console.log("");

    return anotherArray;

}//end bubbleSort()

let anArray = [];

for(k = 0; k < 20; k++){
    anArray.push(Math.floor(Math.random() * 100));
}

console.log(bubbleSort(anArray)); 
