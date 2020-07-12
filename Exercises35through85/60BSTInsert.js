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

    includes(value1) {
        if(this.root == null) {
           return false;
        } else {
            let current = this.root;
            while(current){

                if(current.value == value1) return true;

                if(value1 < current.value){
                    if(current.left == null) return false;
                    if(current.left.value == value1) {
                        return true;
                    } else {
                        current = current.left;
                    }
                }

                if(current.value < value1){
                    if(current.right == null) return false;
                    if(current.right.value == value1) {
                        return true;
                    } else {
                        current = current.right;
                    }
                }

            } // end while
        } // end else
    }    // ends includes    
}//end BinarySearchTree