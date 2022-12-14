const ChessSquare = (x, y, dis) => {
  //  object for storing a chessSquare's data
  const data = {
    xPosition: x,
    yPosition: y,
    boardSize: 8,
    dis: dis || 0,
    parent: null,
    board: null,
  };

  // all possible knight moves
  const KNIGHT_Combos = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // update the size of the game board
  const updateBoardSize = (n) => {
    data.boardSize = n;
  };

  const getParent = () => data.parent;
  const setParent = (newParent) => (data.parent = newParent);

  // utility function to check whether or not the move is inside the game board
  const checkMove = (
    X = data.xPosition,
    Y = data.yPosition,
    N = data.boardSize
  ) => {
    if (X >= 1 && X <= N && Y >= 1 && Y <= N) return true;
    else return false;
  };

  // create all valid Knight moves (at each position)
  const possibleMoves = () => {
    const newMoves = KNIGHT_Combos.map((offset) => [
      data.xPosition + offset[0],
      data.yPosition + offset[1],
    ]);
    // remove duplicate values
    const removeDuplicates = new Set(
      newMoves.map((move) => JSON.stringify(move))
    );
    // re-map the values to an array & check that they are within the game board bounds
    return Array.from(removeDuplicates)
      .map((move) => JSON.parse(move))
      .filter((x) => checkMove(x[0], x[1]));
  };

  const createBoard = () => {
    data.board = [...Array(data.boardSize)].map(() =>
      Array(data.boardSize).fill("")
    );
  };

  return {
    data,
    updateBoardSize,
    getParent,
    setParent,
    checkMove,
    possibleMoves,
    createBoard,
  };
};

export default ChessSquare;
