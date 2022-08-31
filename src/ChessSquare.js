const ChessSquare = (x, y, n) => {
  //  object for storing a chessSquare's data
  const data = {
    xPosition: x,
    yPosition: y,
    distance: 0,
  };

  // all possible knight moves
  const KnightCombos = [
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
  ];

  // utility function to check whether or not the move is inside the game board
  const checkMove = (X = x, Y = y, N = n) => {
    if (X >= 1 && X <= N && Y >= 1 && Y <= N) return true;
    else return false;
  };

  // fill it with objects - cells with x and y coords - each of which is marked not visited

  return {
    data,
    checkMove,
  };
};

export default ChessSquare;
