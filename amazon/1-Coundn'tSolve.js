/*
Given a N∗M matrix of numbers from 1 to N∗M(each  number occurs only once),
find a path from top left to bottom right while moving right or down 
only. If we sort all values visited in this path it should be lexico-graphically smallest.

Example
4   2  9
10  15  8
1   18  7

4 2 15 18 7  -> 2 4 ...
4 10 1 18 7  -> 1 4 ...
Shortest path: 4 10 1 18 7 (after sorting 1 4 7 10 18)

function shortestPath(graph) {
    const visited = {};
    
    for(i = 0;i < graph.length;i++){
        for(let j = 0;j < graph[i].length;j++){
            if(!visited[graph[i][j]]) visited[graph[i][j]] = true
            let queue = []
            
            
            //if(graph[i][j+1]) queue.push(graph[i][j+1])
            //if(graph[i+ 1][j]) queue.push(graph[i+ 1][j])
            //qeueu.pop()
        }
    }
}

function dfs(graph, row, col) {
    if(row < 0 || row > graph.length - 1 || col > graph[row].length - 1) return
    queue.push(graph[row][ol])
    dfs(graph, row + 1, col)
    dfs(graph, row, col + 1)
    return
}
*/