import ChessSquare from "./ChessSquare";

const KnightsTour = (x, y, N) => {
  const origin = ChessSquare(x, y);
  if (N) origin.updateBoardSize(N);
  if (!origin.checkMove()) return null;

  // initialize a 2D array to keep track of visited vertexes & mark them false
  const n = origin.data.boardSize;
  const visited = [...Array(n)].map(() => Array(n).fill(false));

  // function to check if every ChessSquare has been visited
  const everySquareVisited = (board) => {
    return board.every((column) => column.every((square) => square));
  };

  // create a shallow copy of the visited array to keep track of each path's progress
  const copyOfVisited = (board) => board.map((column) => column.slice());

  // find Knights Tour from any [x, y] coord on a board of N x N size
  // using backtracking-based recursion to build the correct path solution
  const findPath = (xCoord, yCoord, board, boardSize) => {
    const current = ChessSquare(xCoord, yCoord);
    current.updateBoardSize(boardSize);
    const boardCopy = copyOfVisited(board);
    // mark the starting coords as visited
    boardCopy[xCoord - 1][yCoord - 1] = true;
    // get all possible moves for the Knight at current position
    const moves = current.possibleMoves();
    const boardMoves = [];
    moves.forEach((move) => {
      if (boardCopy[move[0] - 1][move[1] - 1] === false) boardMoves.push(move);
    });
    console.log(boardMoves, boardCopy);
    // base case - if there are no more moves available to Knight, check board for completion
    if (boardMoves.length === 0) {
      // if the board is complete, return the successful path
      if (everySquareVisited(boardCopy)) return [[x, y]];
      // if the board is not complete, move on to the next branch
      else return false;
      // otherwise recursively call function to find each possible move for next boardMove
    } else {
      for (let [nextX, nextY] of boardMoves) {
        let path = findPath(nextX, nextY, boardCopy, boardSize);
        // if path equates to false, the loop will continue on to the next move
        if (path) {
          // otherwise, we have reached a successful solution
          // add the current coords to the path and return the path
          path.push([nextX, nextY]);
          return path;
        }
      }
      return false;
    }
  };

  console.log(findPath(x, y, visited, N || 8));
};

export default KnightsTour;
