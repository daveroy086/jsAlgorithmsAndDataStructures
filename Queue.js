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

/* 
// Test Stack()
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
 */

/* 
Notes:
A queue is basically any a data structure that uses the First In/First Out method
Queues are used in:
  background tasks
  uploading / downloading
  printing and other processing
  other data structures such as trees and graphs
We use a queue made from a SinglyLinkedList instead of an array because using an array would include index overhead
adding and deleting from the top of the is constant time
 
CS says we can use a SinglyLinkedList or a DLL but wouldn't the DLL have extra overhead from the .prev pointer

IDK if it's a rule but in the code CS seems to set node properties before class properties

To implement a queue using an array:
  initialize the array then use unshift / pop or push / shift

in dequeue i wrote:
    let current = this.first.next;
    temp.next = null;    //removes the next prop from the removed node?
    this.first = current;
he wrote:
    this.first = this.first.next;
    find the video where CS accesses the removed node and use that to test your code vs his
    the video should be in the SLL section      
*/
