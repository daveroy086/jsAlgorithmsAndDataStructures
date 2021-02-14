function minCoinChange(coins, amount) {

    coins.sort(function(a, b) {
        return b - a;
        })

    let result = [];
    while(amount > 0) {
        if(coins[0] <= amount) {
            result.push(coins[0]);
            amount -= coins[0];
        } else {
            coins = coins.slice(1);
        }
    }    // end while

    return result;

}    // end minCoinChange

for(let k = 1; k < 101; k++) {
    console.log(minCoinChange([25, 10, 5, 1], k));
}