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

    // With my additions:
        // create a new node
        // Starting at the root
            // set a flag o false
            // while the flag is true
            // Check if there is a root, if not - the root now becomes the new node
            // If there is a root, check if the value of the new node is greater than or less than the value of the root
            //If it is greater:
                // Check to see if there is a node to the right
                    // If there is
                        // move to that node
                        // repeat these steps 
                    // If there is not
                        // add that node as the right property
                        // set the flag to true
                        //  break
             //If it is less:
                // Check to see if there is a node to the left
                    // If there is
                        // move to that node
                        // repeat these steps 
                    // If there is not
                        // add that node as the left property
                        // set the flag to true
                        // break
    
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
        
    // With my additions:
        // create a new node
        // Starting at the root
            // set a flag o false
            // while the flag is true
            // Check if there is a root, if not - the root now becomes the new node
            // If there is a root, check if the value of the new node is greater than or less than the value of the root
            //If it is greater:
                // Check to see if there is a node to the right
                    // If there is
                        // move to that node
                        // repeat these steps 
                    // If there is not
                        // add that node as the right property
                        // set the flag to true
                        //  break
             //If it is less:
                // Check to see if there is a node to the left
                    // If there is
                        // move to that node
                        // repeat these steps 
                    // If there is not
                        // add that node as the left property
                        // set the flag to true
                        // break
        let newNode = new Node(value);
        if(this.root == null) {
            this.root = newNode;
        } else {
            if(value)
        }
    }
}

let t = new BinarySearchTree();
t.root = new Node(10);
t.root.right = newNode(15);
t.root.left = new Node(7);
t.root.left.right = new Node(9);
