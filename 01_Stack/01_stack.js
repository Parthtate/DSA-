// created stack using class

class Stack {
    constructor(){
        this.stack = []
    }

    // create this.stack push() method
    push(data){
        this.stack.push(data)
    }

    // pop(), removing data from stack
    pop(){
        this.stack.pop()
    }

    // printing each value from stack,
    printStack(){
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += str[i] + "\n";            
        }
        return str
    }

    // knowing length of stack
    size(){
        this.stack.length
    }

    // returns the first element from stackṇ
    peek(){
       return this.stack[this.stack.length - 1]
    }

    // for all elements remove from stack,
    clear(){
        this.stack = []
    }

    // check the element is present in stack or not.
    contains(element){
        return this.stack.includes(element); // show o/p in true / false.
    }

}

// usage examples:

const myStack = new Stack();
myStack.push(11);

console.log(printStack());