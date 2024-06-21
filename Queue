// Queue: is similar behaviour like Array, last in first out LIFO

class Queue{
    constructor(){
        this.queue = []; // emepty Array for queue
    }

    // adding elements in queue from end.
    enqueue(data){
        return this.queue.push(data)
    }

    // remove element from first in queue.
    dequeue(){
        this.queue.shift()
    }

    // print first[i] element from queue.
    peek(){
        if (this.isEmpty()) {
            return "Queue is empty!"
        }
        return this.queue[0]
    }

    // if first value is empty, it returns true or false.
    isEmpty(){
        return this.queue.length === 0;
    }

    // returns the total size(length) of queue.
    size(){
        return this.queue.length
    }

    // destroy all elements from queue.
    clear(){
        this.queue = []
    }

    printQueue(){
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
                str += this.queue[i] + "\n";         
        }
        return str
    }


}

// Usage Examples:

let myQueue = new Queue();

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40);

myQueue.dequeue();
myQueue.size()
console.log(myQueue.printQueue());

