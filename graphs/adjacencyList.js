class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(v) {
        if(this.adjacencyList[v]) return;
        this.adjacencyList[v] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((edge) => {
            return edge != v2
        });
        console.log(this.adjacencyList);
    }

    removeVertex(v) {
        const vertexes = Object.keys(this.adjacencyList);
        for(let vertex of vertexes) {
            this.removeEdge(vertex, v);
        }
        delete this.adjacencyList[v];
    }

    DFS_Recursive() {
        const vertexKeys = Object.keys(this.adjacencyList);
        const vertexKey = vertexKeys[vertexKeys.length - 1]
        const visited = {}, data = [], currentVertex = vertexKey;
        const adjacencyList = this.adjacencyList;
        const traverse = (vertex) => {
            if(!vertex) return;
            visited[vertex] = true;
            data.push(vertex);
            for(let v of adjacencyList[vertex]) {
                if(!(v in visited)) traverse(v)
            }
        }
        traverse(vertexKey)
        console.log(visited, data);
        return data;
    }

    DFS_Iteration() {
        
    }
}

const graph = new Graph();
graph.addVertex('FCT');
graph.addVertex('ONDO');
graph.addVertex('OSUN');
graph.addVertex('EDO');
graph.addVertex('KOGI');
graph.addVertex('LAGOS');
graph.addVertex('OYO');
graph.addVertex('DOUALA');

graph.addEdge('FCT', 'KOGI');
graph.addEdge('KOGI', 'FCT');
graph.addEdge('KOGI', 'EDO');
graph.addEdge('EDO', 'KOGI');
graph.addEdge('KOGI', 'ONDO');
graph.addEdge('ONDO', 'KOGI');
graph.addEdge('EDO', 'ONDO');
graph.addEdge('ONDO', 'EDO');
graph.addEdge('ONDO', 'OSUN');
graph.addEdge('OSUN', 'ONDO');
graph.addEdge('OSUN', 'OYO');
graph.addEdge('OYO', 'OSUN');
graph.addEdge('OYO', 'LAGOS');
graph.addEdge('LAGOS', 'OYO');
graph.addEdge('ONDO', 'LAGOS');
graph.addEdge('FCT', 'OSUN');
graph.addEdge('FCT', 'DOUALA');
graph.addEdge('LAGOS', 'DOUALA');
graph.addEdge('DOUALA', 'OSUN');
graph.removeEdge('FCT', 'OSUN');
graph.removeVertex('DOUALA');
console.log(graph);
graph.DFS_Recursive();