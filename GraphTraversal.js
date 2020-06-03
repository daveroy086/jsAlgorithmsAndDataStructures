class Graph {    // this is an undirected, unweughted graph
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex1);
    }

    removeVertex(v) {
        var self = this;
        this.adjacencyList[v].forEach(function(anElemOfAL){
            self.removeEdge(v, anElemOfAL);
        });
        delete this.adjacencyList[v];
    }

    recursiveDFT(start) {
        let that = this;
        let toReturn = [];
        let visited = {};
        function helper(vertex) {
            if(!vertex) return null;    //base case
            visited[vertex] = "true";
            toReturn.push(vertex);
            that.adjacencyList[vertex].forEach(function(anotherElemOfAL){
                if(!toReturn.includes(anotherElemOfAL)) helper(anotherElemOfAL);
            });
        }    // end helper()
        helper(start);
        return toReturn;
    }    // end recursiveDFS()

    iterativeDFT(start) {
        // pseudocode:
        // The function should accept a staring node
        // Create a stack to help us keep track of vertices (use a list/array)
        // Create a list to store the end result, to be returned at the very end
        // Create an object to store the visited vertices
        // Add the starting vertex to the stack, and mark it visited
        // While the stack has something in it:
            // Pop the bnext vertex from the stack
            // If that vertex hasn't been visited yet
                // Mark it as visited
                // Add it to the result list
                // Push all of it's neighbors into the stack
        // return the result array
    }
}    // end Graph

let g = new Graph();

// for testing recursiveDFS():
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
console.log(g);
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log("Now, g is ", g);

console.log(g.recursiveDFS("A"));//[ 'A', 'B', 'D', 'E', 'C', 'F' ]