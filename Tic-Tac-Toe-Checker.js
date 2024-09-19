let incompleteGame = [
[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]

let xWin = [
[1, 2, 1],
[0, 1, 2],
[2, 1, 1]]

let oWin = [
[1, 2, 2],
[1, 1, 2],
[2, 1, 2]]

let catsGame = [
[1, 2, 1],
[1, 2, 2],
[2, 1, 1]]

//the function shoould take in an array, return -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//1 if "X" won,
//2 if "O" won,
//0 if it's a cat's game (i.e. a draw).

function isSolved(board) {
  
  //check for a horizontal win
  for(i = 0; i < 3; i++){
    //check if the i row contains matching 1's
    if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][0] === 1){
      return 1
    }
    //check if the i row contains matching 2's
    if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][0] === 2){
      return 2
    }
  }

 //check for a vertical win
 for(i = 0; i < 3; i++){
  //check if the i column contains matching 1's
  if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[0][i] === 1){
    return 1
  }
  //check if the i column contains matching 2's
  if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[0][i] === 2){
    return 2
  }
}

//check for a diagonal win
for(i = 0; i < 3; i++){
  //check the descending diagonalfor matching 1's
  if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[0][0] === 1){
    return 1
  }
  //check the ascending diagonalfor matching 1's
  else{
    if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && board[0][2] === 1){
      return 1
    }
  }
  if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[0][0] === 2){
    return 2
  }
  //check the ascending diagonalfor matching 1's
  else{
    if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && board[0][2] === 2){
      return 2
    }
  }
}

//check to see if there are any empty spots
for(i = 0; i < 3; i++){
  
  for(j = 0; j < 3; j++)
  {
    if(board[i][j] === 0){
      return -1
    }
  }
}
//if theres no horizontal wins, no vertical wins, no diagonal wins, and no empty spots, then it's a draw
  return 0
  }