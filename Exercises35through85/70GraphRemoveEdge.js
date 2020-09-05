class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {    /* adds the empty adjacencyList for the vertex named 'vertex'
                              to the graph adjacencyList object */
        this.adjacencyList[vertex] = [];
    }    // end addVertex

    addEdge(vertex1, vertex2) {    /*add each vertex to the other vertices adjacencyList*/
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }    // end addEdge

    removeEdge(vertex1, vertex2){    /* remove each vertex from the other vertices adjencyList*/
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex1);
    }    // end removeEdge
}

/*
// Instructions:
Implement the following methods on the Graph class, addEdge and addVertex have been implemented for you.

removeEdge - this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.
*/

var graph = new Graph();
    
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
    
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
    
graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');
    
console.log(graph.adjacencyList['A']); //  // contains 'C'
console.log(graph.adjacencyList['B']); // contains 'D'
console.log(graph.adjacencyList['C']); // contains 'A'
console.log(graph.adjacencyList['D']); // contains 'B'