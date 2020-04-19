class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class DLL{    //DoublyLinkedList
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}//end DoublyLinkedList
   /* class Node{
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
        if (index < 0 || this.length < index) return false;
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
        return ls3;
    }//end reverse()

}//end SinglyLinkedList

let ls3 = new SinglyLinkedList;

ls3.push('a');
ls3.push('b');
ls3.push('c');
ls3.push('d');
ls3.push('e');
console.log("Before 'reverse()', ls3 is:");
ls3.traverse();
ls3.reverse();
console.log("After 'reverse()', ls3 is:");
ls3.traverse(); */
