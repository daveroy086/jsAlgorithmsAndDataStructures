function power(base, exp){
    
    if(exp == 0){         //base case
        return 1;
    }
    return base * power(base, exp - 1);
}//end power()

//test cases:
power(2, 0);//1
power(2, 2);//4
power(2, 4);//16
