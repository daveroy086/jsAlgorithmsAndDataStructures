// two queues form a loop
// after you add an element to one advance all elements of both until the element you just added is about to pop of????
class Stack {
    constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    this.length = 0;
    }
    push(val) {
        this.q1.enqueue(val);    //enqueue a node into q1
        if(q1.length > 1) {    //if there is more than one node in q1 move them to q2
            this.q2.enqueue(q1.pop);
        }
    }
    pop() {
        this.q1.dequeue();    //dequeue a node from q1
        if(this.q1.length == 0) {
            for(let i = 0; i <= this.q2.length; i++) {
                q1.enqueue(q2.pop());    //pop all the nodes off of q2 into q1
                    // all but one will be popped back off of q1 and onto q2
                    // leaving only the last one on q1
            } // end for i
        }
    /***** add list hhere and to push and test*/
    } // end pop
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

    
    list() {    //list all values in queue
    console.log("");
        console.log("list\n");
        let current = this.first;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("");
    }//end list()
}

/*
//Instructions:
Implement a stack using two queues:
You should implement the following functions:
- push (returns the stack)
- pop (returns the value popped)
Comment on your time complexity for push() and pop().
*/

// Test:
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

//Test:

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

/*
// my Queue code:
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){    //add a new node to the end of the queue
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;    //set the .next property of the existing last node to newNode
            this.last = newNode;    // set the .last property of the list to newNode 
        }
        this.size++;
        return this.size;
    }//end enqueue()

    dequeue(){    //remove the first node from the beginning of the queue
        if(!this.first) return null;
        let temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;        
        this.size--;
        return temp.value;
    }//end dequeue()

    list() {    //list all values in queue
    console.log("");
        console.log("list\n");
        let current = this.first;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("");
    }//end list()


    listNodes(){    //list all nodes in the queue
        let current = this.first;
            console.log(current);
            console.log("");
    }//end listNodes()

    peek() {
        console.log('The top Node is: ', this.first);
        return this.size;
    }//end peek()
    
}//end Queue
*/

/*
//my stack code:
// Check the vids and see what he wants for outputs

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){    //add a new node to the stack
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }//end push()

    pop(){    //remove the first node from the stack
        if(!this.first) return null;
        let temp = this.first;
        if(this.size == 0){
            this.last = null;
        }
        let current = this.first;    //figure out how this works and how he did it with one line
        current = current.next;
        this.first = current;
        this.size--;
        return temp.value;
    }//end pop()

    list() {    //list all values in stack
    console.log("");
        console.log("list\n");
        let current = this.first;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("");
    }//end list()


    listNodes(){    //list all nodes in the stack
        let current = this.first;
            console.log(current);
            console.log("");
    }//end listNodes()

    peek() {
        console.log('The top Node is: ', this.first);
        return this.size;
    }//end peek()
    
}//end Stack
*/