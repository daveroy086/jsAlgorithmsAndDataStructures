function bubbleSort(arr){

    // use the bubble sort algorithm to sort an array of numbers

    let aFlag = false;
    let range = arr.length;
    while(aFlag == false){
        aFlag = true;
        for(i = 0; i < range; i ++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                aFlag = false;
                }
        }//end for i
        range--;
    }//end while
    return arr;

}//end bubbleSort()

let anArray = [];
for(k = 0; k < 20; k++){
    anArray.push(Math.floor(Math.random() * 100));
}

console.log(bubbleSort(anArray)); 