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