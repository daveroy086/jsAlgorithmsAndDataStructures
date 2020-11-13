class WeightedGraph {    // this is an undirected graph
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {    /* adds the empty adjacencyList for the vertex named 'vertex'
                              to the graph adjacencyList object */
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }    // end addVertex

    addEdge(vertex1, vertex2, weight) {    /*add each vertex and the connecting edges weight 
                                             to the other vertices adjacencyList*/
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }    //end addEdge

}    // end Graph

var g = new WeightedGraph;

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "C", 7);
console.log(g.adjacencyList);

/*
//from original unweighted,undirected graph code:

    removeEdge(vertex1, vertex2) {    // remove each vertex from the other vertices adjencyList
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
*/