function recursiveRange(n){

    //use recursion to add the integers from 1 to number
    if (n <= 0) return 'out of range';

    if (n == 1) return 1;
    return n + recursiveRange(n - 1);
    
}
console.log(recursiveRange(-1));//out or range
console.log(recursiveRange(0));//out of range
console.log(recursiveRange(5));//15
console.log(recursiveRange(10));//55
console.log(recursiveRange(15));//120