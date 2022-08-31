const ChessSquare = (x, y, n) => {
  //  object for storing a chessSquare's data
  const data = {
    xPosition: x,
    yPosition: y,
    distance: 0,
    precursor: null,
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

  // utility function to check whether or not the move is inside the game board
  const checkMove = (X = x, Y = y, N = n) => {
    if (X >= 1 && X <= N && Y >= 1 && Y <= N) return true;
    else return false;
  };

  // create all valid Knight moves (at each position)
  const possibleMoves = (X = x, Y = y) => {
    const newMoves = KNIGHT_Combos.map((offset) => [
      X + offset[0],
      Y + offset[1],
    ]);
    // remove duplicate values
    const removeDuplicates = new Set(
      newMoves.map((move) => JSON.stringify(move))
    );
    // re-map the values to an array & check that they are within the Board bounds
    return Array.from(removeDuplicates)
      .map((move) => JSON.parse(move))
      .filter((x) => checkMove(x[0], x[1]));
  };

  return {
    data,
    checkMove,
    possibleMoves,
  };
};

export default ChessSquare;
