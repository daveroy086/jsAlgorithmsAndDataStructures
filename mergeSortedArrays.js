function mergeArrays(arr1, arr2){    //merge two sorted arrays

    let output = [];
    let i = 0;//first array index
    let j = 0;//second array index
    let len1 = arr1.length;
    let len2 = arr2.length;

    while((i + j) < (len1 + len2)){
        if(arr1[i] < arr2[j]){
          output.push(arr1[i]);
          i++;
          if( i == len1){
            output = output.concat(arr2.splice(j));
            return output;    
          }
        }else{
          output.push(arr2[j]);
          j++;
          if( j == len2){
            output = output.concat(arr1.slice(i));
            return output;    
          }
        }//end else
    }//end while()
}//end mergeArrays()


console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
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

//anotherarr1 = [ 2, 3, 6, 7, 8];
anotherarr1 = makeSortedArray();
console.log("anotherarr1 is ", anotherarr1);

//anotherarr2 = [ 0, 1, 4, 5, 9, 10, 11, 12];
anotherarr2 = makeSortedArray();
console.log("anotherarr2 is ", anotherarr2);

console.log(mergeArrays(anotherarr1, anotherarr2));
*/

/*
code from class:
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arrs.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}
*/