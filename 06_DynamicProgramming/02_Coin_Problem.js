/*

Coin change problem, "where you need to determine if it's
possible to from a specific amount using any combination of
elements from a given set, which can be used an unlimited number of times.".

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); -> true
sumPossible(8, [5, 3, 4]); -> true
sumPossible(15, [4, 6, 10]); -> true

 */

// Solve this problem using memoization technique.
// Memo -> memoization or called simple memoery.
function coinSum(amount, coins, memo={}){
    if (amount in memo) return memo[amount]
    if (amount === 0) return true
    if (amount < 0) return false

    // for of loop used to traversal in Array
    for (const num of coins) {
        if (coinSum(amount - num, coins, memo)) {
            memo[amount] = true
            return true
        }
    }
    return false
}
const amount = 4;
const coins = [1, 2, 3];
console.log(coinSum(amount, coins));