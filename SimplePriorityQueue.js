class SimplePriorityQueue {    // for dijkstra
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();        
    }   

    dequeue () {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

}    // end SimplePriorityQueue

/* 
//Test:
    // add this to the enqueue after the sort: console.log("Now, values is ", this.values);
var spq = new SimplePriorityQueue();
spq.enqueue(2, 6);
spq.enqueue(4, 5);
spq.enqueue(6, 4);
spq.enqueue(5, 3);
spq.enqueue(3, 2);
spq.enqueue(1, 1); */