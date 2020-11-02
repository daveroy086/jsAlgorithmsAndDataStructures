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

                                // I need to use line comments in the code I'm developing so
                                // I can block comment large sections out for testing

    // I need to step thru this with a new smaller graph and see how every all the values move from object, to object, to array?, to queue
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];    // to return at end
        let smallest;
      
        //build up initial state
        for(let vertex in this.adjacencyList) {    // add distances to the distance object and 
                                                   // adjacent nodes to the priority queue
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;    // add each vertex in the adjacency list to the
                                        // previous array with a value of null.
        }    // end for vertex

        // Start looping as long as there is anything in the priority queue
        while(nodes.values.length) {
           // Dequeue a vertex from the priority queue 
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // If that vertex is the same as the ending vertex - we are done!
                // build up path to return at end
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous(smalest);
                }
            }
            if(smallest || distances[smallest] !==  Infinity) {
                // once I have this working try rewriting this without all the new var names 
                // to see if it's clearer
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                        //finds next neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                        // candidate is possible new distance to nextNode
                        //candidate(the possible new shortest path to the neighboring node) = 
                            //distances[smallest](the known shortest distance to the current node) + 
                                // nextNode.weight (the distance to the neighboring node)
                    let nextNeighbor = distances[nextNode.node];   
                     // he created a new var to make the code in the if below clearer...does it??
                    if(candidate < distances[nextNeighbor]) {
                        // if we have a new smallest distance to nextNode
                        distances[nextNeighbor] = candidate;
                        // update distances array wih new smallest distance
                        previous[nextNeighbor] = smallest;
                            // update previous - how we got to neighbor
                        nodes.enqueue(nextNeighbor, candidate);
                            // enqueue nextNeighbor in priority queue with new priority
                    }                        
                }    // end for neighbor
                
            }
        }
        return path.concat(smallest).reverse();    // reverse path
      
        // Otherwise loop through each value in the adjacency list at that vertex
        // If that vertex is the same as the ending vertex - we are done!
            // Calculate the distance to that vertex from the starting vertex
            // if that distance is less than what is currently stored in our distances object
                // update the distances object with the new lower distance
                // update the previous object to contain that vertex
                // enqueue the vertex with the total distance from the start node
      
    }    // end dijkstra
 */
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
console.log(g.adjacencyList);

//get all his original pseudocode:
        // Start looping as long as there is anything in the priority queue
        // Otherwise loop through each value in the adjacency list at that vertex
            // Calculate the distance to that vertex from the starting vertex
            // if that distance is less than what is currently stored in our distances object
                // update the distances object with the new lower distance
                // update the previous object to contain that vertex
                // enqueue the vertex with the total distance from the start node