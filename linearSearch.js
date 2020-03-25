function linearSearch(arr, val){

    /* find the value in the array and return it's index
         or return -1 if value is not an element */

    let len = arr.length;
    for(let i = 0; i < len; i ++){
        if(arr[i] == val){
            return i;
        }
    }//end for i
    return -1;
}//end introToLinearSearch()

console.log(linearSearch(['ebeneezer', 'bodhi', 'bella', 'murphy', 'elwood'], 'bella'));//2
console.log(linearSearch(['ebeneezer', 'bodhi', 'bella', 'murphy', 'elwood'], 'ebeneezer'));//0
console.log(linearSearch(['ebeneezer', 'bodhi', 'bella', 'murphy', 'elwood'], 'elwood'));//4
console.log(linearSearch(['ebeneezer', 'bodhi', 'bella', 'murphy', 'elwood'], 'rick'));//-1
console.log(linearSearch([10, 15, 20, 25, 30], 15));//1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));//5
console.log(linearSearch([100], 100));//0
console.log(linearSearch([1, 2, 3, 4, 5], 6));//-1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));//-1
console.log(linearSearch([100], 200));//-1