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
/*
His original pseudocode:
Start looping from with a varable called i the end of the array toward the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j + 1] , swap those two values!
    return the sorted array


function bubbleSort(arr){
    console.log (arr);
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - 1; j++){
            console.log(arr , arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("one complete pass");
    }
    return arr;
}

His original code:
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
//his original code without optimizations:
*/