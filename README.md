# knights-travails

Finds the shortest possible route for a knight to move from one square to another on a chessboard of variable size N, and returns the Knights path.

# knights-tour

Finds a correct solution for a complete Knight's Tour, a sequence of moves where a knight visits each square on a chessboard of variable size N only once, and returns the Knight's path.

## tech-stack

Written in vanilla JavaScript, tests run via Jest, transpiled with Babel & compiled with Webpack

---

### Project Thoughts:

- Graphs, graphs, graphs. I'd already been thinking about graphs after recently readying through (Think Like a Git)[https://think-like-a-git.net/] and gaining a basic understanding of graph theory. This project pushed me further down the graph rabbit-hole and taught me numerous other methods for initiating a breadth-first search (BFS) traversal within a graph.

  - **Knight's Travails** - this problem is specifically about finding the shortest path within an unweighted graph. After much reading, my approach was actually relatively simple in the end: set up a 2-D array to keep track of the board, create ChessSquare nodes for the starting and ending [x, y] coordinates, initialize a queue and fill it with the starting ChessSquare node, then run the main loop - while the queue is not empty push every `possibleMove()` for each ChessSquare into the queue with an incremented distance of +1 (removing duplicate values and moves with coords outside the board edges along the way). When the current ChessSquare node in the queue matches the ending [x, y] coordinates, the function will return the length of the path as well as the path coordinates (obtained by backtracing the path from the destination to the origin after completing a travail).

  - **Knight's Tour** -

- Big O notation. In this case time complexity is O(N^2) - in the worst case all cells will be visited. Auxiliary space is also O(N^2), because all of the nodes are stored in a queue.

- Knights Tour different approaches -> Hamiltonian path problems -> Backtracking -> Warnsdorff’s heuristic / algo
