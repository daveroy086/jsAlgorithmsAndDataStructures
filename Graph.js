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
