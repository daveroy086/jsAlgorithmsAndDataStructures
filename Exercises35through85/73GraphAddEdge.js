class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {    /* adds the empty adjacencyList for the vertex named 'vertex'
                              to the graph adjacencyList object */
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {    /*add each vertex to the other vertices adjacencyList*/
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }    //end addEdge

}

/*
//Instructions:
Implement the following methods on the Graph class - addVertex has been implemented for you

addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
*/

//Test:
var graph = new Graph();
    
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
    
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
    
console.log(graph.adjacencyList['A']); // contains both ('B', 'C')
console.log(graph.adjacencyList['B']); // contains both ('A', 'D')
console.log(graph.adjacencyList['C']); // contains both ('A', 'D')
console.log(graph.adjacencyList['D']); // contains both ('C', 'B') 
                                            /* the output in node was ('B', 'C') for the last one???
                                            Do I care*/