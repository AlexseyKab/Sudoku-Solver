function legal(solution, i, j, val) {
  for (var c = 0; c < 9; c++) {
    if (solution[i][c] === val) {
      return false;
    }
  }
  
  for (var r = 0; r < 9; r++) {
    if (solution[r][j] === val) {
      return false;
    }
  }

  var r = Math.floor(i / 3) * 3;
  var c = Math.floor(j / 3) * 3;  
  for (var k = r; k < r + 3;  k++) {
    for (var l = c; l < c + 3; l++) {
      if (val === solution[k][l]) {
        return false;
      }
    }
  }  
  return true;
}

function sudokuSolver(solution, i, j) {
  console.log('i:' + i + ',j:' + j);
  if (i === 9) {
    i = 0;
    j = j + 1;
    if (j === 9) {
      return true;  
    }
  }
    
  if (solution[i][j] > 0) {
    return sudokuSolver(solution, i+1, j);
  }

  
  for (var val = 1; val <= 9; val++) {    
    if (legal(solution, i, j, val)) {
      solution[i][j] = val;
      if (sudokuSolver(solution, i+1, j)) {
        return true;
      } 
    }  
  }
  solution[i][j] = 0;
  return false;
}

function sudoku(puzzle) {
  var solution = JSON.parse(JSON.stringify(puzzle));
  if (sudokuSolver(solution, 0, 0)) {
    return solution;
  }
  return null;
};