// Breadth first search:
// BFS use Queue data structure for storing the data.
// for Queue we use shift() for removing first element from queue. same unshift() for adding elements at start point.

// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

const breadthFirstTraversal = (root) =>  {
    if (root === null) {
        return [];
    }

    const queue = [ root ];
    const values = [];
    
    while (queue.length > 0) { // if root are present with values then it enter in the loop.
       const node = queue.shift();
       values.unshift(node.key);

       if (node.right !== null) {
        queue.push(node.right)
       }

       if (node.left !== null) {
        queue.push(node.left);
       }

    }
    return values
}