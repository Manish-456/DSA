// class Queue {
//     constructor(){
//         this.items = [];

//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(element){
//        return this.items.shift()
//     }
  
//     isEmpty(){
//         return this.items.length === 0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size (){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue();
// queue.enqueue(40)
// queue.enqueue(90)
// queue.dequeue()
// queue.dequeue()
// console.log(queue.peek())
// queue.print()

// ** Optimized version of Queue

// class Queue {
//     debugger;
//     constructor(){
//         this.items = {};
//         this.rear = 0
//         this.front = 0
//     }
//     enqueue(element){
//        this.items[this.rear] = element;
//        this.rear += 1;
//     }

//      dequeue(){
//         const item = this.items[this.front];
//         delete this.items[this.front];
//         this.front ++;
//         return item;

//      }
//      isEmpty (){
//         return this.rear - this.front === 0
//      }
//      peek(){
//         return this.items[this.front]
//      }
//      size(){
//         return this.rear - this.front
//      }
//      print(){
//         console.log(this.rear , "rear")
//         console.log(this.front, "front");
//         console.log(this.items)
//      }

// }



class Queue {
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element){
    this.items[this.rear] = element;
    this.rear ++;
}
    dequeue(){
        let items = this.items[this.front]
        delete this.items[this.front];
        this.front ++;
        return items
    }
    isEmpty() {
        return this.rear - this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size (){
        return this.rear - this.front
    }
    print(){
        console.log(this.front)
        console.log(this.items)
    }

}


const queue = new Queue();
queue.enqueue(40)
queue.enqueue(90)
queue.enqueue(95)
queue.enqueue(60)
console.log(queue.size())
console.log(queue.peek())
queue.print()

// Big-O => O(n) => linear
