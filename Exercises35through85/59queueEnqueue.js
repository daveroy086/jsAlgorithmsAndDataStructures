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