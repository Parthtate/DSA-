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
