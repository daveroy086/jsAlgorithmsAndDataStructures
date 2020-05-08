class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
    }

    swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    insert(element){    // inserts an element
    this.anArray.push(element);
    let elementIndex = this.anArray.length - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    while(this.anArray[parentIndex] < this.anArray[elementIndex]) {
        let temp = this.anArray[parentIndex];
        this.anArray[parentIndex] = this.anArray[elementIndex];
        this.anArray[elementIndex] = temp;
        elementIndex = parentIndex;
        parentIndex = Math.floor((elementIndex - 1) / 2);
        }   // end while
        return this.anArray;
    }    // end insert()
 
    remove() {
        // pseudocode:
        // Swap the first value in the anArray property with the last one
        this.swap(this.anArray, 0, this.anArray.length - 1);
        // Pop from the anArray property so that you can return it at the end
        let toReturn = this.anArray.pop();
        // Have the new root "sink down" to the correct spot
        // Your parent index starts at 0
        let parent = 0;    //the parent node index
        if(this.anArray[1]) {
            var left = 1;    // left child node index
            }
            // Find the index of the right child: (2 * index) + 1 (make sure...)
        if(this.anArray[2]) { 
            var right = 2;    // the right child node index
            }
        while((this.anArray[parent] < this.anArray[left]) ||
                  (this.anArray[parent] < this.anArray[right])) {
            // Find the index of the left child: (2 * index) +1 (make sure it is not out of bounds)
            if((parent * 2) + 1) {
                left = (2 * parent) + 1;    // left child node index
            }
            // Find the index of the right child: (2 * index) + 1 (make sure...)
            if((parent * 2) + 1) {
                right = (2 * parent) + 2;    // the right child node index
            }
            // If the left or right element is greater, swap...if both are larger swap with the largest one
            if((this.anArray[left] > this.anArray[parent]) &&
                    (this.anArray[left] > this.anArray[right])) {    // if left is larger then parent and sibling
                        this.swap(this.anArray, left, parent);
                        // The child index you swapped to now becomes the new parent index
                        parent = left;                          
            }
            if((this.anArray[right] > this.anArray[parent]) &&
                    (this.anArray[right] > this.anArray[left])) {
                        this.swap(this.anArray, right, parent);
                        parent = right;
            }   
            // Keep looping and swapping until neither child is larger then the parent
        } // end while()
        return toReturn;
    }// end remove()
    
}    // end BinaryHeap()

let bh = new BinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);
console.log(bh);
bh.remove();
console.log(bh);