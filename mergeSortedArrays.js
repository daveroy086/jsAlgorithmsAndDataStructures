function mergeArrays(array1, array2){    //merge two sorted arrays


    let output = [];
    let i = 0;//first array index
    let j = 0;//second array index
    let len1 = array1.length;
    let len2 = array2.length;

    while((i + j) < (len1 + len2)){
        if(array1[i] < array2[j]){
          output.push(array1[i]);
          i++;
          if( i == len1){
            output = output.concat(array2.splice(j));
            i = i + array2.slice(j).length;
            return output;    
          }
        }else{
          output.push(array2[j]);
          j++;
          if( j == len2){
            output = output.concat(array1.slice(i));
            j = j + array1.slice(i).length;
            return output;    
          }
        }//end else
    }//end while()
}//end mergeArrays()

/*//to test:
function insertionSort(arr){

    var arrLength = arr.length;
    for(i = 1; i < arrLength; i ++){
        if(i == 1){
            if(arr[i - 1] > arr[i]){
                arr.splice(i - 1, 0, arr[i]);
                arr.splice(i + 1, 1);
            }
        }else{
            for(j = i; j >= 0; j--){    //loop from current location back to beginning of sorted section
                if(((arr[j - 2] <= arr[i]) || (arr[j - 2] == undefined)) 
                           && (arr[i] < arr[j - 1])){
                    arr.splice(j - 1, 0, arr[i]);
                    arr.splice(i + 1, 1);}
            }//end for j
        }//end else
    }//end for 
    return arr;
}//end insertionSort()

function makeSortedArray(){
    let anArray = [];
    for(k = 0; k < 5; k++){
        anArray.push(Math.floor(Math.random() * 10));
    }
return insertionSort(anArray);
}// end makeSortedArray()

//anotherArray1 = [ 2, 3, 6, 7, 8];
anotherArray1 = makeSortedArray();
console.log("anotherArray1 is ", anotherArray1);

//anotherArray2 = [ 0, 1, 4, 5, 9, 10, 11, 12];
anotherArray2 = makeSortedArray();
console.log("anotherArray2 is ", anotherArray2);

console.log(mergeArrays(anotherArray1, anotherArray2));*/