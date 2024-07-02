// Depth First Travesal

// Iterative approach

const depthFirstTraversal = function(root){
    if (root === null) {
        return []; // return an empty Array
    }
    const values = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.key)
        
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
           stack.push(node.key) 
        }
    }
    return values
}

// Recursive approach

const recursiveDepthFirstTraversal = (root) => {
    if (root === null) {
        return []; // return a message root is empty
    }

    // automatically create an Array using this function
    const leftValues = recursiveDepthFirstTraversal(node.left);
    const rightValues = recursiveDepthFirstTraversal(node.right);

   // return [root, leftValues, rightValues]
   // [a, [b, c, d], [e, f, g]]

    return [root, ...leftValues, ...rightValues]
   // [a, b, c, d, e, f, g]


}