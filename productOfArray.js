function productOfArray(anArray){

    //use recursion to get the product of the values of an array

    if(anArray.length === 1){    //base case
        return anArray[0];
    }

    return anArray.slice(0, 1) * productOfArray(anArray.slice(1));
}//end productOfArray()

console.log(productOfArray([2, 3, 4, 5]));//120
console.log(productOfArray([2, 3]));//5
console.log(productOfArray([2, 3, 10]));//60