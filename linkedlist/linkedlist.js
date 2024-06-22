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