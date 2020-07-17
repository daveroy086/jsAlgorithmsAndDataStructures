function areThereDuplicates(){
    //console.log(arguments);
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

//Tests:
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 

/* Instructions:
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/