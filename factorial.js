function factorial(n){

    //use recursion to calculate the factorial of a number.

    if (n <= 1){    //base case
        return 1;
    }

    return n * factorial(n - 1);
 
}//end factorial()

for(i = 1; i < 10; i++){
    console.log("");
    console.log("a new run");
    console.log('n is ', i, ' and n! is ', factorial(i));
}