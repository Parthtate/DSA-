/* Tree:
1. Tree data structure is same like doubly linkedlist, it hold 2 values left & right.
2. Topmost node called root node, it hold any value. form root node created 0 or less than 2 subchild left hold lesser value and right hold bigger value compare to root node value.
3. Recurssion will be use by tree, it divide node into subtree for compare and easy to traverse the tree.
4. 
*/

class BSTNode {
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
}
