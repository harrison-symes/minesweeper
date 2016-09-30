document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board  =  { 

  cells: [
    {
      row: 0,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    },  
    {
      row: 0,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 0,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 1,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 1,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    },  
    {
      row: 1,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 2,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 2,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },  
    {
      row: 2,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    }
  ]  
 
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener('rightclick', checkForWin)
  document.addEventListener('click', checkForWin)
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

  lib.initBoard()
  
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true) {
      if (!board.cells[i].isMarked) {
          console.log('mine at' + board.cells[i].row + ',' + board.cells[i].col + ' unmarked')
          return
      } 
    }
    else if (board.cells[i].hidden) {
        console.log('cell at ' + board.cells[i].row + ',' + board.cells[i].row + ' is hidden')
      return
    }
  
  }
  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getsurrounding`: 
//
//   var surrounding = lib.getsurrounding(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++
    }
  }
  return count
}

