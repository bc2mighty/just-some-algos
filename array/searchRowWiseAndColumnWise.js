function searchRowAndColumnWise(matrix, x) {
    let row = 0, column = 0;
    const indexFound = [];
    while(row < matrix.length) {
        if(column === matrix.length) {
            if(row === matrix.length - 1) break;
            row++;
            column = 0;
        }
        if(matrix[row][column] === x) {
            indexFound[0] = row;
            indexFound[1] = column;
        }
        column++;
    }
    if(!indexFound.length) return 'Element not found';
    return indexFound;
}

const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50],
]
console.log(searchRowAndColumnWise(matrix, 29));