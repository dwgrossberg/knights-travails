import ChessSquare from "./ChessSquare";

const KnightsTravails = (start, end) => {
  // create nodes from starting and ending coords
  const origin = ChessSquare(...start);
  const destination = ChessSquare(...end);
  // if start or end is not within the game board return null
  if (!origin.checkMove() || !destination.checkMove()) return null;

  // start a queue and insert the beginning vertex as a ChessSquare
  // initialize a 2D array to mark all visited vertexes on the game board
  // mark the starting vertex as visited
  // while queue is not empty
  // shift() out first vertex
  // insert all possible Knight moves from vertex into the queue
};

export default KnightsTravails;
