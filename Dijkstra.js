class PriorityQueue {    // for dijkstra
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

}    // end SimplePriorityQueue// Dijkstra

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

    dijkstra(start, finish) {    // The function should accept a starting and ending vertex
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
      
        //build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;    /* Add a value of 0 to the distances object for the distance of 
                                             start from itself. */
                nodes.enqueue(vertex, 0);    /* Add  a value of 0 for the priority of the starting
                                                node to the priority queue. */        
            } else {
                distances[vertex] = Infinity;    /* Add a value of Infinity to the distances object for
                                                    the distance of every other vertex from start
                                                  start from itself. */
                nodes.enqueue(vertex, Infinity);    /* Add a **********value  */
            }
            previous[vertex] = null;/* set each vertex in the adjacency list with a value of null. */
        }    // end for vertex
      
        // Start looping as long as there is anything in the priority queue
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
        }    // end
        // Dequeue a vertex from the priority queue
        // If that vertex is the same as the ending vertex - we are done!
        // Otherwise loop through each value in the adjacency list at that vertex
            // Calculate the distance to that vertex from the starting vertex
            // if that distance is less than what is currently stored in our distances object
                // update the distances object with the new lower distance
                // update the previous object to contain that vertex
                // enqueue the vertex with the total distance from the start node
      
    }    // end dijkstra

}    // end WeightedGraph

var g = new WeightedGraph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);