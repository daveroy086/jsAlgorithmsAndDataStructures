class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){    //sets the beginning conditions of (initializes) SinglyLinkedList
        this.head = null;    //creates the property 'head' and sets it's value to null
            //basically the linked lists head is called this.head
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){             //if no head exists yet 
            this.head = newNode;    //these set head and tail both to newNode
            this.tail = this.head;    
        }else{
            this.tail.next = newNode;    //adds a new node to the list after tail
            this.tail = newNode;    //sets the new node to be the tail
        }
        //increment the length by 1
        this.length++;    //increment the length of 'this' list
        //return the list
        return this;
    }//end push

    traverse(){
        let current = this.head;    //create a var named current equal to the head node
        while(current){
            console.log(current.val);    //print the nodes val
            console.log(current.next);
            current = current.next;    //change the value of the variable current to the next node
        }//end traverse()
    }//end travrse()

    pop(){
        if(!this.head){ return undefined;}
        var current = this.head;
        var newTail = current;
        while(current.next){
           newTail = current;
           current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }//end pop()

    shift(){    //remove the first node from the list
        //if the list is empty ...do nothing
        if(!this.head) return undefined;
        //set the current head equal to a variable (temp) because we need to return it
        let temp = this.head;
        //the original heads .next becomes the new head
            //go into the original head
        let current = this.head;
            //move into the next node..the soon to be new head
        current = current.next;
            //make this node the head
        this.head = current;
        //decrement the length
        this.length--;
        //if you do shift often enough that there is no head(i.e. the length is 0) the lsit will still show a tail remove it with:
        if(this.length == 0){
            this.tail = null;
        }
        //return the old head  i.e. the temp we made
        return temp;
    }//end shift()

    unshift(val){
        //pseudocode:
        //accepts a value
        //Create a new node using the value passed in at the head position
        let newNode = new Node(val);
        //If there is no head property on the list, set the head and tail to be the newly created node 
        if(!this.head){
            this.head = newNode;    //these set head and tail both to newNode
            this.tail = this.head;
        }else{

        //Otherwise set the newly created nodes next property to be the current head property on the list
        newNode.next = this.head;    //points the newly created node at the current head
        //tell the list it has a new head
        this.head = newNode;
        }
        //increment the list length by one
        this.length++;
        //return the list
        return this;
    }//end unshift()

    get(index){

        //pseudocode
        //The function should accept an index
        //If the index is less than zero or greater or equal to, then the length of the list, retun null
        if(index < 0 || this.length - 1 < index){
            return false;
        }
        //Loop thru the list until you reach the index and return the node at that specific index
        let current = this.head;
        for(let counter = 0; counter <= index; counter++){
            if(counter < index){
                current = current.next;
            }               
        }//end for
        return current; 
    }//end get()

    set(index, value){
        //pseudocode
        //the function should accept an index and a value
        //use the get function to find the correct node
        //If the mode is not found return false
        //If the node is found, set the value of that node to be the value passed to the function and return true
        let nodeToSet = this.get(index);
        if (nodeToSet == false){
            return false;
        }else{
            nodeToSet.val = value;
            return true;
        }
    }//end set()

    insert(index, value){/***************************I need to test insert************************** */
        //pseudocode:
                //If the index is less than zero or greater than this.length return false
        if (index < 0 || this.length < index) return false;
        //create a new node with a 'value' and insert it into the list at the index
        let newNode = new Node(val);
        //if the index is the same as the length, push a new node to the end of the list
        if(index == this.length){
            let pushReturn = this.push(val);
            if(pushReturn == this) return true;
        }
        //If the index is zero unshift the node to the beginning of the list
        if(index == 0){
            let unshiftReturn = this.unshift(val);
            if (unshiftReturn == this) return true;
        }
        //Otherwise, using the get method, access the node at index - 1
        this.get(index - 1);
        //set the next property on that node to be the new node
        this.next = newNode;
        //Set the next property on the new node to be the previous next
        newNode.next.this.get(index);//is this right
        //increment the length
        this.length++;
        //return true
        return true;
        //coerce push and unshift into returning true or false 
    }

}//end SinglyLinkedList

let ls = new SinglyLinkedList();

ls.push("hi");
console.log("After push(hi), ls is:");
ls.traverse();
console.log("");

ls.push("Hello");
console.log("After push(hello), ls is:");
ls.traverse();
console.log("");

ls.pop();
console.log("After pop(), ls is:");
ls.traverse();
console.log("");

ls.push("bonjour");
ls.push("ciao");
ls.push("hola");
ls.push("ni hao");
console.log("After 'push'ing 'bonjour', 'ciao', 'hola' and 'ni hao', ls is:");
//ls.push("ola");
ls.traverse();
console.log("");

ls.shift();
console.log("After shift(), ls is:");
ls.traverse();
console.log("");

ls.unshift("ola");
console.log("After unshift(ola), ls is:");
ls.traverse();
console.log("");

console.log("When I 'get(8)' the return is", ls.get(8));
console.log("");

console.log ("get(2) is: \n", ls.get(2));
ls.set(2, "Hello");
console.log("");
console.log("After I 'ls.set(2, \"Hello\")', get(2) is: \n", ls.get(2));