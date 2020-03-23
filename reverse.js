
function factorial(n){
   
    //use recursion to calculate the factorial of a number.
    //if (n === 0) return 1;
    if (n <= 1){    //base case
        return 1;
    }
    
    return n * factorial(n - 1);
 
}//end factorial()
