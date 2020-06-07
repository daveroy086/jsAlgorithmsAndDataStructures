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
        let stack = [];
        let list = [];
        let visited = {};
        stack.push(start);
        visited[start] = true;
        while(stack.length != 0) {
            let vertex = stack.pop();
            list.push(vertex);
            this.adjacencyList[vertex].forEach(elem => {
                if(!visited[elem]){
                    visited[elem] = true;
                    stack.push(elem);
                }
            });
            if(!visited[vertex]){
                visited[vertex] = "true";
                stack.push(this.adjcencyList[vertex]);
            }// end if
        }// end while
        return list;
    }// end iterativeDFT()

    breadthFirstTraversal(vertex) {
        // pseudocode:
        // This function should accept a starting vertex
        // Create a queue ( use an array), and place the starting vertex in it
        let queue = [vertex];
        // Create an array to store the nodes visited
        let list = [];
        // Create an object to store the nodes visited 
        let visited = {};
        // Mark the starting vertex as visited
        visited[vertex] = true;
        // Loop as long as there is anything in the queue (while)
        while(queue.length) {
            // Remove the first vertex from the queue and push it into the array that stores the nodes visited (list)
            let newVertex = queue.shift();
            list.push(newVertex);
            // Loop over each vertex in the adjacency list for the vertex you are visiting
            // If it is not inside the object that stores the nodes visited, mark it as visited and enqueue that vertex
            this.adjacencyList[newVertex].forEach(e => {
                // you can reverse the order of the output array by doing:
                // 'this.adjacencyList[newVertex].slice().reverse().forEach(e => {'
                // DO NOT lose this comment
                // use this for review of the course:
                    // https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/
                // step thru the code for this section, at least
                if(!visited[e]){
                    visited[e] = true;
                    queue.push(e);
                }
            });
        } // end while
        // Once you have finished looping, return the array of visited nodes
        // he says this is very similar to iterativeDFT above
        return list;
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

console.log(g.iterativeDFT("A"));//[ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.breadthFirstTraversal("A"));//[ 'A', 'B', 'C', 'D', 'E', 'F' ]