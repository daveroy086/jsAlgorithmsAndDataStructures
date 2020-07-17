function factorial(n){
   
    //use recursion to calculate the factorial of a number.

    if (n <= 1){    //base case
        return 1;
    }
    
    return n * factorial(n - 1);
 
}//end factorial()

/* // Instructions:

Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1. */