function power(base, exp){

    //use recursion to calculate the power of a number
    
    if(exp == 0){         //base case
        return 1;
    }

    return base * power(base, exp - 1);

}//end power()

//test cases:
console.log(power(2, 0));//1
console.log(power(2, 2));//4
console.log(power(2, 4));//16