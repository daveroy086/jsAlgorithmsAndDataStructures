function power(base, exp){

    //use recursion to calculate a number raised to an exponent
    
    if(exp == 0){         //base case
        return 1;
    }

    return base * power(base, exp - 1);

}//end power()

// Tests:
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

/* Instructions:
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents. */