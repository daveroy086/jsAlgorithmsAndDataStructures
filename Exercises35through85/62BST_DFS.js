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
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                      current.left = new Node(value);
                      return this;
                    } else {
                      current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                      current.right = new Node(value);
                      return this;
                    } else {
                      current = current.right;
                    }
                }
            }
        }
    }  // end insert

    depthFirstSearchPreOrder() {
                      
        let output = [];
        function helper(node) {
            output.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);

        return output;
    }  // end preOrder

    depthFirstSearchInOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            output.push(node.value);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);
        return output;      
    }    // end depthFirstSearchInOrder

    depthFirstSearchPostOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            output.push(node.value);
        } // end helper()
        helper(this.root);
        return output;
    }   // end depthFirstSearchPostOrder
} // end binarySearchTree