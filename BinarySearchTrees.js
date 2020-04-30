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
        // psuedocode
        if(this.root == null) {    // Check if there is a root..if not return false
            console.log('The root must be empty');
            return false;
        }

        let keepGoing = true;
        let current = this.root;
        
        while(current && keepGoing){    // Checks every node until it finds the value or returns false
            if(current.value == value) {    // If there is a root,
                                            // check if the value of the new node
                                            // is the value we are looking for.
                return true;}    // If it is return true
            if(value < current.value) {    // If not check to see if the value is 
                                             //greater than or less than the value of the root
                // If it is less, go left:
                if(current.left) {    // If there is move to that node and repeat these steps
                    current = current.left;
                    console.log('current is', current);
                } else {
                    return false;}    // If there is not a node there return false}    // end if(this.root.value < value)
                // If it is greater, go right:
                if(current.right) {
                    current = current.right;    // If there is move to that node and repeat these steps
                    console.log('current (right) is', current);
                } else {
                        return false;    // If there is not a node there return false
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