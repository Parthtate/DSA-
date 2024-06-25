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
        this.head = newNode // update head
    }
    this.head = newNode

    // for tail precation
    if (this.tail === null) {
        this.tail = newNode

        // optional (create circular list) update
        // this.tail = this.head
    }
}