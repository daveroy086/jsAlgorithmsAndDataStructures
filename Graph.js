class Graph {    // tis wll be an undirected graph
    constructor() {
        this.adjacencyList = {"Tokyo" : [],
                              "Dallas": [],
                              "Aspen": [],
                              "Atlanta": [],
                              "LA": [],
                              "JFK": []};
    }

    addVertex(vertex) {
        // pseudocode:
        // write a method called addVertex, which accepts a name of a vertex
        // It should add a key to the adjacency list with the name of the vertex and set it's value to be an empty array
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        // the if prevents you from overwritinvertexsg an existing vertex...what 'else' could you add too have both ...can you have both
    }

    addEdge(vertex1, vertex2) {
        // pseudocode:
        // this function should accept two vertices named vertex1 and vertex2
            // loop thru adjacencyList
           // for(let i = 0; i < Object.keys(this.adjacencyList).length; i++) {
        // The function should find in the adjacencyList the key of vertex1 and push vertex2 to the array
            // if adjacencyList.key == vertex1 adjacencyList.vertex1 = vertex2
           // if(this.adjacencyList[])
        // The function should find in the adjacencyList the key of vertex2 and push vertex1 to the array
            // if adjacencyList.key == vertex2 adjacencyList.vertex1 = vertex1
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        // we're not worried about error handling / invalid vertices at this time
    }

    removeEdge(vertex1, vertex2) {
        // pseudocode:
        // The function should reasssign the key of vertex1 to be an arrray that does not contain vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex2);
        // The function should reasssign the key of vertex2 to be an arrray that does not contain vertex1
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(anElementOfAdjacencyList => anElementOfAdjacencyList != vertex1);
    }

    removeVertex(v) {
        // pseudocode:
        // The function accepts the vertex to be removed
        // The function should loop as long as there are any vertices in it's adjacencyList
        // Inside of the loop call removeEdge() with the vertex we are removing and and any vertices in it's adjacencyList
        // delete the key for that vertex from the adjacencyList 
    }
}

let g = new Graph();
// test addVertex()
// g.addVertex("Tokyo");
// console.log(g);

// test addEdge():
console.log("The graph is ", g);
g.addEdge("Tokyo", "Dallas");
console.log("The graph is ", g);
g.addEdge("Dallas", "Aspen");
console.log("The graph is ", g);
g.

//test removeEdge():
console.log("The graph is ", g);
g.removeEdge("Tokyo", "Dallas");
console.log("The graph is ", g);
g.removeEdge("Dallas", "Aspen");
console.log("The graph is ", g);