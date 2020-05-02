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

//Create a queue(this can be an array) and a variable to store the values of the nodes visited
let aQueue = [];
let output = [];

// Place the root node in the queue
aQueue.push(t.root);
//console.log('aQueue is ', aQueue);

// Loop as long as there is anything in the queue
//let aSentinal = true;
while(aQueue.length != 0) {
   // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   let aNode = aQueue.shift();
   output.push(aNode.value);
  // console.log('output is ', output);
   // If there is a left property on the node dequeued - add it to the queue
   if(aNode.left != null) aQueue.push(aNode.left);
   // If there is a right property on the node dequeued - add it to the queue
   if(aNode.right != null) aQueue.push(aNode.right);
   //console.log('aQueue is ', aQueue);
   //aSentinal = false;
} // end while
// Return the variable that stores the values
console.log('output is ', output);
return output;

















