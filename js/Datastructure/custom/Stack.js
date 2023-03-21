class Stack {
    constructor(){
        this.items = [];
        
    }
    push(element){
        this.items.push(element);
    }
    pop(){
      return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0  
    }
    size () {
        return this.items.length;
    }
    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack();
stack.push(3)
stack.push(9)
stack.push(4)
// console.log(stack.size())
stack.pop()
stack.pop()
console.log(stack.peek())
console.log(stack.isEmpty());
stack.print()