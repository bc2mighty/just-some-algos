function numIslands(grid) {
    let islandCount = 0;
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[i].length;j++){
            if(grid[i][j] == 1) {
                islandCount++
                dfs(grid, parseInt(i), parseInt(j))
            }
            
        }
    }

    function dfs(grid, row, col) {
        if(grid[row] == undefined || grid[row][col] == undefined || grid[row][col] == 0) return
        grid[row][col] = 0
        dfs(grid, row + 1, col)
        dfs(grid, row - 1, col)
        dfs(grid, row, col + 1)
        dfs(grid, row, col - 1)
    }
    console.log(islandCount)
}

numIslands([
    [1,1,0,0,0,],
    [1,1,0,0,0,],
    [0,0,1,0,0],
    [0,0,0,1,1]
])