import ChessSquare from "./ChessSquare";

// find Knights Tour from any [x, y] coord on a board of N x N size
// using Warnsdorff's heuristics + backtracking-based recursion to build the correct path solution
const KnightsTourWarnsdorff = (x, y, N) => {
  // Original Knights Tour algorithm
  const origin = ChessSquare(x, y);
  if (N) origin.updateBoardSize(N);
  if (!origin.checkMove()) return null;
  const n = origin.data.boardSize;
  const visited = [...Array(n)].map(() => Array(n).fill(false));
  const everySquareVisited = (board) => {
    return board.every((column) => column.every((square) => square));
  };
  const copyOfVisited = (board) => board.map((column) => column.slice());
  const findPath = (xCoord, yCoord, board, boardSize) => {
    const current = ChessSquare(xCoord, yCoord);
    current.updateBoardSize(boardSize);
    const boardCopy = copyOfVisited(board);
    boardCopy[xCoord - 1][yCoord - 1] = true;
    let moves = current.possibleMoves();
    const getBoardMoves = (array) => {
      console.log(array);
      const boardMoves = [];
      array.forEach((move) => {
        if (boardCopy[move[0] - 1][move[1] - 1] === false)
          boardMoves.push(move);
      });
      return boardMoves;
    };
    if (getBoardMoves(moves).length === 0) {
      if (everySquareVisited(boardCopy)) return [[x, y]];
      else return false;
    } else {
      // Tweaking the Knights Tour backtracking algorithm to follow Warnsdorff's heuristics:
      // "When looking at the next possible moves, prefer the next move with the fewest possible options"
      const warnsdorff = (KnightMoves) => {
        const weightedMoves = [];
        // find the number of possible paths for each KnightMove and return them in order from fewest to most
        for (const [x, y] of KnightMoves) {
          const currentMoves = getBoardMoves(ChessSquare(x, y).possibleMoves());
          const weight = currentMoves.length;
          weightedMoves.push({ move: [x, y], weight });
        }
        return weightedMoves
          .sort((a, b) => b.weight - a.weight)
          .map((weighted) => weighted.move);
      };
      moves = warnsdorff(moves);
      for (let [nextX, nextY] of moves) {
        let path = findPath(nextX, nextY, boardCopy, boardSize);
        if (path) {
          path.push([nextX, nextY]);
          return path;
        }
      }
      return false;
    }
  };
  return findPath(x, y, visited, N || 8);
};
export default KnightsTourWarnsdorff;
