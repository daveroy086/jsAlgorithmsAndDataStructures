function bubbleSort(anotherArray){

    // use the bubble sort algorithm to sort an array of numbers

    let aFlag = false;
    let range = anotherArray.length;
    while(aFlag == false){
        aFlag = true;
        for(i = 0; i < range; i ++){
            if(anotherArray[i] > anotherArray[i + 1]){
                let temp = anotherArray[i];
                anotherArray[i] = anotherArray[i + 1];
                anotherArray[i + 1] = temp;
                aFlag = false;
                }
        }//end for i
        range--;
    }//end while

    return anotherArray;

}//end bubbleSort()

let anArray = [];
for(k = 0; k < 20; k++){
    anArray.push(Math.floor(Math.random() * 100));
}

console.log(bubbleSort(anArray)); 