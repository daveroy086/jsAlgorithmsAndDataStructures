class Node{                  //create seperate flash cards for Node and SinglyLinkedList 
    constructor(val){        //creates a new Node with:
        this.val = val;      // a value of val and
        this.next = null;    // it's next is null as it is the tail
    }
}

class SinglyLinkedList{
    constructor(){           // creates an empty SinglyLinkedList
        this.head = null;    // has no nodes yet so head is null
        this.tail = null;    // tail is null
        this.length = 0;     // length is zero
    }
    push(val){    //add a new val to the end of the list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;    
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }//end push

    traverse(){    //list all vals in list
        let current = this.head;
        while(current){
            console.log(current.val);
            //console.log(current.next);
            current = current.next;
        }console.log("");
    }//end traverse()

    pop(){    //remove last node from list
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
    }//end shift()

    unshift(val){    //add a new val to the beginning of the list
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
    }//end unshift()

    get(index){    //get the val of a node at the given index
        if(index < 0 || this.length - 1 < index){
            return false;
        }
        let current = this.head;
        for(let counter = 0; counter <= index; counter++){
            if(counter < index){
                current = current.next;
            }               
        }//end for
        return current; 
    }//end get()

    set(index, value){    //changes existing val at an index to new value
        let nodeToSet = this.get(index);
        if (nodeToSet == false){
            return false;
        }else{
            nodeToSet.val = value;
            return true;
        }
    }//end set()

    insert(value, index){    //inserts a new node with a value at the index
        if (index < 0 || this.length < index) return false;
        if(index == this.length) return !!this.push(value);
        if(index == 0) return !!this.unshift(value);
        let insertedNode = new Node(value);
        let beforeInserted = this.get(index - 1);
        let afterInserted = this.get (index);
        beforeInserted.next = insertedNode;
        insertedNode.next = afterInserted;
        this.length++;
        return true;
    }

    remove(index){    //removes the node at an index
        if (index < 0 || this.length < index) return undefined;
        if(index == this.length) return !!this.pop(index);
        if(index == 0) return !!this.shift(index);
        let nodeToRemove = this.get(index);
        let previousNode = this.get(index - 1);
        let followingNode = this.get (index + 1);
        previousNode.next = followingNode;
        this.length--;
        return nodeToRemove;
    }//end remove()

    reverse(){    //reverse the order of the nodes
        for(let index = this.length; index > 1; index--){
            this.insert(this.get(0).val, index);
            this.remove(0);
            }//end for index
        return ls3;//I need to test this when i make this flash card
                   //add console.log(ls3);//I think it'll crash
                   //should it say 'return this'? check the vid
    }//end reverse()

}//end SinglyLinkedList
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.traverse();
singlyLinkedList.remove(2).val; // 15
console.log("");
console.log("after remove(2)");
singlyLinkedList.traverse();
singlyLinkedList.remove(100); // undefined
console.log("");
console.log("after remove(100)");
singlyLinkedList.traverse();
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20
/* 
    Implement the following on the SinglyLinkedList class

remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)
 */