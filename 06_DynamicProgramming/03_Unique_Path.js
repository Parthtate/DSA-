/* Robot Destination Problem.
There is a robot on an  m x n grid. The robot is initially located at the top-right
corner(i.e grid[0][0]). The robit tries to move to bottom-right corner
(i.e grid[m-1][n-1]). The robot can only move either down or right at any point in time.
*/

// const grid = [
//     [0, 1, 1, 0, 'X']
//     [0, 0, 'X', 0, 1]
//     ['X', 0, 1, 0, 1]
//     ['X', 0, 0, 0, 1]
// ];

function countPath(grid, row=0, col=0, memo={}){
    const pos = row + ',' + 'col';

    // check out off bound 
    if (
        row >= grid.length || 
        col >= grid[0].length ||
        grid[row][col] === 'X' // X or Wall or Snake depends on varios que.
    ) {
        return 0
    }

    // check if reached Destination 
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return 1 // return 1, becaues while unwinding it count the path.
    }

    if (pos in memo) {
        return memo[pos]
    }

    momo[pos] = countPath(grid, row+1, col, memo) + countPath(grid, row, col+1, memo); 
    // it travers only right-way, and down-way to achived dest. and return the total pathCount.

    return memo[pos]
}