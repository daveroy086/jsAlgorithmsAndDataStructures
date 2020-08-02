function bubbleSort(arr){    // inproved over git hub version

    // use the bubble sort algorithm to sort an array of numbers
    function swap() {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    let goAgain = true;
    let range = arr.length - 1;
    while(goAgain == true) {
        goAgain = false;
        for(i = 0; i < range; i ++) {
            if(arr[i] > arr[i + 1]) {
                swap();
                goAgain = true;
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