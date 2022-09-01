import ChessSquare from "./ChessSquare";

// Return the minimum number of steps required for Knight to traverse from start to end
const KnightsTravails = (start, end) => {
  // create nodes from starting and ending coords
  const origin = ChessSquare(...start);
  const destination = ChessSquare(...end);
  // if start or end is not within the game board return null
  if (!origin.checkMove() || !destination.checkMove()) return null;

  // start a queue and insert the beginning vertex as a ChessSquare
  const queue = [origin];
  // initialize a 2D array to keep track of visited vertexes & mark them false
  const n = origin.data.boardSize;
  const visited = [...Array(n)].map(() => Array(n).fill(false));
  // mark starting coordinates as visited (true)
  visited[start[0] - 1][start[1] - 1] = true;
  console.log(visited);

  // loop while queue is not empty
  while (queue.length !== 0) {
    // remove first element from the queue (current)
    const current = queue.shift();
    // base case - if current === destination, return its distance
    if (current === destination) return current.data.dis;
    // forEach possible space that the Knight can move to from its current square
    // mark the square as visited (true)
    // push that square to the queue
  }
  // otherwise not possible - return infinity
};

export default KnightsTravails;
