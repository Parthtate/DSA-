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
