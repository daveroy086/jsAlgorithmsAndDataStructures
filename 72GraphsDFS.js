class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    depthFirstSearch(start){
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
    }// end dFS()

}


/*
//Instructions:
Implement the following method on the Graph class:

depthFirstSearch - this function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. The test cases should accommodate this.
*/

//Test:
var graph = new Graph();
    
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
    
graph.addEdge('S','P');
graph.addEdge('S','U');
graph.addEdge('P','X');
graph.addEdge('U','X');    
graph.addEdge('P','Q');
graph.addEdge('U','V');
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
graph.addEdge('Q','R');
graph.addEdge('Y','R');
graph.addEdge('Y','W');
graph.addEdge('V','W');
graph.addEdge('R','T');
graph.addEdge('W','T');

console.log(graph.depthFirstSearch('S'));
    
/**
* results:
*
* ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
* ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
*
**/