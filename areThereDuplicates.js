function areThereDuplicates(){

    const myObject = {};
    for(let i = 0; i < arguments.length; i++){
        if(myObject.hasOwnProperty(arguments[i])){
            return true;
        }else{
            myObject[arguments[i]] = 1;
        }
    }//end for i
    return false;
}//end areThereDuplicates()

//Test Cases:
console.log(areThereDuplicates(1, 2, 3));//false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true