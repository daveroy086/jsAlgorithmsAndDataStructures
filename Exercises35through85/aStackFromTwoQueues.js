class Stack {
    constructor() {}
    push(val) {}
    pop() {}
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
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

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
        this.size = 0;
    }
    push(val) {
        this.q1.enqueue(val);
        this.size++;
        return this;
    }
    pop() {
        let num = this.q1.size;
        for(let i = 0; i < num - 1; i++){
            let nextVal = this.q1.dequeue();
            this.q2.enqueue(nextVal);
        }
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
        this.size--;
        return this.q2.dequeue();
    }
}
/**************************************/

    var s = new Stack()
    s.push(10).push(20).push(30)
    s.pop() // 30
    s.pop() // 20
    s.pop() // 10
    s.pop() // null
    s.push(30).push(40).push(50)
    s.pop() // 50
    s.push(60)
    s.pop() // 60