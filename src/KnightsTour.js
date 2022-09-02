const { default: ChessSquare } = require("./ChessSquare");

const KnightsTour = (x, y, N) => {
  const origin = ChessSquare(x, y);

  // initialize a 2D array to keep track of visited vertexes & mark them false
  const n = origin.data.boardSize;
  const visited = [...Array(n)].map(() => Array(n).fill(false));

  if (N) origin.updateBoardSize(N);
  if (!origin.checkMove()) return null;

  // check if every ChessSquare has been visited
  const everySquareVisited = (board) => {
    return board.every((column) => column.every((square) => square));
  };

  // create a shallow copy of the visited array to keep track of each path's progress
  const copyVisitedArray = (array) => {
    return array.map((column) => column.slice());
  };

  return {
    everySquareVisited,
    copyVisitedArray,
  };
};
