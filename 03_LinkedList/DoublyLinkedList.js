// Doubly Linked List: (DLL)

class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}

// insert node at beginnging:
DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null);

    // check if already have a data present in DLL
    if (this.head !== null) {
        this.head.prev = newNode // if already data present in DLL, attached newNode at prev which is null, then update this.head.
        // this.head = newNode // update head
    }
    this.head = newNode

    // for tail precation
    if (this.tail === null) {
        this.tail = newNode

        // optional (create circular list) update
        // this.tail = this.head
    }
}

// insert at the end
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail)

    //if tail is not empty.
    if(this.tail !== null){
        this.tail.next = newNode
    }
    // else if this.tail is empty
    this.tail = newNode

    if(this.head === null){
        this.head = newNode
    }
}

// insert at given node.
DoublyLinkedList.prototype.insertAfterNode = function(prevNode, data){
    if(prevNode == null){
        console.log("Invalid prevNode!");
        return
    }

    const newNode = new Node(data, prev.next, prev)

    // check if prevNode is not empty.
    if(prevNode.next !== null){
        prevNode.next.prev = newNode
    }
    // else prevNode == null
    prevNode.next = newNode

    // insert node at tail
    if(newNode.next == null){
        this.tail = newNode
    }
}

// delete first node DLL
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if (this.head != null) {
        console.log("nothing to delete!");
        return
    }
    // On same node head & tail are present.
    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    }
    else { 
        this.head = this.head.next // update this.head upto next node.
        this.head.prev = null
    }

}

// delete last node.
DoublyLinkedList.prototype.deleteLastNode = function(){
    if (!this.tail) {
        console.log("DLL is empty!");
        return
    }

    // On same node head & tail are present.
    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } 
    else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

// reverse a DLL (simple eg)
DoublyLinkedList.prototype.reverseDoubly = function(){
    let current = this.head
    let temp = null

    // if any data present in head
    while (current) {
        // swapping
        temp = this.current.prev
        this.current.prev = this.current.next
        this.current.next = temp

        // updatation of loop
        current = current.prev // After swapping, current.next becomes current.prev 
    }

    // swapping the head and tail
    if (!temp) {
        this.tail = this.head
        this.head = temp.prev // In the end prev hold the value of next node, so it becomes the head 
    }
}