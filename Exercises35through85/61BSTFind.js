class Node {    //class Node, class BinarySearchTree and find() are CS's code
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
  }  //  end insert

    find(value1) {    // search tree for node with value1
        if(this.root == null) {
           return undefined;
        } else {
            let current = this.root;
            while(current){
                if(current.value == value1) {
                    return current;
                }
                if(value1 < current.value){
                    if(current.left == null) return undefined;
                    if(current.left.value == value1) {
                        return current;
                    } else {
                        current = current.left;
                    }
                }
                if(current.value < value1){
                    if(current.right == null) return undefined;
                    if(current.right.value == value1) {
                        return current;
                    } else {
                        current = current.right;
                    }
                }
            }    // end while
        }    // end else
    }    // ends find

}    // BinarySearchTree