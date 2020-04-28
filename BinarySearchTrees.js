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
        if(this.root === null) {    // If no root yet
            this.root = newNode;
            return this;
        } else {    // If there is a root
            let current = this.root;
            while(true){    // Check value of newNode vs root
                if(value < current.value){    // If it's less
                    if(current.left != null){    // If current has left node
                        current = current.left;    // ...node move to that node              
                    } else {
                        current.left = newNode;    // else add newNode as the left property
                        return this;                            
                    }
                }

                if(value > current.value) {    //If it is greater:
                    if(current.right != null) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        return this;
                    }
                }

                if(value == current.value) {    // if tree has value
                    return undefined;
                }

            } //end while
        }//end if(this.root...
         return this;
    }//end insert()
    
}//end BinarySearchTree
            

let t = new BinarySearchTree();
console.log("Empty tree is ", t.root);
t.insert(4);
t.insert(2);
t.insert(6);
t.insert(1);
t.insert(3);
t.insert(5);
t.insert(7);
console.log(t.root);

