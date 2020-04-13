class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){    //this function should accept a value
        //create a new node using the value passed to the function
        let newNode = new Node(val);
        if(!this.head){    //wouldn't this.head == null also work
            //if there is no head property on the list, set the head and the tail to be the newly created node
            this.head = newNode;    //these set head and tail both to newNode
            this.tail = this.head;    //wouldn't this.tail = newNode also work
        }else{
             //otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increment the length by 1
        this.length++;
        //return the list
    }

}

let myNode = new Node("Hi");
