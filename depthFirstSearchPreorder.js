class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value == current.value) return undefined;

                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;                            
                    } else {
                        current = current.left;              
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;                        
                    }
                }

            } //end while
        }//end if-else
            return this;
    }//end insert()

    includes(value1) {   // Check this vs his
        if(this.root == null) return false;
        var current = this.root;
        let found = false;
        while(current && !found) {
            if(value1 < current.value) {
                current = current.left;
                console.log(current);
            } else if(value1 > current.value) {
                current = current.right;
                console.log(current);
            } else {
                found = true;
            }
            if(!found) return undefined;
        }
        return current;
    }    // ends includes    
}//end BinarySearchTree
            

let t = new BinarySearchTree();

let anArray = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];
let len = anArray.length;
for(j = 0; j < len; j++) {
    t.insert(anArray[j]);
}

let aQueue = [];
let output = [];

aQueue.push(t.root);

while(aQueue.length != 0) {

   let aNode = aQueue.shift();
   output.push(aNode.value);
   if(aNode.left != null) aQueue.push(aNode.left);
   if(aNode.right != null) aQueue.push(aNode.right);
} // end while
//console.log('output is ', output);
return output;
