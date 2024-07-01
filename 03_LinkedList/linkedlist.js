// LinkedList is custmized data structure using an Array.
// We created linkedlist throught Class, or Object.

// Created Node 
class Node{
    constructor(head, next = null){
        this.head = head
        this.next = next
    }
}

// Created LinkedList
class LinkedList{
    constructor(){
        this.head = null
    }
}

// insert at the beginning
LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data);
    this.head = newNode;
}

// insert at the end.
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);
    // check if last node is empty(null) then stop.
    if (!this.head) { // this.head == null is false, so reverse it. false->true.
        this.head = newNode;
        return;
    }

    // Assume last is null,
    let last = this.head

    // check evey Node is null, if not then update with newNode.
    while(last.next){
        last = newNode;
    }

    last = newNode;
}

// insert at given node.
LinkedList.prototype.insertAfter = function(prevNode, data){
    // check if node cannot be given.
    if(!prevNode){
        console.log("The give prev node cannot be null");
        return;
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode
}

// delete the first node.
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log("The node is empty");
        return
    }
    this.head = this.head.next;
}

// delete the last node.
LinkedList.prototype.deleteEndNode = function(){
    if(!this.head){
        console.log("The node is empty.");
        return
    }

    if(!this.head.next){
        this.head = this.head.next; // if the second node have null value
        return
    }

    let secondNode = this.head
    if(this.head.next.next){
        secondNode.next = this.head; // if their are multiple nodes present in linkedlist.
    }

    secondNode.next = null;
}

// delete the node by key. (select node and delete.)
LinkedList.prototype.deleteByKey = function(key){
    // checking if node is empty
    if(!this.head){
        console.log("The node is empty")
        return
    }

    // key found at head.
    if(this.head.next === key){
        this.head = this.head.next
        return
    }

    // traverse node for key.
    let current = this.head
    while(current.next !== null){
        if(current.next === key){
            current.next = current.next.next
            return
        }
        current = current.next
    }
    // (optional) if key is node present in arguments.
    console.log("No node found with key: ", key)

}

// search node by key
LinkedList.prototype.search = function(key){
    let current = this.head

    while(current){
        if (current.data === key ) {
            return true
        }
        current = current.next
    }
    return false
}
 
// travsal print all nodes.
LinkedList.prototype.printList = function(){
    let current = this.head

    // store data in empty Array.
    let listValue = []
    while (current) {
       listValue.push(current.data)
        current = current.next // updation(iteration) the 
    }
    
    if (current.length > 0) {
        console.log(listValue.join(" -> "));
    } else {
        console.log("The linkedlist is empty");
    }
}

// Reverse the linkedlist.
LinkedList.prototype.reverse = function(){
    let current = this.head
    let next = null
    let prev = null

    while(current){
        next = current.next // 1.go to the jump to next node
        current.next = prev // 2. change pointer next to previous node.
        prev = current // 3. update prev & go to next node.
        current = next // 4. then update current node to next node. & so on....
    }

    // After at the end, update head
    prev = this.head
}
