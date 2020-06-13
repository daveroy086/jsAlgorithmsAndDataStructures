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

    rotate(n) {
        if(n > -1){
        n = n % this.length;
           for(let i = 0; i < n; i++) {
               this.push(this.get(0).val);
               this.shift();
            }
        } else {
            for(let i = 0; i < -n; i++) {
               this.unshift(this.get(this.length - 1).val);
               this.pop();
            }
        }
    } // end rotate()

}//end SinglyLinkedList

/**********************************************************************************************************/
/* rotate

This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

Time Complexity: O(N), where N is the length of the list.

Space Complexity: O(1)

Examples

(Note: push is implemented to help you test your rotate function)
 */
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    singlyLinkedList.traverse();
     
    singlyLinkedList.rotate(3);
    singlyLinkedList.traverse();

    singlyLinkedList.rotate(6);
    singlyLinkedList.traverse();
     
    singlyLinkedList.rotate(-1);
    singlyLinkedList.traverse();

    singlyLinkedList.rotate(-8);    
    singlyLinkedList.traverse();