 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {    //DoublyLinkedList
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {    //add new node to end of list
        let newNode = new Node(val);
        if(this.length === 0) {    //if no head exists yet 
            this.head = newNode;
            this.tail = newNode;
        } else { 
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }
        this.length++;
        return this;
    }//end push

    traverse() {    //list all vals in DLL
        if(this.length === 0) {
            console.log("Is empty");
        } else {
            let current = this.head;
            while(current) {
                console.log("");
                console.log("current val is ", current.val);
                console.log("current prev is ", current.prev);
                console.log("current next is ", current.next);
                console.log("");
                current = current.next;
            }
        }
        console.log("");
    }//end traverse()

    simpleTraverse() {    //list all vals in DLL
    console.log("");
        console.log("simpleTraverse");
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
        console.log("");
    }//end traverse()

    isHead() {
        return this.head;
    }//end isHead()
    
    isTail() {
        return this.tail;
    }// end isTail()

    pop() {    //remove node from end of list
        if(this.length === 0) {    //If there is no head, return undefined
            return undefined;
        }       
        
        let toBePopped = this.tail;
        if(this.length === 1) {  //If the length is 1, the popped list will be empty so 
            this.head = null;
            this.tail = null;
        } else {
            let newTail = toBePopped.prev;
            this.tail = newTail;
            this.tail.next = null;
            toBePopped.prev = null;
        }
        this.length--;
        return toBePopped;
    }//end pop()

    shift() {    //remove the first node from the list
        if(this.length === 0) {
             return undefined;
        }
        let removedHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
            this.length--;
            return removedHead;
        }
    }//end shift()

    unshift(val) {    //Add an new val to the beginning of DLL
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;            
        } else {
            let currentHead = this.head;
            newNode.next = currentHead;
            currentHead.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;        
    }// end unshift()

    get(index) {    //get the node at the given index
        if(index < 0 || this.length - 1 < index) {
            return false;
        }
        
        let counter = 0;
        let current  = this.head;
        if(index <= Math.floor(this.length / 2)) {   //counter runs from the end to which index is closest
            for(counter = 0; counter <= index; counter++) {    //count up from head
                if(counter < index) {
                    current = current.next;
                }             
            }//end for 
        } else {
            current = this.tail;
            for(counter = this.length - 1; counter > index; counter--) {    //count back from tail
                if(counter > index) {
                    current = current.prev;
                }               
            }//end for       
        }

        return current;
    }//end get()

    set(index, value) {    //replace the value of the node at index with the passed value
        if(this.get(index)) {
            this.get(index).val = value;
            return true;
        }
        return false;
    }//end set()

    
    insert(value, index) {    //inserts a new node with a value at the index
        if (index < 0 || this.length < index) return false;
        if(index == 0) return !!this.unshift(value);
        if(index == this.length) {
            return !!this.push(value);
        }
        let newNode = new Node(value);
        let beforeNew = this.get(index - 1);
        let afterNew = this.get (index);
        beforeNew.next = newNode;
        newNode.prev = beforeNew;
        newNode.next = afterNew;
        afterNew.prev = newNode;
        this.length++;
        return true;
    }//end insert()

    remove(index) {
        //psuedocode
        if(index < 0 || this.length <= index) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        let nodeToRemove = this.get(index);
        let previousNode = this.get(index - 1);
        let followingNode = this.get (index + 1);
        previousNode.next = followingNode;
        followingNode.prev = previousNode;
        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }//end remove()

}//end DoublyLinkedList

/*
// Test push():  
console.log("Pushed 'a'");
dll.push('a');
console.log("Pushed 'b'");
dll.push('b');
console.log("Pushed 'c'");
dll.push('c');
console.log('');
*/
/*
//test pop():
console.log("Do pop()");
dll.pop();    //removes the c
dll.simpleTraverse();
console.log("Do pop()");
dll.pop();    //removes the b
dll.traverse();
console.log("Do pop()");
dll.pop();    // removes the a
dll.traverse();
console.log("isHead is ", dll.isHead());
console.log("isTail is ", dll.isTail());
console.log("Do pop()");
dll.pop();   //can't remove anything
dll.traverse();
*/
/* 
//test shift()
console.log("Do shift()");
dll.shift();    //removes the c
dll.simpleTraverse();
console.log("Do shift()");
dll.shift();    //removes the b
dll.traverse();
console.log("Do shift()");
dll.shift();    // removes the a
dll.traverse();
console.log("isHead is ", dll.isHead());
console.log("isTail is ", dll.isTail());
console.log("Do shift()");
dll.shift();   //can't remove anything
dll.traverse();
*/
/* //Test unshift():
console.log("unshift 'c'");
dll.unshift('c');
console.log("unshift 'b'");
dll.unshift('b');
console.log("unshift 'a'");
dll.unshift('a');
dll.traverse();
console.log("isHead is ", dll.isHead());
console.log("isTail is ", dll.isTail());
*/
/*
//test get:
for(let a = 0; a <= 9; a++){
    let dll = new DLL;
    for(let b = 0; b < 10; b++){
        let val = Math.floor(Math.random() * 100);
        dll.unshift(val);
    }
    dll.simpleTraverse();
    let anIndex = a;//Math.floor(Math.random() *  20);
    console.log("An index is ", anIndex);
    console.log(dll.get(anIndex));
}//end for a
*/
/*
//Test insert():

let dll = new DLL;

dll.push('b');
dll.push('d');
dll.simpleTraverse();
console.log("Do dll.insert('a', -1)");
console.log(dll.insert('a', -1));
console.log("\n\n");

console.log("Do dll.insert('a', 0), then traverse.");
dll.insert('a', 0);
dll.simpleTraverse();
console.log("\n\n");

console.log("Do dll.insert('c', 2), then traverse.");
dll.insert('c', 2);
dll.simpleTraverse();
console.log("\n\n");

console.log("Do dll.insert('e', 4), then traverse.");
dll.insert('e', 4);
dll.simpleTraverse();
dll.traverse();
*/
/* 
// Test remove();
let dll = new DLL();
dll.push('a');
dll.push('b');
dll.push('c');
dll.push('d');
dll.push('e');
dll.simpleTraverse();
dll.traverse();    //check all properties
dll.remove(0);
dll.simpleTraverse();
dll.traverse();    //check all properties
dll.remove(1);
dll.simpleTraverse();
dll.traverse();    //check all properties
dll.remove(2);
dll.simpleTraverse();
dll.traverse();    //check all properties
*/
/*
    reverse(){    //reverse the order of the nodes
        for(let index = this.length; index > 1; index--){
            this.insert(this.get(0).val, index);
            this.remove(0);
            }//end for index
        return ls3;
    }//end reverse()

}//end SinglyLinkedList

/*
Code with all comments

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{    //DoublyLinkedList
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        //psuedocode
        //create a new node with the value passed to the function
        let newNode = new Node(val);
        //If the head property is null set the head and the tail to be the newly created node
        if(!this.head){             //if no head exists yet 
            this.head = newNode;    //these set head and tail both to newNode
            this.tail = this.head;
        }else{ 
        //If not, set the next property on the tail to be that node
        this.tail.next = newNode;    //changes the next property of the current tail to newNode
        newNode.prev = this.tail;    //Sets the previous property on the newly created node to be the tail
        this.tail = newNode;    //Set the tail to be the newly created node
        this.length++;    //increment the length of 'this' list
        return this;
        }
    }//end push

    traverse(){    //list all vals in list
        let current = this.head;
        while(current){
            console.log(current.val);
            //console.log(current.next);
            current = current.next;
        }
        console.log("");
    }//end traverse()

    isHead(){
        return this.head;
    }//end isHead()
    
    isTail(){
        return this.tail;
    }// end isTail

    pop(){    //remove node from end of list
        
        if(this.length === 0){    //If there is no head, return undefined
            return undefined;
        }       
        
        let toBePopped = this.tail;   //Store the current tail in a variable to be used and returned later
        if(this.length === 1){  //If the length is 1, the popped list will be empty so 
                                //set the head and the tail to be null
            this.head = null;
            this.tail = null;
        }
        let newTail = toBePopped.prev;
        console.log("newTail is ", newTail);
        this.tail = newTail;    //Update the tail to be the previous node
            //toBePopped.prev didn't work because it didn't get the 
            //node it got the previous property of the toBePopped node
        console.log("isTail is ", this.isTail());
        this.tail.next = null;    //set the new tails next to null
        toBePopped.prev = null;    //Set the toBePopped previous to null
        this.length--;    //Decrement the length
        console.log("toBePopped is ", toBePopped);
        return toBePopped;    //Return the value removed
            //Should there be somekind of error message when you delete the last node 

    }//end pop()

    shift(){    //remove the first node from the list
        if(this.length === 0){
             return undefined;
        }
        let removedHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removedHead.next;    //Update the head to be the .next of the old head
                //make the head of the list equal to the second node
            this.head.prev = null;    //Set the head's .prev property to null
                /cut the oldhead/newhead .prev connection
            removedHead.next = null;    //set the old head's .next to null
                //cut the old head/new head .next connection
            this.length--;    //decrement the length
            return removedHead;
    }//end shift()
    
    
    unshift(val){    //Add an new val to the beginning of DLL
        // my psuedocode
        let newNode = new Node(val);    //create a new node
        let currentHead = this.head;    //set the current head equal to a variable
        newNode.next = currentHead;    //set the new node .next property to the current head variable
        currentHead.prev = newNode;    //set the current head variable .prev property to the newNode
        this.head = newNode;    //set this.head to be the newNode
        return this;    //return this; 
        
    }// end unshift()

    get(index){    //get the val of a node at the given index
        if(index < 0 || this.length - 1 < index){
            return false;
        }
        
        let counter = 0;
        let current  = new Node;
        if(index <= Math.floor(this.length / 2) ){   //counter runs from the end to which index is closest
            current = this.head;
            for(counter = 0; counter <= index; counter++){    //count up from head
                if(counter < index){
                    current = current.next;
                }             
            }//end for 
        }else{
            current = this.tail;
            for(counter = this.length - 1; counter > index; counter--){    //count back from tail
                if(counter > index){
                    current = current.prev;
                }               
            }//end for       
        }

        return current.val;
    }//end get()

        set(index, value){    //replace the value of the node at index with the passed value
        this.get(index).val = value;        
    }//end set()

    insert(value, index){    //inserts a new node with a value at the index
        //pseudocode    
        //If the endex is less than zero or greater than or equal to this.length return false
        if (index < 0 || this.length < index) return false;
        //If the index is zero insert using unshift()
        if(index == 0) return !!this.unshift(value);
        //If the index is the same as this.length insert using push()
        if(index == this.length){
            console.log("HI");
            return !!this.push(value);
        }      
        let newNode = new Node(value);
        //Use the get() method to accesss the index - 1 node
        let beforeNew = this.get(index - 1);
        let afterNew = this.get (index);
        //Set the .next() and .prev() values on the correct nodes to link everything together 
        beforeNew.next = newNode;
        newNode.prev = beforeNew;
        newNode.next = afterNew;
        afterNew.prev = newNode;
        //Increment the length
        this.length++;
        //Return true
        return true;
    }//end insert()

    remove(index) {
        //psuedocode
        if(index < 0 || this.length <= index) {    // If the index is less than zero or 
                                                   //equal to or greater than the length, return undefined     
            return undefined;
        }
        if(index === 0) return !!this.shift();    // If the index is zero, use shift
        if(index === this.length - 1) return !!this.pop();    // If the index is the same as the length - 1, use pop()
        let nodeToRemove = this.get(index);    // Use the get() method to retrieve the item to be removed
        // Update the .next and .prev properties to remove the found node from the list
        let previousNode = this.get(index - 1);
        let followingNode = this.get (index + 1);
        previousNode.next = followingNode;
        followingNode.prev = previousNode;
        nodeToRemove.prev = null;    // Set these properties to null on the found node
        this.length--;     // Decrement the length
        return nodeToRemove;
    }//end remove()

}//end DoublyLinkedList


console.log("Pushed 'a'");
dll.push('a');
//dll.traverse();

console.log("Pushed 'b'");
dll.push('b');
//dll.traverse();

console.log("Pushed 'c'");
dll.push('c');
//dll.traverse();


console.log("Pushed 'd'");
dll.push('d');
//dll.traverse();
console.log("The head is ", dll.isHead());
console.log("The tail is ", dll.isTail());


console.log("Do pop(), then traverse().");
dll.pop();
console.log('');
dll.traverse();
console.log('');

console.log("The head is ", dll.isHead());
console.log("Do shift(), then traverse().");
dll.shift();
dll.traverse();
console.log("The head is ", dll.isHead());
console.log('');

console.log("get this.head");
console.log(dll.isHead());
console.log("unshift an 'a'");
dll.unshift('a');
console.log("show isHead and traverse.");
console.log(dll.isHead());
dll.traverse();
console.log("");

*/