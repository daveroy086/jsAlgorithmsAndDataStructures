class Stack {

    constructor() {
    this.qA = new Queue();
    this.qS = new Queue();
    this.size = 0;
    }

    push(val) {    //push a val onto the stack
        if(this.qA.size == 1) {
            let previousVal = this.qA.dequeue();
            this.qS.enqueue(previousVal);
        }
        this.qA.enqueue(val);
        this.size++;
        return this;
    }

    pop() {    //pop the most recently added val off of the stack
        if(this.qA.size == 0) {
            var qSSize = this.qS.size;
            for(let i = 0; i < qSSize - 1; i++) {
                this.qS.enqueue(this.qS.dequeue());
            } // end for i
            this.qA.enqueue(this.qS.dequeue());
        }

        let poppedVal = this.qA.dequeue();
        this.size--;
        return poppedVal;
    } // end pop

} //end Stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {   //create a queue
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {    //add data to the queue
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {    //remove the first data added from the stack
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
} // end Queue

//Test:
var s = new Stack();
console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));
console.log(s.pop()); // 30
console.log(s.push(40));
console.log(s.pop()); // 40
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null