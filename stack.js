  // Notes:
      // Make notes about implementing each with an array...two or three lines about each
          // Why is the SLL version better
      // Pay attention to how the push, pop and peek functions included in the SLL versions
            // are different fromt the original SLL versions

// Check the vids and see what he wants for outputs
//add my other comments

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
            // Test my version vs CSs version ... then check the rest of my code vs his
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }//end push()

    pop(){    //remove the first node from the stack
        if(!this.first) return undefined;
        let temp = this.first;
        let current = this.first;
        current = current.next;
        this.first = current;
        this.size--;
        if(this.size == 0){
            this.last = null;
        }
        return temp;
    }//end pop()

    list() {    //list all values in DLL
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
        return this.first;
    }//end peek()
    
}//end Stack

let s = new Stack;

s.push('c');
s.list();
s.listNodes();
s.push('b');
s.list();
s.listNodes();
s.push('a');
s.list();
s.listNodes();
s.peek();
s.pop();
s.list();
s.listNodes();
s.peek();
s.pop();
s.list();
s.listNodes();
s.pop();
s.list();
s.listNodes();
s.pop();
s.listNodes();