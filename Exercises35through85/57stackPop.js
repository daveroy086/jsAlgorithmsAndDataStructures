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
        let current = this.first;    /*figure out how this works and how he did it with one line */
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