//hey, look, i made changes
// I want to use Notepad++ for my commit messages


//Instructions
/**
 * Write a function called coinChange which accepts two parameters:
 *  an array of denominations (named denom) and a value. 
 *  The function should return the number of ways you can obtain the value
 *   from the given collection of denom. You can think of this as figuring 
 *   out the number of ways to make change for a given value from a supply of coins. */


// Starter code:
function coinChange(denom, value){
    if(denom.length == 1) return 1;

    let combos = 0;
    let largestCoin = Math.max(...denom);
    let howManyTimes = Math.floor(value / largestCoin);
    for(let i = 0; i < howManyTimes + 1; i++){
        let newDenom = denom.slice(0, denom.length - 1);
        let newValue = value - (largestCoin * i);
        combos += coinChange(newDenom, newValue);
    }
    return combos;
    
}

//Tests:

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
console.log(coinChange(denom, 14511)); // 409222339
    // non-memoized version gives result after about 10 sec