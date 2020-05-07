class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
    }

    insert(element){
    this.anArray.push(element);
    let elementIndex = this.anArray.length - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    while(this.anArray[parentIndex] < this.anArray[elementIndex]) {
        let temp = this.anArray[parentIndex];
        this.anArray[parentIndex] = this.anArray[elementIndex];
        this.anArray[elementIndex] = temp;
        elementIndex = parentIndex;
        parentIndex = Math.floor((elementIndex - 1) / 2);
        }    // end while
        return this.anArray;
    }    // end insert()
    
}    // end BinaryHeap()