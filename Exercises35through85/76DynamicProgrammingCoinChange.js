//Instructions
/*
Write a function called coinChange which accepts two parameters: an array of denominations (named denom) and a value. The function should return the number of ways you can obtain the value from the given collection of denom. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
*/

//Starter code:
function coinChange(denom, value){

    //pseudocode:
    // rearranged denom cause that's how I see it
    denom.sort((a, b) => b < a);
    let combos = 0;
        //forEach element of denom
        denom.forEach(function(eachElement){
            let last = denom.length - 1;
            console.log("denom[last] is ", denom[last], " and value is ", value);
            let howManyTimes = Math.floor(value / denom[last]);
            for(let i = howManyTimes; i > 0; i--){
                console.log("howManyTimes is ", howManyTimes);
                combos += coinChange(denom.slice(1), value - (denom[last]*howManyTimes));
            };});
        //find the max multiple of the element in value
        // loop from max value to 0
            //newValue = value - (max * element)
            // call coinChange(denom, newValue)
        //subtract the element (and it's multiples) from the value and call coinChange on the remainder
        return combos;
    
    

}

//Tests:
let denom = [5, 1];
console.log(coinChange(denom, 16));//4 (eg.16 pennies, 0ne nickel and 11 pennies, two nicklesand six pennies, three nickles and 0ne penny)
                                          
/* 
const denom = [1, 5, 10, 25];
     
console.log(coinChange(denom, 1)); // 1
console.log(coinChange(denom, 2)); // 1
console.log(coinChange(denom, 5)); // 2
console.log(coinChange(denom, 10)); // 4
console.log(coinChange(denom, 25)); // 13
console.log(coinChange(denom, 45)); // 39
console.log(coinChange(denom, 100)); // 242
console.log(coinChange(denom, 145)); // 622
console.log(coinChange(denom, 1451)); // 425663
console.log(coinChange(denom, 14511)); // 409222339 */