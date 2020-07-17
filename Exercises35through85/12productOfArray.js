function productOfArray(anArray){

    //use recursion to get the product of the values of an array

    if(anArray.length === 1){    //base case
        return anArray[0];
    }

    return anArray.slice(0, 1) * productOfArray(anArray.slice(1));
}//end productOfArray()

// Tests:
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/*
Instructions:
Write a function called productOfArray which takes in an array of numbers and returns the product of them all. */