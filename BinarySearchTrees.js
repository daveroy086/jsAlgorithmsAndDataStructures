// pseudocode
    // From CS:
        // create a new node
        // Starting at the root
            // Check if there is a root, if not - the root now becomes the new node
            // If there is a root, check if the value of the new node is greater than or less than the value of the root
            //If it is greater:
                // Check to see if there is a node to the right
                    // If there is, move to that node and repeat these steps
                    // If there is not, add that node as the right property
             //If it is less:
                // Check to see if there is a node to the left
                    // If there is, move to that node and repeat these steps 
                    // If there is not, add that node as the left property
    
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
    insert(value) {    // With my additions:
        let newNode = new Node(value);    // create a new node// Starting at the root
            // I could set a flag here for my while conditional but it's not necessary since after i insert my node I will 'return' out of the loop...saves lines of code below
                if(this.root === null) {    // Check if there is a root, if not -
                    this.root = newNode;    // the root now becomes the new node
                    return this;
                } else {    // If there is a root
                    let current = this.root;
                    while(true){    // See the comment above about flags
                     if(value < current.value){    // check if the value of the new node is less than the value of the root...If it is less:
                         if(current.left === null){    // Check to see if there is a node to the left
                                                       // !current.left would work
                             current.left = newNode;    // add that node as the left property
                             return this;              
                         } else {    // If there is not
                            current = current.left;    // If there is move to that node...  repeat these steps
                         }    // end if current.left
                     } else {    
                         if(value > current.value) {    //If it is greater then:
                             if(current.right === null) {    // Check to see if there is a node to the right
                                 current.right = newNode;    // add that node as the right property
                                 return this;    // repeat these steps
                             } else {    // If there is not
                                 current.right = current;    // If there is move to that node
                             }    // end if
                         }    //end if(value>...
                    }    //end if-else value > 
                    } //end while
            }//end if-else this.root
         return this;
    }//end insert()
    
}//end BinarySearchTree
            

let t = new BinarySearchTree();
t.root = new Node(10);
t.root.right = newNode(15);
t.root.left = new Node(7);
t.root.left.right = new Node(9);
