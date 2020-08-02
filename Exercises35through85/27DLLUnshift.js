class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
        
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

}