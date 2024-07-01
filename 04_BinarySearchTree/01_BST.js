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

    // created root
    insert(key) {
        const newNode = new BSTNode(key)

        if (this.root === null) { // check value is exist ot not.
            this.root = newNode
        } else{
            insertNode(this.root, newNode)
        }

        insertNode(node, newNode){ // node -> this.root // created new root (recursion) part divided tree
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    this.insertNode(node.left, newNode)
                } // this part is called recursion, method called multiple time when is needed.

            } else {
                if (this.right === null) {
                    this.right = newNode
                } else {
                    this.insertNode(node.right, newNode)
                }
            }
        }
    }
/********************************************************************************************************************** */
    // delete node
    delete(key){
        this.root = this.deleteNode(this.root, key) 
    }

    deleteNode(node, key){ // node -> root
        if (node == null) {
            return null
        }
        
        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        }
        else {
            // for leafNode deletion
            if (node.left === null && node.right === null) {
                return null;
                // for 1 node deletion(replace the node)
            } else if (node.left === null){
                return this.right
            } else if (node.right === null){
                return node.left
            } 
            // for both 2 node
            else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key // replace the given node to existing node
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
        
    }
    findMinNode(node){
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
}
