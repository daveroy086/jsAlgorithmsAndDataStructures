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
        return this.size;
    }//end peek()
    
}//end Stack

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
A stack is basically any a data structure that uses the First In/First Out method
Stacks are used in:
  managing function invocations ((i.e. == id est == 'in other words') a 'call stack')
  undo/redo in PhotoShop or crtl>z in a word processor 
  browser history
  other data structures such as trees and graphs
We use a stack instead of an array because using an array would include index overhead
aAding and deleting from the top of the stack is constant time
 
CS says we can use ASinglyLinkedList or a DLL but wouldn't the DLL have extra overhead from the .prev pointers
*/
