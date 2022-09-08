/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ChessSquare.js":
/*!************************************!*\
  !*** ./src/scripts/ChessSquare.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ChessSquare = function ChessSquare(x, y, dis) {
  //  object for storing a chessSquare's data
  var data = {
    xPosition: x,
    yPosition: y,
    boardSize: 8,
    dis: dis || 0,
    parent: null,
    board: null
  }; // all possible knight moves

  var KNIGHT_Combos = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]; // update the size of the game board

  var updateBoardSize = function updateBoardSize(n) {
    data.boardSize = n;
  };

  var getParent = function getParent() {
    return data.parent;
  };

  var setParent = function setParent(newParent) {
    return data.parent = newParent;
  }; // utility function to check whether or not the move is inside the game board


  var checkMove = function checkMove() {
    var X = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data.xPosition;
    var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : data.yPosition;
    var N = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : data.boardSize;
    if (X >= 1 && X <= N && Y >= 1 && Y <= N) return true;else return false;
  }; // create all valid Knight moves (at each position)


  var possibleMoves = function possibleMoves() {
    var newMoves = KNIGHT_Combos.map(function (offset) {
      return [data.xPosition + offset[0], data.yPosition + offset[1]];
    }); // remove duplicate values

    var removeDuplicates = new Set(newMoves.map(function (move) {
      return JSON.stringify(move);
    })); // re-map the values to an array & check that they are within the game board bounds

    return Array.from(removeDuplicates).map(function (move) {
      return JSON.parse(move);
    }).filter(function (x) {
      return checkMove(x[0], x[1]);
    });
  };

  var createBoard = function createBoard() {
    data.board = _toConsumableArray(Array(data.boardSize)).map(function () {
      return Array(data.boardSize).fill("");
    });
  };

  return {
    data: data,
    updateBoardSize: updateBoardSize,
    getParent: getParent,
    setParent: setParent,
    checkMove: checkMove,
    possibleMoves: possibleMoves,
    createBoard: createBoard
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChessSquare);

/***/ }),

/***/ "./src/scripts/KnightsTour.js":
/*!************************************!*\
  !*** ./src/scripts/KnightsTour.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChessSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChessSquare */ "./src/scripts/ChessSquare.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var KnightsTour = function KnightsTour(x, y, N) {
  var origin = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
  if (N) origin.updateBoardSize(N);
  if (!origin.checkMove()) return null; // initialize a 2D array to keep track of visited vertexes & mark them false

  var n = origin.data.boardSize;

  var visited = _toConsumableArray(Array(n)).map(function () {
    return Array(n).fill(false);
  }); // function to check if every ChessSquare has been visited


  var everySquareVisited = function everySquareVisited(board) {
    return board.every(function (column) {
      return column.every(function (square) {
        return square;
      });
    });
  }; // create a shallow copy of the visited array to keep track of each path's progress


  var copyOfVisited = function copyOfVisited(board) {
    return board.map(function (column) {
      return column.slice();
    });
  }; // find Knights Tour from any [x, y] coord on a board of N x N size
  // using backtracking-based recursion to build the correct path solution


  var findPath = function findPath(xCoord, yCoord, board, boardSize) {
    var current = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(xCoord, yCoord);
    current.updateBoardSize(boardSize);
    var boardCopy = copyOfVisited(board); // mark the starting coords as visited

    boardCopy[xCoord - 1][yCoord - 1] = true; // get all possible moves for the Knight at current position

    var moves = current.possibleMoves();
    var boardMoves = [];
    moves.forEach(function (move) {
      if (boardCopy[move[0] - 1][move[1] - 1] === false) boardMoves.push(move);
    }); // base case - if there are no more moves available to Knight, check board for completion

    if (boardMoves.length === 0) {
      // if the board is complete, return the successful path
      if (everySquareVisited(boardCopy)) return [[x, y]]; // if the board is not complete, move on to the next branch
      else return false; // otherwise recursively call function to find each possible move for next boardMove
    } else {
      var _iterator = _createForOfIteratorHelper(boardMoves),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              nextX = _step$value[0],
              nextY = _step$value[1];

          var path = findPath(nextX, nextY, boardCopy, boardSize); // if path equates to false, the loop will continue on to the next move

          if (path) {
            // otherwise, we have reached a successful solution
            // add the current coords to the path and return the path
            path.push([nextX, nextY]);
            return path;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }; // call the function


  return findPath(x, y, visited, N || 8);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightsTour);

/***/ }),

/***/ "./src/scripts/KnightsTourWarnsdorff.js":
/*!**********************************************!*\
  !*** ./src/scripts/KnightsTourWarnsdorff.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChessSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChessSquare */ "./src/scripts/ChessSquare.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // find Knights Tour from any [x, y] coord on a board of N x N size
// using Warnsdorff's heuristics + backtracking-based recursion to build the correct path solution

var KnightsTourWarnsdorff = function KnightsTourWarnsdorff(x, y, N) {
  // Original Knights Tour algorithm
  var origin = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
  if (N) origin.updateBoardSize(N);
  if (!origin.checkMove()) return null;
  var n = origin.data.boardSize;

  var visited = _toConsumableArray(Array(n)).map(function () {
    return Array(n).fill(false);
  }); // helper functions


  var everySquareVisited = function everySquareVisited(board) {
    return board.every(function (column) {
      return column.every(function (square) {
        return square;
      });
    });
  };

  var copyOfVisited = function copyOfVisited(board) {
    return board.map(function (column) {
      return column.slice();
    });
  };

  var getBoardMoves = function getBoardMoves(array, board) {
    var boardMoves = [];
    array.forEach(function (move) {
      if (board[move[0] - 1][move[1] - 1] === false) boardMoves.push(move);
    });
    return boardMoves;
  }; // Tweaking the Knights Tour backtracking algorithm to follow Warnsdorff's heuristics:
  // "When looking at the next possible moves, prefer the next move with the fewest possible options"


  var warnsdorff = function warnsdorff(KnightMoves, board, boardSize) {
    var weightedMoves = []; // find the number of possible paths for each KnightMove and return them in order from fewest to most

    var _iterator = _createForOfIteratorHelper(KnightMoves),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            _x = _step$value[0],
            _y = _step$value[1];

        var currentSquare = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(_x, _y);
        currentSquare.updateBoardSize(boardSize);
        var moves = currentSquare.possibleMoves();
        var boardMoves = getBoardMoves(moves, board);
        var weight = boardMoves.length;
        weightedMoves.push({
          move: [_x, _y],
          weight: weight
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return weightedMoves.sort(function (a, b) {
      return b.weight - a.weight;
    }).map(function (weighted) {
      return weighted.move;
    });
  }; // main function


  var findPath = function findPath(xCoord, yCoord, board, boardSize) {
    var current = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(xCoord, yCoord);
    current.updateBoardSize(boardSize);
    var boardCopy = copyOfVisited(board);
    boardCopy[xCoord - 1][yCoord - 1] = true;
    var moves = current.possibleMoves();
    var boardMoves = getBoardMoves(moves, boardCopy);

    if (boardMoves.length === 0) {
      if (everySquareVisited(boardCopy)) return [[x, y]];else return false;
    } else {
      var warnsdorfffMoves = warnsdorff(boardMoves, boardCopy, boardSize);

      var _iterator2 = _createForOfIteratorHelper(warnsdorfffMoves),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              nextX = _step2$value[0],
              nextY = _step2$value[1];

          var path = findPath(nextX, nextY, boardCopy, boardSize);

          if (path) {
            path.push([nextX, nextY]);
            return path;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  };

  return findPath(x, y, visited, N || 8);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightsTourWarnsdorff);

/***/ }),

/***/ "./src/scripts/KnightsTravails.js":
/*!****************************************!*\
  !*** ./src/scripts/KnightsTravails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChessSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChessSquare */ "./src/scripts/ChessSquare.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Return the minimum number of steps required for Knight to traverse from start to end

var KnightsTravails = function KnightsTravails(start, end, N) {
  // create nodes from starting and ending coords
  var origin = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(start[0], start[1]);
  var destination = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(end[0], end[1]);
  origin.setParent("HEAD"); // if n parameter if present, change the size of origin & destination ChessSquares

  if (N) {
    origin.updateBoardSize(N);
    destination.updateBoardSize(N);
  } // if start or end is not within the game board return null


  if (!origin.checkMove() || !destination.checkMove()) return null; // start a queue and insert the beginning vertex as a ChessSquare

  var queue = [origin]; // initialize a 2D array to keep track of visited vertexes & mark them false

  var n = origin.data.boardSize;

  var visited = _toConsumableArray(Array(n)).map(function () {
    return Array(n).fill(false);
  }); // mark starting coordinates as visited (true)


  visited[start[0] - 1][start[1] - 1] = true; // loop while queue is not empty

  var _loop = function _loop() {
    // remove first element from the queue (current)
    var current = queue.shift(); // base case - if current coords === destination coords, return current distance

    if (current.data.xPosition === destination.data.xPosition && current.data.yPosition === destination.data.yPosition) {
      // get path for shortest route
      // start a path var to save travail path
      destination.setParent(current.data.parent);
      var path = [destination];

      while (!path.includes(origin)) {
        var prevSquare = path[0].getParent();
        path.unshift(prevSquare);
      } // path.unshift(origin);
      // path.map((move) => [move.data.xPosition, move.data.yPosition]);


      var returnPath = [];
      path.forEach(function (move) {
        return returnPath.push([move.data.xPosition, move.data.yPosition]);
      });
      return {
        v: [current.data.dis, returnPath]
      };
    } // forEach possible space that the Knight can move to from its current square


    current.possibleMoves().forEach(function (move) {
      // if the square has not been visited before
      if (!visited[move[0] - 1][move[1] - 1]) {
        // mark the square as visited (true)
        visited[move[0] - 1][move[1] - 1] = true; // push that square to the queue with an incremented distance of + 1,

        var newSquare = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(move[0], move[1], current.data.dis + 1); // changing the size of each ChessSquare if n parameter is present

        if (N) newSquare.updateBoardSize(N); // set parent pointer to current node

        newSquare.setParent(current);
        queue.push(newSquare);
      }
    });
  };

  while (queue.length !== 0) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  } // otherwise not possible - return infinity


  return Infinity;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightsTravails);

/***/ }),

/***/ "./src/scripts/displayController.js":
/*!******************************************!*\
  !*** ./src/scripts/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KnightsTravails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnightsTravails */ "./src/scripts/KnightsTravails.js");
/* harmony import */ var _KnightsTour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnightsTour */ "./src/scripts/KnightsTour.js");
/* harmony import */ var _KnightsTourWarnsdorff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnightsTourWarnsdorff */ "./src/scripts/KnightsTourWarnsdorff.js");


 // Simple module to play with different board sizes and results

var displayController = function () {
  var N = 6;

  var updateN = function updateN(newN) {
    N = newN;
  };

  var renderBoard = function renderBoard() {
    var boardDOM = document.getElementById("board");

    for (var i = 0; i < N; i++) {
      var row = document.createElement("div");
      row.classList.add("row");

      for (var j = 0; j < N; j++) {
        var square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
      }

      boardDOM.appendChild(row);
    }
  };

  renderBoard();

  var getRandomNumberUpTo = function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  var travailKnight = function travailKnight(boardSize) {
    var startTravails = performance.now();
    var result = (0,_KnightsTravails__WEBPACK_IMPORTED_MODULE_0__["default"])([1, 1], [boardSize, boardSize], boardSize); // const result = output.map();

    var endTravails = performance.now();
    console.log("KnightsTravails performance time: " + "".concat(((endTravails - startTravails) / 1000).toFixed(2), " seconds - RESULT: "));
    console.log(result[1]);
  };

  var travailKnightDOM = document.getElementById("travail-Knight");
  travailKnightDOM.addEventListener("mousedown", function () {
    travailKnight(N);
  });

  var tourKnight = function tourKnight(boardSize) {
    var startTour = performance.now();
    var result = (0,_KnightsTour__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 1, boardSize);
    var endTour = performance.now();
    console.log("KnightsTour performance time: " + "".concat(((endTour - startTour) / 1000).toFixed(2), " seconds - RESULT: "));
    console.log(result);
  };

  var tourKnightDOM = document.getElementById("tour-Knight");
  tourKnightDOM.addEventListener("mousedown", function () {
    tourKnight(N);
  });

  var tourKnightWarnsdorff = function tourKnightWarnsdorff(boardSize) {
    var startTour = performance.now();
    var result = (0,_KnightsTourWarnsdorff__WEBPACK_IMPORTED_MODULE_2__["default"])(1, 1, boardSize);
    var endTour = performance.now();
    console.log("KnightsTourWarnsdorff performance time: " + "".concat(((endTour - startTour) / 1000).toFixed(2), " seconds - RESULT: "));
    console.log(result);
  };

  var tourKnightWDOM = document.getElementById("tour-Knight-Warnsdorff");
  tourKnightWDOM.addEventListener("mousedown", function () {
    tourKnightWarnsdorff(N);
  });
  return {
    updateN: updateN,
    travailKnight: travailKnight,
    tourKnight: tourKnight,
    tourKnightWarnsdorff: tourKnightWarnsdorff
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-y: auto;\n  overflow-x: hidden;\n  font-family: \"Lato\", sans-serif;\n  min-width: 400px;\n}\n\n.container {\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: rgb(248, 248, 255);\n  display: grid;\n  grid-template: 125px 1fr 50px/1fr;\n}\n\n.header {\n  background-color: navajowhite;\n}\n\n.content {\n  display: grid;\n  grid-template: 1fr/0.6fr 0.4fr;\n}\n.content #board {\n  place-self: center;\n}\n.content #board .row {\n  width: 100%;\n  display: flex;\n}\n.content #board .square {\n  height: 40px;\n  width: 40px;\n  background-color: rgba(95, 158, 160, 0.831);\n  outline: 0.25px dotted ghostwhite;\n}\n.content #board .square:hover {\n  background-color: cadetblue;\n  outline: 0.5px dotted ghostwhite;\n}\n.content .which-Knight {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.content .which-Knight #travail-Knight,\n.content .which-Knight #tour-Knight,\n.content .which-Knight #tour-Knight-Warnsdorff {\n  width: 150px;\n  height: 50px;\n  background-color: greenyellow;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  grid-area: 3/1/4/2;\n}\n.footer .made-by {\n  color: rgb(248, 248, 255);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 13px;\n  padding: 7px;\n  border-radius: 7px;\n  width: 100%;\n}\n.footer .made-by a {\n  text-decoration: none;\n  color: rgb(248, 248, 255);\n}\n.footer .made-by img {\n  height: 16px;\n  transition: transform 0.3s ease-in-out;\n}\n.footer .made-by #github-icon {\n  max-height: 16px;\n}\n.footer .made-by img:hover {\n  transform: rotate(360deg) scale(1.2);\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AASA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AARF;;AAWA;EACE,gBAAA;EACA,kBAAA;EACA,+BAbU;EAcV,gBAAA;AARF;;AAWA;EACE,iBAAA;EACA,gBAAA;EACA,oCAzBiB;EA0BjB,aAAA;EACA,iCAAA;AARF;;AAWA;EACE,6BAAA;AARF;;AAWA;EACE,aAAA;EACA,8BAAA;AARF;AASE;EACE,kBAAA;AAPJ;AAQI;EACE,WAAA;EACA,aAAA;AANN;AAQI;EACE,YAAA;EACA,WAAA;EACA,2CAAA;EACA,iCAAA;AANN;AAOM;EACE,2BAAA;EACA,gCAAA;AALR;AASE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAPJ;AAQI;;;EAGE,YAAA;EACA,YAAA;EACA,6BAAA;EACA,+BA5DM;EA6DN,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;AANN;;AAWA;EACE,aAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;AARF;AASE;EACE,yBAhFe;EAiFf,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAPJ;AAQI;EACE,qBAAA;EACA,yBA5Fa;AAsFnB;AAQI;EACE,YAAA;EACA,sCAAA;AANN;AAQI;EACE,gBAAA;AANN;AAQI;EACE,oCAAA;AANN","sourcesContent":["$background-color: rgb(248, 248, 255);\n$board-color: rgba(248, 248, 255, 0.9);\n$ship-color: #e2c08c;\n$highlight-color: #6a7aac;\n$header-font: \"Original Surfer\", \"cursive\";\n$main-font: \"Lato\", sans-serif;\n$medium: 760px;\n$small: 500px;\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-y: auto;\n  overflow-x: hidden;\n  font-family: $main-font;\n  min-width: 400px;\n}\n\n.container {\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: $background-color;\n  display: grid;\n  grid-template: 125px 1fr 50px / 1fr;\n}\n\n.header {\n  background-color: navajowhite;\n}\n\n.content {\n  display: grid;\n  grid-template: 1fr / 0.6fr 0.4fr;\n  #board {\n    place-self: center;\n    .row {\n      width: 100%;\n      display: flex;\n    }\n    .square {\n      height: 40px;\n      width: 40px;\n      background-color: rgba(95, 158, 160, 0.831);\n      outline: 0.25px dotted ghostwhite;\n      &:hover {\n        background-color: cadetblue;\n        outline: 0.5px dotted ghostwhite;\n      }\n    }\n  }\n  .which-Knight {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    #travail-Knight,\n    #tour-Knight,\n    #tour-Knight-Warnsdorff {\n      width: 150px;\n      height: 50px;\n      background-color: greenyellow;\n      font-family: $main-font;\n      font-size: 12px;\n      text-align: center;\n      line-height: 50px;\n      cursor: pointer;\n    }\n  }\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  grid-area: 3 / 1 / 4 / 2;\n  .made-by {\n    color: $background-color;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    font-size: 13px;\n    padding: 7px;\n    border-radius: 7px;\n    width: 100%;\n    a {\n      text-decoration: none;\n      color: $background-color;\n    }\n    img {\n      height: 16px;\n      transition: transform 0.3s ease-in-out;\n    }\n    #github-icon {\n      max-height: 16px;\n    }\n    img:hover {\n      transform: rotate(360deg) scale(1.2);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/gitHubIconWhite.png":
/*!****************************************!*\
  !*** ./src/assets/gitHubIconWhite.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d74fd76ac168df7723c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_gitHubIconWhite_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/gitHubIconWhite.png */ "./src/assets/gitHubIconWhite.png");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.scss */ "./src/index.scss");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/scripts/displayController.js");
// import favicon from "../assets/favicon.ico";



document.getElementById("github-icon").src = _src_assets_gitHubIconWhite_png__WEBPACK_IMPORTED_MODULE_0__;
_displayController__WEBPACK_IMPORTED_MODULE_2__["default"];
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUssUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDK0IsR0FBdkMsR0FBNkNELDREQUE3QztBQUVBcEMsMERBQWlCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvQ2hlc3NTcXVhcmUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL0tuaWdodHNUb3VyLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9LbmlnaHRzVG91cldhcm5zZG9yZmYuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL0tuaWdodHNUcmF2YWlscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDaGVzc1NxdWFyZSA9ICh4LCB5LCBkaXMpID0+IHtcbiAgLy8gIG9iamVjdCBmb3Igc3RvcmluZyBhIGNoZXNzU3F1YXJlJ3MgZGF0YVxuICBjb25zdCBkYXRhID0ge1xuICAgIHhQb3NpdGlvbjogeCxcbiAgICB5UG9zaXRpb246IHksXG4gICAgYm9hcmRTaXplOiA4LFxuICAgIGRpczogZGlzIHx8IDAsXG4gICAgcGFyZW50OiBudWxsLFxuICAgIGJvYXJkOiBudWxsLFxuICB9O1xuXG4gIC8vIGFsbCBwb3NzaWJsZSBrbmlnaHQgbW92ZXNcbiAgY29uc3QgS05JR0hUX0NvbWJvcyA9IFtcbiAgICBbMiwgMV0sXG4gICAgWzIsIC0xXSxcbiAgICBbLTIsIDFdLFxuICAgIFstMiwgLTFdLFxuICAgIFsxLCAyXSxcbiAgICBbMSwgLTJdLFxuICAgIFstMSwgMl0sXG4gICAgWy0xLCAtMl0sXG4gIF07XG5cbiAgLy8gdXBkYXRlIHRoZSBzaXplIG9mIHRoZSBnYW1lIGJvYXJkXG4gIGNvbnN0IHVwZGF0ZUJvYXJkU2l6ZSA9IChuKSA9PiB7XG4gICAgZGF0YS5ib2FyZFNpemUgPSBuO1xuICB9O1xuXG4gIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IGRhdGEucGFyZW50O1xuICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiAoZGF0YS5wYXJlbnQgPSBuZXdQYXJlbnQpO1xuXG4gIC8vIHV0aWxpdHkgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciBvciBub3QgdGhlIG1vdmUgaXMgaW5zaWRlIHRoZSBnYW1lIGJvYXJkXG4gIGNvbnN0IGNoZWNrTW92ZSA9IChcbiAgICBYID0gZGF0YS54UG9zaXRpb24sXG4gICAgWSA9IGRhdGEueVBvc2l0aW9uLFxuICAgIE4gPSBkYXRhLmJvYXJkU2l6ZVxuICApID0+IHtcbiAgICBpZiAoWCA+PSAxICYmIFggPD0gTiAmJiBZID49IDEgJiYgWSA8PSBOKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBjcmVhdGUgYWxsIHZhbGlkIEtuaWdodCBtb3ZlcyAoYXQgZWFjaCBwb3NpdGlvbilcbiAgY29uc3QgcG9zc2libGVNb3ZlcyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdNb3ZlcyA9IEtOSUdIVF9Db21ib3MubWFwKChvZmZzZXQpID0+IFtcbiAgICAgIGRhdGEueFBvc2l0aW9uICsgb2Zmc2V0WzBdLFxuICAgICAgZGF0YS55UG9zaXRpb24gKyBvZmZzZXRbMV0sXG4gICAgXSk7XG4gICAgLy8gcmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXNcbiAgICBjb25zdCByZW1vdmVEdXBsaWNhdGVzID0gbmV3IFNldChcbiAgICAgIG5ld01vdmVzLm1hcCgobW92ZSkgPT4gSlNPTi5zdHJpbmdpZnkobW92ZSkpXG4gICAgKTtcbiAgICAvLyByZS1tYXAgdGhlIHZhbHVlcyB0byBhbiBhcnJheSAmIGNoZWNrIHRoYXQgdGhleSBhcmUgd2l0aGluIHRoZSBnYW1lIGJvYXJkIGJvdW5kc1xuICAgIHJldHVybiBBcnJheS5mcm9tKHJlbW92ZUR1cGxpY2F0ZXMpXG4gICAgICAubWFwKChtb3ZlKSA9PiBKU09OLnBhcnNlKG1vdmUpKVxuICAgICAgLmZpbHRlcigoeCkgPT4gY2hlY2tNb3ZlKHhbMF0sIHhbMV0pKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBkYXRhLmJvYXJkID0gWy4uLkFycmF5KGRhdGEuYm9hcmRTaXplKV0ubWFwKCgpID0+XG4gICAgICBBcnJheShkYXRhLmJvYXJkU2l6ZSkuZmlsbChcIlwiKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHVwZGF0ZUJvYXJkU2l6ZSxcbiAgICBnZXRQYXJlbnQsXG4gICAgc2V0UGFyZW50LFxuICAgIGNoZWNrTW92ZSxcbiAgICBwb3NzaWJsZU1vdmVzLFxuICAgIGNyZWF0ZUJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlc3NTcXVhcmU7XG4iLCJpbXBvcnQgQ2hlc3NTcXVhcmUgZnJvbSBcIi4vQ2hlc3NTcXVhcmVcIjtcblxuY29uc3QgS25pZ2h0c1RvdXIgPSAoeCwgeSwgTikgPT4ge1xuICBjb25zdCBvcmlnaW4gPSBDaGVzc1NxdWFyZSh4LCB5KTtcbiAgaWYgKE4pIG9yaWdpbi51cGRhdGVCb2FyZFNpemUoTik7XG4gIGlmICghb3JpZ2luLmNoZWNrTW92ZSgpKSByZXR1cm4gbnVsbDtcblxuICAvLyBpbml0aWFsaXplIGEgMkQgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB2aXNpdGVkIHZlcnRleGVzICYgbWFyayB0aGVtIGZhbHNlXG4gIGNvbnN0IG4gPSBvcmlnaW4uZGF0YS5ib2FyZFNpemU7XG4gIGNvbnN0IHZpc2l0ZWQgPSBbLi4uQXJyYXkobildLm1hcCgoKSA9PiBBcnJheShuKS5maWxsKGZhbHNlKSk7XG5cbiAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgaWYgZXZlcnkgQ2hlc3NTcXVhcmUgaGFzIGJlZW4gdmlzaXRlZFxuICBjb25zdCBldmVyeVNxdWFyZVZpc2l0ZWQgPSAoYm9hcmQpID0+IHtcbiAgICByZXR1cm4gYm9hcmQuZXZlcnkoKGNvbHVtbikgPT4gY29sdW1uLmV2ZXJ5KChzcXVhcmUpID0+IHNxdWFyZSkpO1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBhIHNoYWxsb3cgY29weSBvZiB0aGUgdmlzaXRlZCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIGVhY2ggcGF0aCdzIHByb2dyZXNzXG4gIGNvbnN0IGNvcHlPZlZpc2l0ZWQgPSAoYm9hcmQpID0+IGJvYXJkLm1hcCgoY29sdW1uKSA9PiBjb2x1bW4uc2xpY2UoKSk7XG5cbiAgLy8gZmluZCBLbmlnaHRzIFRvdXIgZnJvbSBhbnkgW3gsIHldIGNvb3JkIG9uIGEgYm9hcmQgb2YgTiB4IE4gc2l6ZVxuICAvLyB1c2luZyBiYWNrdHJhY2tpbmctYmFzZWQgcmVjdXJzaW9uIHRvIGJ1aWxkIHRoZSBjb3JyZWN0IHBhdGggc29sdXRpb25cbiAgY29uc3QgZmluZFBhdGggPSAoeENvb3JkLCB5Q29vcmQsIGJvYXJkLCBib2FyZFNpemUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gQ2hlc3NTcXVhcmUoeENvb3JkLCB5Q29vcmQpO1xuICAgIGN1cnJlbnQudXBkYXRlQm9hcmRTaXplKGJvYXJkU2l6ZSk7XG4gICAgY29uc3QgYm9hcmRDb3B5ID0gY29weU9mVmlzaXRlZChib2FyZCk7XG4gICAgLy8gbWFyayB0aGUgc3RhcnRpbmcgY29vcmRzIGFzIHZpc2l0ZWRcbiAgICBib2FyZENvcHlbeENvb3JkIC0gMV1beUNvb3JkIC0gMV0gPSB0cnVlO1xuICAgIC8vIGdldCBhbGwgcG9zc2libGUgbW92ZXMgZm9yIHRoZSBLbmlnaHQgYXQgY3VycmVudCBwb3NpdGlvblxuICAgIGNvbnN0IG1vdmVzID0gY3VycmVudC5wb3NzaWJsZU1vdmVzKCk7XG4gICAgY29uc3QgYm9hcmRNb3ZlcyA9IFtdO1xuICAgIG1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGlmIChib2FyZENvcHlbbW92ZVswXSAtIDFdW21vdmVbMV0gLSAxXSA9PT0gZmFsc2UpIGJvYXJkTW92ZXMucHVzaChtb3ZlKTtcbiAgICB9KTtcbiAgICAvLyBiYXNlIGNhc2UgLSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBtb3ZlcyBhdmFpbGFibGUgdG8gS25pZ2h0LCBjaGVjayBib2FyZCBmb3IgY29tcGxldGlvblxuICAgIGlmIChib2FyZE1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gaWYgdGhlIGJvYXJkIGlzIGNvbXBsZXRlLCByZXR1cm4gdGhlIHN1Y2Nlc3NmdWwgcGF0aFxuICAgICAgaWYgKGV2ZXJ5U3F1YXJlVmlzaXRlZChib2FyZENvcHkpKSByZXR1cm4gW1t4LCB5XV07XG4gICAgICAvLyBpZiB0aGUgYm9hcmQgaXMgbm90IGNvbXBsZXRlLCBtb3ZlIG9uIHRvIHRoZSBuZXh0IGJyYW5jaFxuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBvdGhlcndpc2UgcmVjdXJzaXZlbHkgY2FsbCBmdW5jdGlvbiB0byBmaW5kIGVhY2ggcG9zc2libGUgbW92ZSBmb3IgbmV4dCBib2FyZE1vdmVcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgW25leHRYLCBuZXh0WV0gb2YgYm9hcmRNb3Zlcykge1xuICAgICAgICBsZXQgcGF0aCA9IGZpbmRQYXRoKG5leHRYLCBuZXh0WSwgYm9hcmRDb3B5LCBib2FyZFNpemUpO1xuICAgICAgICAvLyBpZiBwYXRoIGVxdWF0ZXMgdG8gZmFsc2UsIHRoZSBsb29wIHdpbGwgY29udGludWUgb24gdG8gdGhlIG5leHQgbW92ZVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIC8vIG90aGVyd2lzZSwgd2UgaGF2ZSByZWFjaGVkIGEgc3VjY2Vzc2Z1bCBzb2x1dGlvblxuICAgICAgICAgIC8vIGFkZCB0aGUgY3VycmVudCBjb29yZHMgdG8gdGhlIHBhdGggYW5kIHJldHVybiB0aGUgcGF0aFxuICAgICAgICAgIHBhdGgucHVzaChbbmV4dFgsIG5leHRZXSk7XG4gICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXG4gIHJldHVybiBmaW5kUGF0aCh4LCB5LCB2aXNpdGVkLCBOIHx8IDgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0c1RvdXI7XG4iLCJpbXBvcnQgQ2hlc3NTcXVhcmUgZnJvbSBcIi4vQ2hlc3NTcXVhcmVcIjtcblxuLy8gZmluZCBLbmlnaHRzIFRvdXIgZnJvbSBhbnkgW3gsIHldIGNvb3JkIG9uIGEgYm9hcmQgb2YgTiB4IE4gc2l6ZVxuLy8gdXNpbmcgV2FybnNkb3JmZidzIGhldXJpc3RpY3MgKyBiYWNrdHJhY2tpbmctYmFzZWQgcmVjdXJzaW9uIHRvIGJ1aWxkIHRoZSBjb3JyZWN0IHBhdGggc29sdXRpb25cblxuY29uc3QgS25pZ2h0c1RvdXJXYXJuc2RvcmZmID0gKHgsIHksIE4pID0+IHtcbiAgLy8gT3JpZ2luYWwgS25pZ2h0cyBUb3VyIGFsZ29yaXRobVxuICBjb25zdCBvcmlnaW4gPSBDaGVzc1NxdWFyZSh4LCB5KTtcbiAgaWYgKE4pIG9yaWdpbi51cGRhdGVCb2FyZFNpemUoTik7XG4gIGlmICghb3JpZ2luLmNoZWNrTW92ZSgpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbiA9IG9yaWdpbi5kYXRhLmJvYXJkU2l6ZTtcbiAgY29uc3QgdmlzaXRlZCA9IFsuLi5BcnJheShuKV0ubWFwKCgpID0+IEFycmF5KG4pLmZpbGwoZmFsc2UpKTtcbiAgLy8gaGVscGVyIGZ1bmN0aW9uc1xuICBjb25zdCBldmVyeVNxdWFyZVZpc2l0ZWQgPSAoYm9hcmQpID0+IHtcbiAgICByZXR1cm4gYm9hcmQuZXZlcnkoKGNvbHVtbikgPT4gY29sdW1uLmV2ZXJ5KChzcXVhcmUpID0+IHNxdWFyZSkpO1xuICB9O1xuICBjb25zdCBjb3B5T2ZWaXNpdGVkID0gKGJvYXJkKSA9PiBib2FyZC5tYXAoKGNvbHVtbikgPT4gY29sdW1uLnNsaWNlKCkpO1xuICBjb25zdCBnZXRCb2FyZE1vdmVzID0gKGFycmF5LCBib2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkTW92ZXMgPSBbXTtcbiAgICBhcnJheS5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgICBpZiAoYm9hcmRbbW92ZVswXSAtIDFdW21vdmVbMV0gLSAxXSA9PT0gZmFsc2UpIGJvYXJkTW92ZXMucHVzaChtb3ZlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm9hcmRNb3ZlcztcbiAgfTtcblxuICAvLyBUd2Vha2luZyB0aGUgS25pZ2h0cyBUb3VyIGJhY2t0cmFja2luZyBhbGdvcml0aG0gdG8gZm9sbG93IFdhcm5zZG9yZmYncyBoZXVyaXN0aWNzOlxuICAvLyBcIldoZW4gbG9va2luZyBhdCB0aGUgbmV4dCBwb3NzaWJsZSBtb3ZlcywgcHJlZmVyIHRoZSBuZXh0IG1vdmUgd2l0aCB0aGUgZmV3ZXN0IHBvc3NpYmxlIG9wdGlvbnNcIlxuICBjb25zdCB3YXJuc2RvcmZmID0gKEtuaWdodE1vdmVzLCBib2FyZCwgYm9hcmRTaXplKSA9PiB7XG4gICAgY29uc3Qgd2VpZ2h0ZWRNb3ZlcyA9IFtdO1xuICAgIC8vIGZpbmQgdGhlIG51bWJlciBvZiBwb3NzaWJsZSBwYXRocyBmb3IgZWFjaCBLbmlnaHRNb3ZlIGFuZCByZXR1cm4gdGhlbSBpbiBvcmRlciBmcm9tIGZld2VzdCB0byBtb3N0XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgS25pZ2h0TW92ZXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmUgPSBDaGVzc1NxdWFyZSh4LCB5KTtcbiAgICAgIGN1cnJlbnRTcXVhcmUudXBkYXRlQm9hcmRTaXplKGJvYXJkU2l6ZSk7XG4gICAgICBjb25zdCBtb3ZlcyA9IGN1cnJlbnRTcXVhcmUucG9zc2libGVNb3ZlcygpO1xuICAgICAgY29uc3QgYm9hcmRNb3ZlcyA9IGdldEJvYXJkTW92ZXMobW92ZXMsIGJvYXJkKTtcbiAgICAgIGNvbnN0IHdlaWdodCA9IGJvYXJkTW92ZXMubGVuZ3RoO1xuICAgICAgd2VpZ2h0ZWRNb3Zlcy5wdXNoKHsgbW92ZTogW3gsIHldLCB3ZWlnaHQgfSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWlnaHRlZE1vdmVzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi53ZWlnaHQgLSBhLndlaWdodClcbiAgICAgIC5tYXAoKHdlaWdodGVkKSA9PiB3ZWlnaHRlZC5tb3ZlKTtcbiAgfTtcblxuICAvLyBtYWluIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRQYXRoID0gKHhDb29yZCwgeUNvb3JkLCBib2FyZCwgYm9hcmRTaXplKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IENoZXNzU3F1YXJlKHhDb29yZCwgeUNvb3JkKTtcbiAgICBjdXJyZW50LnVwZGF0ZUJvYXJkU2l6ZShib2FyZFNpemUpO1xuICAgIGNvbnN0IGJvYXJkQ29weSA9IGNvcHlPZlZpc2l0ZWQoYm9hcmQpO1xuICAgIGJvYXJkQ29weVt4Q29vcmQgLSAxXVt5Q29vcmQgLSAxXSA9IHRydWU7XG4gICAgY29uc3QgbW92ZXMgPSBjdXJyZW50LnBvc3NpYmxlTW92ZXMoKTtcbiAgICBjb25zdCBib2FyZE1vdmVzID0gZ2V0Qm9hcmRNb3Zlcyhtb3ZlcywgYm9hcmRDb3B5KTtcbiAgICBpZiAoYm9hcmRNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChldmVyeVNxdWFyZVZpc2l0ZWQoYm9hcmRDb3B5KSkgcmV0dXJuIFtbeCwgeV1dO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdhcm5zZG9yZmZmTW92ZXMgPSB3YXJuc2RvcmZmKGJvYXJkTW92ZXMsIGJvYXJkQ29weSwgYm9hcmRTaXplKTtcbiAgICAgIGZvciAobGV0IFtuZXh0WCwgbmV4dFldIG9mIHdhcm5zZG9yZmZmTW92ZXMpIHtcbiAgICAgICAgbGV0IHBhdGggPSBmaW5kUGF0aChuZXh0WCwgbmV4dFksIGJvYXJkQ29weSwgYm9hcmRTaXplKTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBwYXRoLnB1c2goW25leHRYLCBuZXh0WV0pO1xuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICByZXR1cm4gZmluZFBhdGgoeCwgeSwgdmlzaXRlZCwgTiB8fCA4KTtcbn07XG5leHBvcnQgZGVmYXVsdCBLbmlnaHRzVG91cldhcm5zZG9yZmY7XG4iLCJpbXBvcnQgQ2hlc3NTcXVhcmUgZnJvbSBcIi4vQ2hlc3NTcXVhcmVcIjtcblxuLy8gUmV0dXJuIHRoZSBtaW5pbXVtIG51bWJlciBvZiBzdGVwcyByZXF1aXJlZCBmb3IgS25pZ2h0IHRvIHRyYXZlcnNlIGZyb20gc3RhcnQgdG8gZW5kXG5jb25zdCBLbmlnaHRzVHJhdmFpbHMgPSAoc3RhcnQsIGVuZCwgTikgPT4ge1xuICAvLyBjcmVhdGUgbm9kZXMgZnJvbSBzdGFydGluZyBhbmQgZW5kaW5nIGNvb3Jkc1xuICBjb25zdCBvcmlnaW4gPSBDaGVzc1NxdWFyZShzdGFydFswXSwgc3RhcnRbMV0pO1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IENoZXNzU3F1YXJlKGVuZFswXSwgZW5kWzFdKTtcblxuICBvcmlnaW4uc2V0UGFyZW50KFwiSEVBRFwiKTtcblxuICAvLyBpZiBuIHBhcmFtZXRlciBpZiBwcmVzZW50LCBjaGFuZ2UgdGhlIHNpemUgb2Ygb3JpZ2luICYgZGVzdGluYXRpb24gQ2hlc3NTcXVhcmVzXG4gIGlmIChOKSB7XG4gICAgb3JpZ2luLnVwZGF0ZUJvYXJkU2l6ZShOKTtcbiAgICBkZXN0aW5hdGlvbi51cGRhdGVCb2FyZFNpemUoTik7XG4gIH1cblxuICAvLyBpZiBzdGFydCBvciBlbmQgaXMgbm90IHdpdGhpbiB0aGUgZ2FtZSBib2FyZCByZXR1cm4gbnVsbFxuICBpZiAoIW9yaWdpbi5jaGVja01vdmUoKSB8fCAhZGVzdGluYXRpb24uY2hlY2tNb3ZlKCkpIHJldHVybiBudWxsO1xuXG4gIC8vIHN0YXJ0IGEgcXVldWUgYW5kIGluc2VydCB0aGUgYmVnaW5uaW5nIHZlcnRleCBhcyBhIENoZXNzU3F1YXJlXG4gIGNvbnN0IHF1ZXVlID0gW29yaWdpbl07XG4gIC8vIGluaXRpYWxpemUgYSAyRCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHZpc2l0ZWQgdmVydGV4ZXMgJiBtYXJrIHRoZW0gZmFsc2VcbiAgY29uc3QgbiA9IG9yaWdpbi5kYXRhLmJvYXJkU2l6ZTtcbiAgY29uc3QgdmlzaXRlZCA9IFsuLi5BcnJheShuKV0ubWFwKCgpID0+IEFycmF5KG4pLmZpbGwoZmFsc2UpKTtcbiAgLy8gbWFyayBzdGFydGluZyBjb29yZGluYXRlcyBhcyB2aXNpdGVkICh0cnVlKVxuICB2aXNpdGVkW3N0YXJ0WzBdIC0gMV1bc3RhcnRbMV0gLSAxXSA9IHRydWU7XG5cbiAgLy8gbG9vcCB3aGlsZSBxdWV1ZSBpcyBub3QgZW1wdHlcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIHJlbW92ZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIHF1ZXVlIChjdXJyZW50KVxuICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuICAgIC8vIGJhc2UgY2FzZSAtIGlmIGN1cnJlbnQgY29vcmRzID09PSBkZXN0aW5hdGlvbiBjb29yZHMsIHJldHVybiBjdXJyZW50IGRpc3RhbmNlXG4gICAgaWYgKFxuICAgICAgY3VycmVudC5kYXRhLnhQb3NpdGlvbiA9PT0gZGVzdGluYXRpb24uZGF0YS54UG9zaXRpb24gJiZcbiAgICAgIGN1cnJlbnQuZGF0YS55UG9zaXRpb24gPT09IGRlc3RpbmF0aW9uLmRhdGEueVBvc2l0aW9uXG4gICAgKSB7XG4gICAgICAvLyBnZXQgcGF0aCBmb3Igc2hvcnRlc3Qgcm91dGVcbiAgICAgIC8vIHN0YXJ0IGEgcGF0aCB2YXIgdG8gc2F2ZSB0cmF2YWlsIHBhdGhcbiAgICAgIGRlc3RpbmF0aW9uLnNldFBhcmVudChjdXJyZW50LmRhdGEucGFyZW50KTtcbiAgICAgIGNvbnN0IHBhdGggPSBbZGVzdGluYXRpb25dO1xuICAgICAgd2hpbGUgKCFwYXRoLmluY2x1ZGVzKG9yaWdpbikpIHtcbiAgICAgICAgY29uc3QgcHJldlNxdWFyZSA9IHBhdGhbMF0uZ2V0UGFyZW50KCk7XG4gICAgICAgIHBhdGgudW5zaGlmdChwcmV2U3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIC8vIHBhdGgudW5zaGlmdChvcmlnaW4pO1xuICAgICAgLy8gcGF0aC5tYXAoKG1vdmUpID0+IFttb3ZlLmRhdGEueFBvc2l0aW9uLCBtb3ZlLmRhdGEueVBvc2l0aW9uXSk7XG4gICAgICBjb25zdCByZXR1cm5QYXRoID0gW107XG4gICAgICBwYXRoLmZvckVhY2goKG1vdmUpID0+XG4gICAgICAgIHJldHVyblBhdGgucHVzaChbbW92ZS5kYXRhLnhQb3NpdGlvbiwgbW92ZS5kYXRhLnlQb3NpdGlvbl0pXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtjdXJyZW50LmRhdGEuZGlzLCByZXR1cm5QYXRoXTtcbiAgICB9XG4gICAgLy8gZm9yRWFjaCBwb3NzaWJsZSBzcGFjZSB0aGF0IHRoZSBLbmlnaHQgY2FuIG1vdmUgdG8gZnJvbSBpdHMgY3VycmVudCBzcXVhcmVcbiAgICBjdXJyZW50LnBvc3NpYmxlTW92ZXMoKS5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgICAvLyBpZiB0aGUgc3F1YXJlIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJlZm9yZVxuICAgICAgaWYgKCF2aXNpdGVkW21vdmVbMF0gLSAxXVttb3ZlWzFdIC0gMV0pIHtcbiAgICAgICAgLy8gbWFyayB0aGUgc3F1YXJlIGFzIHZpc2l0ZWQgKHRydWUpXG4gICAgICAgIHZpc2l0ZWRbbW92ZVswXSAtIDFdW21vdmVbMV0gLSAxXSA9IHRydWU7XG4gICAgICAgIC8vIHB1c2ggdGhhdCBzcXVhcmUgdG8gdGhlIHF1ZXVlIHdpdGggYW4gaW5jcmVtZW50ZWQgZGlzdGFuY2Ugb2YgKyAxLFxuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBDaGVzc1NxdWFyZShtb3ZlWzBdLCBtb3ZlWzFdLCBjdXJyZW50LmRhdGEuZGlzICsgMSk7XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBzaXplIG9mIGVhY2ggQ2hlc3NTcXVhcmUgaWYgbiBwYXJhbWV0ZXIgaXMgcHJlc2VudFxuICAgICAgICBpZiAoTikgbmV3U3F1YXJlLnVwZGF0ZUJvYXJkU2l6ZShOKTtcbiAgICAgICAgLy8gc2V0IHBhcmVudCBwb2ludGVyIHRvIGN1cnJlbnQgbm9kZVxuICAgICAgICBuZXdTcXVhcmUuc2V0UGFyZW50KGN1cnJlbnQpO1xuICAgICAgICBxdWV1ZS5wdXNoKG5ld1NxdWFyZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gb3RoZXJ3aXNlIG5vdCBwb3NzaWJsZSAtIHJldHVybiBpbmZpbml0eVxuICByZXR1cm4gSW5maW5pdHk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLbmlnaHRzVHJhdmFpbHM7XG4iLCJpbXBvcnQgS25pZ2h0c1RyYXZhaWxzIGZyb20gXCIuL0tuaWdodHNUcmF2YWlsc1wiO1xuaW1wb3J0IEtuaWdodHNUb3VyIGZyb20gXCIuL0tuaWdodHNUb3VyXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXJXYXJuc2RvcmZmIGZyb20gXCIuL0tuaWdodHNUb3VyV2FybnNkb3JmZlwiO1xuXG4vLyBTaW1wbGUgbW9kdWxlIHRvIHBsYXkgd2l0aCBkaWZmZXJlbnQgYm9hcmQgc2l6ZXMgYW5kIHJlc3VsdHNcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgTiA9IDY7XG5cbiAgY29uc3QgdXBkYXRlTiA9IChuZXdOKSA9PiB7XG4gICAgTiA9IG5ld047XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE47IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgICBib2FyZERPTS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyQm9hcmQoKTtcblxuICBjb25zdCBnZXRSYW5kb21OdW1iZXJVcFRvID0gKG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKG1heCB8fCA4KSAtIDQgKyAxKSArIDQpO1xuICB9O1xuXG4gIGNvbnN0IHRyYXZhaWxLbmlnaHQgPSAoYm9hcmRTaXplKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRUcmF2YWlscyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IHJlc3VsdCA9IEtuaWdodHNUcmF2YWlscyhbMSwgMV0sIFtib2FyZFNpemUsIGJvYXJkU2l6ZV0sIGJvYXJkU2l6ZSk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gb3V0cHV0Lm1hcCgpO1xuICAgIGNvbnN0IGVuZFRyYXZhaWxzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIktuaWdodHNUcmF2YWlscyBwZXJmb3JtYW5jZSB0aW1lOiBcIiArXG4gICAgICAgIGAkeygoZW5kVHJhdmFpbHMgLSBzdGFydFRyYXZhaWxzKSAvIDEwMDApLnRvRml4ZWQoXG4gICAgICAgICAgMlxuICAgICAgICApfSBzZWNvbmRzIC0gUkVTVUxUOiBgXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRbMV0pO1xuICB9O1xuICBjb25zdCB0cmF2YWlsS25pZ2h0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmF2YWlsLUtuaWdodFwiKTtcbiAgdHJhdmFpbEtuaWdodERPTS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICB0cmF2YWlsS25pZ2h0KE4pO1xuICB9KTtcblxuICBjb25zdCB0b3VyS25pZ2h0ID0gKGJvYXJkU2l6ZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0VG91ciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IHJlc3VsdCA9IEtuaWdodHNUb3VyKDEsIDEsIGJvYXJkU2l6ZSk7XG4gICAgY29uc3QgZW5kVG91ciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJLbmlnaHRzVG91ciBwZXJmb3JtYW5jZSB0aW1lOiBcIiArXG4gICAgICAgIGAkeygoZW5kVG91ciAtIHN0YXJ0VG91cikgLyAxMDAwKS50b0ZpeGVkKDIpfSBzZWNvbmRzIC0gUkVTVUxUOiBgXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9O1xuICBjb25zdCB0b3VyS25pZ2h0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VyLUtuaWdodFwiKTtcbiAgdG91cktuaWdodERPTS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICB0b3VyS25pZ2h0KE4pO1xuICB9KTtcblxuICBjb25zdCB0b3VyS25pZ2h0V2FybnNkb3JmZiA9IChib2FyZFNpemUpID0+IHtcbiAgICBjb25zdCBzdGFydFRvdXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCByZXN1bHQgPSBLbmlnaHRzVG91cldhcm5zZG9yZmYoMSwgMSwgYm9hcmRTaXplKTtcbiAgICBjb25zdCBlbmRUb3VyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIktuaWdodHNUb3VyV2FybnNkb3JmZiBwZXJmb3JtYW5jZSB0aW1lOiBcIiArXG4gICAgICAgIGAkeygoZW5kVG91ciAtIHN0YXJ0VG91cikgLyAxMDAwKS50b0ZpeGVkKDIpfSBzZWNvbmRzIC0gUkVTVUxUOiBgXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9O1xuICBjb25zdCB0b3VyS25pZ2h0V0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG91ci1LbmlnaHQtV2FybnNkb3JmZlwiKTtcbiAgdG91cktuaWdodFdET00uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgdG91cktuaWdodFdhcm5zZG9yZmYoTik7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlTixcbiAgICB0cmF2YWlsS25pZ2h0LFxuICAgIHRvdXJLbmlnaHQsXG4gICAgdG91cktuaWdodFdhcm5zZG9yZmYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEyNXB4IDFmciA1MHB4LzFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZham93aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8wLjZmciAwLjRmcjtcXG59XFxuLmNvbnRlbnQgI2JvYXJkIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQgI2JvYXJkIC5yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGVudCAjYm9hcmQgLnNxdWFyZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDE1OCwgMTYwLCAwLjgzMSk7XFxuICBvdXRsaW5lOiAwLjI1cHggZG90dGVkIGdob3N0d2hpdGU7XFxufVxcbi5jb250ZW50ICNib2FyZCAuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gIG91dGxpbmU6IDAuNXB4IGRvdHRlZCBnaG9zdHdoaXRlO1xcbn1cXG4uY29udGVudCAud2hpY2gtS25pZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RyYXZhaWwtS25pZ2h0LFxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RvdXItS25pZ2h0LFxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RvdXItS25pZ2h0LVdhcm5zZG9yZmYge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcbi5mb290ZXIgLm1hZGUtYnkge1xcbiAgY29sb3I6IHJnYigyNDgsIDI0OCwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb290ZXIgLm1hZGUtYnkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiKDI0OCwgMjQ4LCAyNTUpO1xcbn1cXG4uZm9vdGVyIC5tYWRlLWJ5IGltZyB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmZvb3RlciAubWFkZS1ieSAjZ2l0aHViLWljb24ge1xcbiAgbWF4LWhlaWdodDogMTZweDtcXG59XFxuLmZvb3RlciAubWFkZS1ieSBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFiVTtFQWNWLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBekJpQjtFQTBCakIsYUFBQTtFQUNBLGlDQUFBO0FBUkY7O0FBV0E7RUFDRSw2QkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBUkY7QUFTRTtFQUNFLGtCQUFBO0FBUEo7QUFRSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBTk47QUFRSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtBQU5OO0FBT007RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0FBTFI7QUFTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVBKO0FBUUk7OztFQUdFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkE1RE07RUE2RE4sZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTk47O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUkY7QUFTRTtFQUNFLHlCQWhGZTtFQWlGZixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUEo7QUFRSTtFQUNFLHFCQUFBO0VBQ0EseUJBNUZhO0FBc0ZuQjtBQVFJO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0FBTk47QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFRSTtFQUNFLG9DQUFBO0FBTk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjU1KTtcXG4kYm9hcmQtY29sb3I6IHJnYmEoMjQ4LCAyNDgsIDI1NSwgMC45KTtcXG4kc2hpcC1jb2xvcjogI2UyYzA4YztcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjNmE3YWFjO1xcbiRoZWFkZXItZm9udDogXFxcIk9yaWdpbmFsIFN1cmZlclxcXCIsIFxcXCJjdXJzaXZlXFxcIjtcXG4kbWFpbi1mb250OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuJG1lZGl1bTogNzYwcHg7XFxuJHNtYWxsOiA1MDBweDtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMTI1cHggMWZyIDUwcHggLyAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2YWpvd2hpdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAwLjZmciAwLjRmcjtcXG4gICNib2FyZCB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgLnJvdyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgMTU4LCAxNjAsIDAuODMxKTtcXG4gICAgICBvdXRsaW5lOiAwLjI1cHggZG90dGVkIGdob3N0d2hpdGU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICAgICAgICBvdXRsaW5lOiAwLjVweCBkb3R0ZWQgZ2hvc3R3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC53aGljaC1LbmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAjdHJhdmFpbC1LbmlnaHQsXFxuICAgICN0b3VyLUtuaWdodCxcXG4gICAgI3RvdXItS25pZ2h0LVdhcm5zZG9yZmYge1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gIC5tYWRlLWJ5IHtcXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgfVxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAjZ2l0aHViLWljb24ge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XFxuICAgIH1cXG4gICAgaW1nOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBmYXZpY29uIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi5pY29cIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL2dpdEh1Ykljb25XaGl0ZS5wbmdcIjtcbmltcG9ydCBcIi4uL2luZGV4LnNjc3NcIjtcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpdGh1Yi1pY29uXCIpLnNyYyA9IGdpdGh1Ykljb247XG5cbmRpc3BsYXlDb250cm9sbGVyO1xuIl0sIm5hbWVzIjpbIkNoZXNzU3F1YXJlIiwieCIsInkiLCJkaXMiLCJkYXRhIiwieFBvc2l0aW9uIiwieVBvc2l0aW9uIiwiYm9hcmRTaXplIiwicGFyZW50IiwiYm9hcmQiLCJLTklHSFRfQ29tYm9zIiwidXBkYXRlQm9hcmRTaXplIiwibiIsImdldFBhcmVudCIsInNldFBhcmVudCIsIm5ld1BhcmVudCIsImNoZWNrTW92ZSIsIlgiLCJZIiwiTiIsInBvc3NpYmxlTW92ZXMiLCJuZXdNb3ZlcyIsIm1hcCIsIm9mZnNldCIsInJlbW92ZUR1cGxpY2F0ZXMiLCJTZXQiLCJtb3ZlIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsInBhcnNlIiwiZmlsdGVyIiwiY3JlYXRlQm9hcmQiLCJmaWxsIiwiS25pZ2h0c1RvdXIiLCJvcmlnaW4iLCJ2aXNpdGVkIiwiZXZlcnlTcXVhcmVWaXNpdGVkIiwiZXZlcnkiLCJjb2x1bW4iLCJzcXVhcmUiLCJjb3B5T2ZWaXNpdGVkIiwic2xpY2UiLCJmaW5kUGF0aCIsInhDb29yZCIsInlDb29yZCIsImN1cnJlbnQiLCJib2FyZENvcHkiLCJtb3ZlcyIsImJvYXJkTW92ZXMiLCJmb3JFYWNoIiwicHVzaCIsImxlbmd0aCIsIm5leHRYIiwibmV4dFkiLCJwYXRoIiwiS25pZ2h0c1RvdXJXYXJuc2RvcmZmIiwiZ2V0Qm9hcmRNb3ZlcyIsImFycmF5Iiwid2FybnNkb3JmZiIsIktuaWdodE1vdmVzIiwid2VpZ2h0ZWRNb3ZlcyIsImN1cnJlbnRTcXVhcmUiLCJ3ZWlnaHQiLCJzb3J0IiwiYSIsImIiLCJ3ZWlnaHRlZCIsIndhcm5zZG9yZmZmTW92ZXMiLCJLbmlnaHRzVHJhdmFpbHMiLCJzdGFydCIsImVuZCIsImRlc3RpbmF0aW9uIiwicXVldWUiLCJzaGlmdCIsImluY2x1ZGVzIiwicHJldlNxdWFyZSIsInVuc2hpZnQiLCJyZXR1cm5QYXRoIiwibmV3U3F1YXJlIiwiSW5maW5pdHkiLCJkaXNwbGF5Q29udHJvbGxlciIsInVwZGF0ZU4iLCJuZXdOIiwicmVuZGVyQm9hcmQiLCJib2FyZERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJhcHBlbmRDaGlsZCIsImdldFJhbmRvbU51bWJlclVwVG8iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0cmF2YWlsS25pZ2h0Iiwic3RhcnRUcmF2YWlscyIsInBlcmZvcm1hbmNlIiwibm93IiwicmVzdWx0IiwiZW5kVHJhdmFpbHMiLCJjb25zb2xlIiwibG9nIiwidG9GaXhlZCIsInRyYXZhaWxLbmlnaHRET00iLCJhZGRFdmVudExpc3RlbmVyIiwidG91cktuaWdodCIsInN0YXJ0VG91ciIsImVuZFRvdXIiLCJ0b3VyS25pZ2h0RE9NIiwidG91cktuaWdodFdhcm5zZG9yZmYiLCJ0b3VyS25pZ2h0V0RPTSIsImdpdGh1Ykljb24iLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9