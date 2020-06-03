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

    recursiveDFS(start) {
        let that = this;
        // pseudocode:
        // The function should accept a starting node
        // Create a list to store the end result, to be returned at the end
        let toReturn = [];
        // Create an object to store visited vertices
        let visited = {};
        // Create a helper function that accepts a vertex
        function helper(vertex) {    // The helper function should return early (empty?) if the vertex is 
                               //empty (has been visited?)
             if(!vertex) return null;    //base case
            // The helper function should place the vertex it accepts into the visited object and push that vertex into the results array
            //let that = this;
            visited[vertex] = "true";
            console.log("visited is ", visited);
            toReturn.push(vertex);
            console.log("toReturn is ", toReturn);
            // Loop over all of the values in the adjacencyList for that vertex
            that.adjacencyList[vertex].forEach(function(anotherElemOfAL){
                if(!toReturn.includes(anotherElemOfAL)) helper(anotherElemOfAL);
            });
            // If any of those values have not been visited, recursivley invoke the helper function with that vertex
        }    // end helper()
        helper(start);
        return toReturn;
    }    // end recursiveDFS()
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
//say my name