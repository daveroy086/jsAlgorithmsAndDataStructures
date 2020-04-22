  // Notes:
      // Make notes about implementing each with an array...two or three lines about each
          // Why is the SLL version better
      // Pay attention to how the push, pop and peek functions included in the SLL versions
            // are different fromt the original SLL versions

// Check the vids and see what he wants for outputs

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    pop(){    //remove the first node from the stack
        if(!this.head) return undefined;
        let temp = this.head;
        let current = this.head;
        current = current.next;
        this.head = current;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return temp;
    }//end pop()

    push(val){    //add a new node to the stack
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }//end push()

    list() {    //list all vals in Stack
    console.log("");
        //console.log("list");
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
        console.log("");
    }//end traverse()

    peek() {    //see the top val
        console.log(this.head.val);
    }//end isHead()

    
    listNodes(){    //list all nodes in stack
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }console.log("");
    }//end listNodes()


}//end SinglyLinkedList



let s = new Stack();

s.push('e');
s.list();
s.push('d');
s.list();
s.push('c');
s.list();
s.push('b');
s.list();
s.push('a');
s.list();
s.peek();
s.pop();
s.list();
s.peek();
s.pop();
s.list();
s.listNodes();
s.pop();
s.list();
s.pop();
s.list();
s.pop();
s.list();
s.pop();
s.listNodes();