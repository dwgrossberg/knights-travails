import ChessSquare from "./ChessSquare";

// Return the minimum number of steps required for Knight to traverse from start to end
const KnightsTravails = (start, end, N) => {
  // create nodes from starting and ending coords
  const origin = ChessSquare(start[0], start[1]);
  const destination = ChessSquare(end[0], end[1]);

  origin.setParent("HEAD");

  // if n parameter if present, change the size of origin & destination ChessSquares
  if (N) {
    origin.updateBoardSize(N);
    destination.updateBoardSize(N);
  }

  // if start or end is not within the game board return null
  if (!origin.checkMove() || !destination.checkMove()) return null;

  // start a queue and insert the beginning vertex as a ChessSquare
  const queue = [origin];
  // initialize a 2D array to keep track of visited vertexes & mark them false
  const n = origin.data.boardSize;
  const visited = [...Array(n)].map(() => Array(n).fill(false));
  // mark starting coordinates as visited (true)
  visited[start[0] - 1][start[1] - 1] = true;

  // loop while queue is not empty
  while (queue.length !== 0) {
    // remove first element from the queue (current)
    const current = queue.shift();
    // base case - if current coords === destination coords, return current distance
    if (
      current.data.xPosition === destination.data.xPosition &&
      current.data.yPosition === destination.data.yPosition
    ) {
      // get path for shortest route
      // start a path var to save travail path
      destination.setParent(current.data.parent);
      const path = [destination];
      while (!path.includes(origin)) {
        const prevSquare = path[0].getParent();
        path.unshift(prevSquare);
      }
      const returnPath = [];
      path.forEach((move) =>
        returnPath.push([move.data.xPosition, move.data.yPosition])
      );
      return [current.data.dis, returnPath];
    }
    // forEach possible space that the Knight can move to from its current square
    current.possibleMoves().forEach((move) => {
      // if the square has not been visited before
      if (!visited[move[0] - 1][move[1] - 1]) {
        // mark the square as visited (true)
        visited[move[0] - 1][move[1] - 1] = true;
        // push that square to the queue with an incremented distance of + 1,
        const newSquare = ChessSquare(move[0], move[1], current.data.dis + 1);
        // changing the size of each ChessSquare if n parameter is present
        if (N) newSquare.updateBoardSize(N);
        // set parent pointer to current node
        newSquare.setParent(current);
        queue.push(newSquare);
      }
    });
  }
  // otherwise not possible - return infinity
  return Infinity;
};

export default KnightsTravails;
