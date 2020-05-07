class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
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
        // Pop from the anArray property so that you cna return it at the end
        // Have the new root "sink down" to the correct spot
            // Your parent index starts at 0
            // Find the index of the left child: (2 * index) +1 (make sure it is not out of bounds)
            // Finid the index of the right child: (2 * index) + 1 (make sure...)
            // If the left or right element is greater, swap...if both are larger swap with the largest one
            // The child index you swapped to now becomes the new parent index
            // Keep looping and swapping until neither child is larger then the parent

    }
    
}    // end BinaryHeap()