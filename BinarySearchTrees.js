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

    includes(value) {
        
        if(this.root == null) {    // Check if there is a root
            return false;
        }

        let keepGoing = true;
        let current = this.root;
        
        while(current && keepGoing){
            if(current.value == value) {
                return true;
            }
            if(value < current.value) {
                if(current.left) {
                    current = current.left;
                } else {
                    return false;
                }

                if(current.right) {
                    current = current.right;
                } else {
                        return false;
                }
            }    // end if(value < current.value)
        }    //end while    
    }    // ends includes    
}//end BinarySearchTree
            

let t = new BinarySearchTree();
console.log(t.root);
//t.insert(4);
/*t.insert(2);
t.insert(6);
t.insert(1);
t.insert(3);
t.insert(5);
t.insert(7);
console.log(t.root); */


for(i = 0; i < 9; i++) {
    console.log(' i is ', i);
    if(t.includes(i)) {
        console.log('t includes ', i);
    } else {
        console.log('t doesn\'t include ', i);
    }
}