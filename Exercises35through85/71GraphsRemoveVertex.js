class Graph {    // this is an undirected, unweighted graph
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {    /* adds the empty adjacencyList for the vertex named 'vertex'
                              to the graph adjacencyList object */
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }    // end addVertex

    addEdge(vertex1, vertex2) {    /*add each vertex to the other vertices adjacencyList*/
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        /*Go see the comment in Exercises35through85/73GraphAddEdge.js re testing output*/
    }    //end addEdge

    removeEdge(vertex1, vertex2) {    /* remove each vertex from the other vertices adjencyList*/
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex1);
    }    // end removeEdge

    removeVertex(v) {
        var self = this;
        this.adjacencyList[v].forEach(function(anElemOfAL){
            self.removeEdge(v, anElemOfAL);
        });
        delete this.adjacencyList[v];
    }
}    // end Graph

/*
//Instructions:
Implement the following methods on the Graph class, removeEdge has been implemented for you.

removeVertex - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.
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
     
    graph.removeVertex('C');
    graph.removeVertex('B');
     
    graph.adjacencyList['A']; // still exists
    graph.adjacencyList['D']; // still exists