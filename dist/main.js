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
      if (everySquareVisited(boardCopy)) return [[xCoord, yCoord]]; // if the board is not complete, move on to the next branch
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
            path.push([xCoord, yCoord]); // const test = ChessSquare(path[0][0], path[0][1]).possibleMoves();

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


  return findPath(x, y, visited, N || 8).reverse();
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
// *** //

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
      return a.weight - b.weight;
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
      if (everySquareVisited(boardCopy)) return [[xCoord, yCoord]];else return false;
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
            path.push([xCoord, yCoord]);
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

  return findPath(x, y, visited, N || 8).reverse();
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
      }

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
/* harmony import */ var _assets_knight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/knight.png */ "./src/assets/knight.png");



 // Simple module to play with different board sizes and results

var displayController = function () {
  // variable to hold boardSize
  var N = 6; // variables to hold x & y coords

  var xCoord;
  var yCoord;
  var xCoord_START;
  var yCoord_START;

  var updateN = function updateN(newN) {
    N = newN;
  };

  var boardDOM = document.getElementById("board");
  var boardRange = document.getElementById("myRange");
  var squares; // set slider to start

  boardRange.value = 6;

  var updateBoardSize = function updateBoardSize() {
    removeBoard();
    updateN(boardRange.value);
    renderBoard();
    squares.forEach(function (s) {
      s.style.height = 300 / "".concat(boardRange.value) + "px";
      s.style.width = 300 / "".concat(boardRange.value) + "px";
    });
    document.getElementById("board-size").textContent = boardRange.value + " x " + boardRange.value;
    document.getElementById("Knight-img-image").style.opacity = "1";
    randomlyPlaceDOM.style.pointerEvents = "";
    travailKnightDOM.style.pointerEvents = "";
  };

  boardRange.addEventListener("input", updateBoardSize);

  var renderBoard = function renderBoard() {
    var counter = 1;

    for (var i = 0; i < N; i++) {
      var row = document.createElement("div");
      row.classList.add("row");

      for (var j = 0; j < N; j++) {
        var square = document.createElement("div");
        square.classList.add("square");
        square.dataset.num = counter;
        counter++;
        square.style.height = 300 / "".concat(boardRange.value) + "px";
        square.style.width = 300 / "".concat(boardRange.value) + "px";
        i % 2 === 0 ? j % 2 === 0 ? square.classList.add("odd") : square.classList.add("even") : j % 2 === 0 ? square.classList.add("even") : square.classList.add("odd");
        row.appendChild(square);
      }

      boardDOM.appendChild(row);
    }

    squares = Array.from(document.getElementsByClassName("square"));
    squares.forEach(function (s) {
      s.addEventListener("mousedown", function () {
        return addKnightToBoard(s);
      });
    });
  };

  renderBoard();

  var removeBoard = function removeBoard() {
    while (boardDOM.firstChild) {
      boardDOM.removeChild(boardDOM.lastChild);
    }
  }; // turn 1-D array into [x, y] coords


  var arrayToXY = function arrayToXY(square) {
    return [square.dataset.num % N === 0 ? Number(N) : square.dataset.num % N, Math.round(Math.ceil(Number(square.dataset.num) / N))];
  }; // turn [x, y] coords into 1-D array


  var xyToArray = function xyToArray(coord) {
    return coord[1] * N + coord[0] - N;
  };

  var addKnightToBoard = function addKnightToBoard(s) {
    var coords = arrayToXY(s);
    xCoord = coords[0];
    yCoord = coords[1];
    placeKnight(s);
  };

  var getRandomNumberUpTo = function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  };

  var knightIcon = document.getElementById("Knight-img-image");

  var placeKnight = function placeKnight(spot) {
    if (document.getElementById("icon")) {
      document.getElementById("icon").parentElement.style.backgroundColor = "";
      document.getElementById("icon").remove();

      if (document.getElementById("START")) {
        document.getElementById("START").style.backgroundColor = "rgba(95, 158, 160, 0.831)";
      }
    }

    var transform = " rotateX(180deg)";
    var icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.src = _assets_knight_png__WEBPACK_IMPORTED_MODULE_3__;
    icon.style.transform += transform;
    icon.style.height = 300 / N + "px";
    icon.style.width = 300 / N + "px";
    spot.style.backgroundColor = "cadetblue";
    spot.appendChild(icon);
    knightIcon.style.opacity = "0";
    knightIcon.style.cursor = "default";
  };

  var randomlyPlace = function randomlyPlace() {
    var randomSpot = getRandomNumberUpTo(N * N);
    var spot = document.querySelector("[data-num=\"".concat(randomSpot, "\"]"));
    var coords = arrayToXY(spot);
    xCoord = coords[0];
    yCoord = coords[1];
    placeKnight(spot);
  };

  var randomlyPlaceDOM = document.getElementById("randomly-place");
  randomlyPlaceDOM.addEventListener("mousedown", randomlyPlace);

  var dragAndDrop = function dragAndDrop() {
    boardDOM.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    boardDOM.addEventListener("drop", function (e) {
      var coords = arrayToXY(e.target);
      xCoord = coords[0];
      yCoord = coords[1];
      placeKnight(e.target);
    });
  };

  dragAndDrop();

  var replaceKnightIcons = function replaceKnightIcons() {
    if (document.getElementById("icon")) {
      document.getElementById("icon").parentElement.style.backgroundColor = "";
      document.getElementById("icon").remove();
      knightIcon.style.opacity = "";
      knightIcon.style.cursor = "";
    }
  };

  var performanceTime = document.getElementById("performance-time");

  var clearBoard = function clearBoard() {
    document.getElementById("display-info").innerText = "Drag the Knight onto the chessboard or click one of the buttons below to get started...";
    replaceKnightIcons();
    removeBoard();
    renderBoard();
    randomlyPlaceDOM.style.pointerEvents = "";
    travailKnightDOM.style.backgroundColor = "";
    travailKnightDOM.style.fontWeight = "";
    tourKnightDOM.style.backgroundColor = "";
    tourKnightDOM.style.pointerEvents = "";
    tourKnightWarnsdorffDOM.style.backgroundColor = "";
    tourKnightWarnsdorffDOM.style.pointerEvents = "";
    xCoord = undefined;
    yCoord = undefined;
    xCoord_START = undefined;
    yCoord_START = undefined;
    document.getElementById("squares-visited").innerText = "";
    performanceTime.innerText = "";
    knightIcon.style.opacity = "";
    boardRange.value = 6;
    updateBoardSize();
  };

  document.getElementById("reset").addEventListener("mousedown", clearBoard);
  var travailKnightDOM = document.getElementById("travail-Knight");
  var tourKnightDOM = document.getElementById("tour-Knight");
  var tourKnightWarnsdorffDOM = document.getElementById("tour-Knight-Warnsdorff");

  var travailKnight = function travailKnight(boardSize) {
    if (xCoord && yCoord && !xCoord_START && !yCoord_START) {
      xCoord_START = xCoord;
      yCoord_START = yCoord;
      xCoord = undefined;
      yCoord = undefined;
      document.getElementById("display-info").innerText = "Choose an ending square for the Knight";
      var index = xyToArray([xCoord_START, yCoord_START]);
      var spot = document.querySelector("[data-num=\"".concat(index, "\"]"));
      spot.setAttribute("id", "START");
      spot.style.backgroundColor = "rgba(95, 158, 160, 0.831)";
      travailKnightDOM.style.backgroundColor = "cadetblue";
      travailKnightDOM.style.fontWeight = "bold";
      tourKnightDOM.style.backgroundColor = "gainsboro";
      tourKnightDOM.style.pointerEvents = "none";
      tourKnightWarnsdorffDOM.style.backgroundColor = "gainsboro";
      tourKnightWarnsdorffDOM.style.pointerEvents = "none";
    } else if (xCoord && yCoord && xCoord_START && yCoord_START && xyToArray([xCoord, yCoord]) !== xyToArray([xCoord_START, yCoord_START])) {
      document.getElementById("display-info").innerText = "Knight is travailing...";
      var startTravails = performance.now();
      var result = (0,_KnightsTravails__WEBPACK_IMPORTED_MODULE_0__["default"])([xCoord_START, yCoord_START], [xCoord, yCoord], Number(boardSize));
      var endTravails = performance.now();
      console.log("KnightsTravails performance time for " + "".concat(N) + "x" + "".concat(N) + " board size: " + "".concat(((endTravails - startTravails) / 1000).toFixed(2), " seconds - RESULT: "));
      performanceTime.innerText = ((endTravails - startTravails) / 1000).toFixed(2) + " seconds";
      document.getElementById("squares-visited").innerText = result[1].length;
      result[1].forEach(function (coord) {
        var index = xyToArray(coord);
        var spot = document.querySelector("[data-num=\"".concat(index, "\"]"));
        spot.style.backgroundColor = "cadetblue";
        spot.style.opacity = result[1].indexOf(coord) / result[1].length + 0.3;
        spot.innerText = result[1].indexOf(coord) + 1;
        spot.style.transform = "scaleY(-1)";
        spot.style.display = "flex";
        spot.style.justifyContent = "center";
        spot.style.alignItems = "center";
      });
      console.log(result[1]);
      xCoord = undefined;
      yCoord = undefined;
      xCoord_START = undefined;
      yCoord_START = undefined;
      document.getElementById("START").setAttribute("id", "");
      squares.forEach(function (s) {
        s.style.pointerEvents = "none";
      });
      randomlyPlaceDOM.style.pointerEvents = "none";
      travailKnightDOM.style.pointerEvents = "none";
    }
  };

  travailKnightDOM.addEventListener("mousedown", function () {
    travailKnight(N);
  });

  var showCoords = function showCoords(result, coord) {
    var index = xyToArray(coord);
    var spot = document.querySelector("[data-num=\"".concat(index, "\"]"));
    spot.style.backgroundColor = "cadetblue";
    spot.style.opacity = result.indexOf(coord) / result.length + 0.2;
    spot.innerText = result.indexOf(coord) + 1;

    if (N > 10) {
      spot.style.fontSize = "8.5px";
    } else if (N > 20) {
      spot.style.fontSize = "5px";
    }

    spot.style.transform = "scaleY(-1)";
    spot.style.display = "flex";
    spot.style.justifyContent = "center";
    spot.style.alignItems = "center";
    squares.forEach(function (s) {
      s.style.pointerEvents = "none";
    });
    randomlyPlaceDOM.style.pointerEvents = "none";
    travailKnightDOM.style.pointerEvents = "none";
  };

  var tourKnight = function tourKnight(boardSize) {
    if (!xCoord && !yCoord) return;
    var startTour = performance.now();
    var result = (0,_KnightsTour__WEBPACK_IMPORTED_MODULE_1__["default"])(xCoord, yCoord, Number(boardSize));
    var endTour = performance.now();
    console.log("KnightsTour performance time for " + "".concat(N) + "x" + "".concat(N) + " board size: " + "".concat(((endTour - startTour) / 1000).toFixed(2), " seconds - RESULT: "));
    performanceTime.innerText = ((endTour - startTour) / 1000).toFixed(2);
    document.getElementById("squares-visited").innerText = result.length;
    result.forEach(function (coord) {
      showCoords(result, coord);
    });
    tourKnightDOM.style.pointerEvents = "none";
    tourKnightWarnsdorffDOM.style.pointerEvents = "none";
    console.log(result);
  };

  tourKnightDOM.addEventListener("mousedown", function () {
    tourKnight(N);
  });

  var tourKnightWarnsdorff = function tourKnightWarnsdorff(boardSize) {
    if (!xCoord && !yCoord) return;
    var startTour = performance.now();
    var result = (0,_KnightsTourWarnsdorff__WEBPACK_IMPORTED_MODULE_2__["default"])(xCoord, yCoord, Number(boardSize));
    var endTour = performance.now();
    console.log("KnightsTourWarnsdorff performance time for " + "".concat(N) + "x" + "".concat(N) + " board size: " + "".concat(((endTour - startTour) / 1000).toFixed(2), " seconds - RESULT: "));
    performanceTime.innerText = ((endTour - startTour) / 1000).toFixed(2);
    document.getElementById("squares-visited").innerText = result.length;
    result.forEach(function (coord) {
      showCoords(result, coord);
    });
    tourKnightDOM.style.pointerEvents = "none";
    tourKnightWarnsdorffDOM.style.pointerEvents = "none";
    console.log(result);
  };

  tourKnightWarnsdorffDOM.addEventListener("mousedown", function () {
    tourKnightWarnsdorff(N);
  });
  return {};
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Arvo&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-y: auto;\n  overflow-x: hidden;\n  font-family: \"Lato\", sans-serif;\n  min-width: 500px;\n  background-color: rgb(248, 248, 255);\n}\n\n.container {\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: rgb(248, 248, 255);\n  display: grid;\n  grid-template: 125px 50px 1fr 50px/1fr;\n}\n\n.header {\n  grid-area: 1/1/2/2;\n  color: rgba(0, 0, 0, 0.7);\n  font-family: \"Arvo\", \"serif\";\n  font-size: 22px;\n  place-self: center;\n}\n\n#display-info {\n  grid-area: 2/1/3/2;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  place-self: center;\n}\n\n.content {\n  display: grid;\n  grid-template: 1fr/0.4fr 0.2fr 0.4fr;\n  grid-area: 3/1/4/2;\n}\n.content .board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.content .board .size-wrapper {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n}\n.content .board .size-wrapper p {\n  margin-bottom: 10px;\n}\n.content .board .size-wrapper .slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 10px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n  border-radius: 7px;\n}\n.content .board .size-wrapper .slider:hover {\n  opacity: 1;\n}\n.content .board .size-wrapper .slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  background: #04aa6d;\n  cursor: pointer;\n}\n.content .board .size-wrapper .slider::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  background: cadetblue;\n  cursor: pointer;\n}\n.content .board #board {\n  transform: rotateX(180deg);\n  place-self: center;\n  height: 300px;\n  width: 300px;\n  outline: 0.5px solid rgba(0, 0, 0, 0.5);\n}\n.content .board #board .even {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.content .board #board .row {\n  width: 100%;\n  display: flex;\n}\n.content .board #board .square {\n  outline: 0.25px dotted ghostwhite;\n}\n.content .board #board .square:hover {\n  background-color: cadetblue;\n  outline: 0.5px dotted ghostwhite;\n  cursor: pointer;\n}\n.content .Knight-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 60px;\n}\n.content .Knight-controls #Knight-img-image {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin-bottom: -40px;\n}\n.content .Knight-controls #randomly-place,\n.content .Knight-controls #reset {\n  border: 0.5px solid rgba(0, 0, 0, 0.5);\n  padding: 7px 12px;\n  border-radius: 7px;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: -40px;\n}\n.content .Knight-controls #randomly-place:hover,\n.content .Knight-controls #reset:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ghostwhite;\n  border: 0.5px solid ghostwhite;\n  cursor: pointer;\n}\n.content .Knight-controls .performance {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.content .Knight-controls #performance-time,\n.content .Knight-controls #squares-visited {\n  margin-bottom: 5px;\n  height: 10px;\n}\n.content .which-Knight {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.content .which-Knight #travail-Knight,\n.content .which-Knight #tour-Knight,\n.content .which-Knight #tour-Knight-Warnsdorff {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 175px;\n  height: 55px;\n  padding: 5px;\n  background-color: rgba(95, 158, 160, 0.831);\n  color: ghostwhite;\n  border-radius: 7px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 13px;\n  text-align: center;\n  line-height: 18px;\n  cursor: pointer;\n}\n.content .which-Knight #travail-Knight:hover,\n.content .which-Knight #tour-Knight:hover,\n.content .which-Knight #tour-Knight-Warnsdorff:hover {\n  background-color: cadetblue;\n  outline: 0.5px dotted ghostwhite;\n  font-weight: 700;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  grid-area: 4/1/5/2;\n}\n.footer .made-by {\n  color: rgb(248, 248, 255);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 13px;\n  padding: 7px;\n  border-radius: 7px;\n  width: 100%;\n}\n.footer .made-by a {\n  text-decoration: none;\n  color: rgb(248, 248, 255);\n}\n.footer .made-by img {\n  height: 16px;\n  transition: transform 0.3s ease-in-out;\n}\n.footer .made-by #github-icon {\n  max-height: 16px;\n}\n.footer .made-by img:hover {\n  transform: rotate(360deg) scale(1.2);\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAWA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AATF;;AAYA;EACE,gBAAA;EACA,kBAAA;EACA,+BAbU;EAcV,gBAAA;EACA,oCApBiB;AAWnB;;AAYA;EACE,iBAAA;EACA,gBAAA;EACA,oCA1BiB;EA2BjB,aAAA;EACA,sCAAA;AATF;;AAYA;EACE,kBAAA;EACA,yBAAA;EACA,4BAAA;EACA,eAAA;EACA,kBAAA;AATF;;AAYA;EACE,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;AATF;;AAYA;EACE,aAAA;EACA,oCAAA;EACA,kBAAA;AATF;AAUE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AARJ;AASI;EACE,yBAAA;EACA,eAAA;AAPN;AAQM;EACE,mBAAA;AANR;AAQM;EACE,wBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,wBAAA;EACA,wBAAA;EACA,kBAAA;AANR;AASM;EACE,UAAA;AAPR;AAUM;EACE,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;AARR;AAWM;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AATR;AAYI;EACE,0BAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,uCAAA;AAVN;AAWM;EACE,oCAAA;AATR;AAWM;EACE,WAAA;EACA,aAAA;AATR;AAWM;EACE,iCAAA;AATR;AAUQ;EACE,2BAAA;EACA,gCAAA;EACA,eAAA;AARV;AAaE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;AAXJ;AAYI;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;AAVN;AAYI;;EAEE,sCAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,oBAAA;AAVN;AAWM;;EACE,oCAAA;EACA,iBAAA;EACA,8BAAA;EACA,eAAA;AARR;AAWI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;AATN;AAWI;;EAEE,kBAAA;EACA,YAAA;AATN;AAYE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAVJ;AAWI;;;EAGE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,2CAAA;EACA,iBAAA;EACA,kBAAA;EACA,+BA3KM;EA4KN,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;AATN;AAUM;;;EACE,2BAAA;EACA,gCAAA;EACA,gBAAA;AANR;;AAYA;EACE,aAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;AATF;AAUE;EACE,yBApMe;EAqMf,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AARJ;AASI;EACE,qBAAA;EACA,yBAhNa;AAyMnB;AASI;EACE,YAAA;EACA,sCAAA;AAPN;AASI;EACE,gBAAA;AAPN;AASI;EACE,oCAAA;AAPN","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Arvo&display=swap\");\n\n$background-color: rgb(248, 248, 255);\n$board-color: rgba(248, 248, 255, 0.9);\n$ship-color: #e2c08c;\n$highlight-color: #6a7aac;\n$header-font: \"Original Surfer\", \"cursive\";\n$main-font: \"Lato\", sans-serif;\n$medium: 760px;\n$small: 500px;\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-y: auto;\n  overflow-x: hidden;\n  font-family: $main-font;\n  min-width: 500px;\n  background-color: $background-color;\n}\n\n.container {\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: $background-color;\n  display: grid;\n  grid-template: 125px 50px 1fr 50px / 1fr;\n}\n\n.header {\n  grid-area: 1 / 1 / 2 / 2;\n  color: rgba(0, 0, 0, 0.7);\n  font-family: \"Arvo\", \"serif\";\n  font-size: 22px;\n  place-self: center;\n}\n\n#display-info {\n  grid-area: 2 / 1 / 3 / 2;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 13px;\n  place-self: center;\n}\n\n.content {\n  display: grid;\n  grid-template: 1fr / 0.4fr 0.2fr 0.4fr;\n  grid-area: 3 / 1 / 4 / 2;\n  .board {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    .size-wrapper {\n      color: rgba(0, 0, 0, 0.7);\n      font-size: 13px;\n      p {\n        margin-bottom: 10px;\n      }\n      .slider {\n        -webkit-appearance: none;\n        width: 100%;\n        height: 10px;\n        background: #d3d3d3;\n        outline: none;\n        opacity: 0.7;\n        -webkit-transition: 0.2s;\n        transition: opacity 0.2s;\n        border-radius: 7px;\n      }\n\n      .slider:hover {\n        opacity: 1;\n      }\n\n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 12px;\n        height: 12px;\n        background: #04aa6d;\n        cursor: pointer;\n      }\n\n      .slider::-moz-range-thumb {\n        width: 12px;\n        height: 12px;\n        background: cadetblue;\n        cursor: pointer;\n      }\n    }\n    #board {\n      transform: rotateX(180deg);\n      place-self: center;\n      height: 300px;\n      width: 300px;\n      outline: 0.5px solid rgba(0, 0, 0, 0.5);\n      .even {\n        background-color: rgba(0, 0, 0, 0.5);\n      }\n      .row {\n        width: 100%;\n        display: flex;\n      }\n      .square {\n        outline: 0.25px dotted ghostwhite;\n        &:hover {\n          background-color: cadetblue;\n          outline: 0.5px dotted ghostwhite;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n  .Knight-controls {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 60px;\n    #Knight-img-image {\n      width: 40px;\n      height: 40px;\n      cursor: pointer;\n      margin-bottom: -40px;\n    }\n    #randomly-place,\n    #reset {\n      border: 0.5px solid rgba(0, 0, 0, 0.5);\n      padding: 7px 12px;\n      border-radius: 7px;\n      font-size: 13px;\n      color: rgba(0, 0, 0, 0.7);\n      margin-bottom: -40px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.5);\n        color: ghostwhite;\n        border: 0.5px solid ghostwhite;\n        cursor: pointer;\n      }\n    }\n    .performance {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      align-items: center;\n      font-size: 13px;\n      color: rgba(0, 0, 0, 0.7);\n    }\n    #performance-time,\n    #squares-visited {\n      margin-bottom: 5px;\n      height: 10px;\n    }\n  }\n  .which-Knight {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    #travail-Knight,\n    #tour-Knight,\n    #tour-Knight-Warnsdorff {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 175px;\n      height: 55px;\n      padding: 5px;\n      background-color: rgba(95, 158, 160, 0.831);\n      color: ghostwhite;\n      border-radius: 7px;\n      font-family: $main-font;\n      font-size: 13px;\n      text-align: center;\n      line-height: 18px;\n      cursor: pointer;\n      &:hover {\n        background-color: cadetblue;\n        outline: 0.5px dotted ghostwhite;\n        font-weight: 700;\n      }\n    }\n  }\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  grid-area: 4 / 1 / 5 / 2;\n  .made-by {\n    color: $background-color;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    font-size: 13px;\n    padding: 7px;\n    border-radius: 7px;\n    width: 100%;\n    a {\n      text-decoration: none;\n      color: $background-color;\n    }\n    img {\n      height: 16px;\n      transition: transform 0.3s ease-in-out;\n    }\n    #github-icon {\n      max-height: 16px;\n    }\n    img:hover {\n      transform: rotate(360deg) scale(1.2);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a99c8d1e4d939aaa2a3.ico";

/***/ }),

/***/ "./src/assets/gitHubIconWhite.png":
/*!****************************************!*\
  !*** ./src/assets/gitHubIconWhite.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d74fd76ac168df7723c.png";

/***/ }),

/***/ "./src/assets/knight.png":
/*!*******************************!*\
  !*** ./src/assets/knight.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "840700f92da70c0dc5ca.png";

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
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/favicon.ico */ "./src/assets/favicon.ico");
/* harmony import */ var _src_assets_gitHubIconWhite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/assets/gitHubIconWhite.png */ "./src/assets/gitHubIconWhite.png");
/* harmony import */ var _assets_knight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/knight.png */ "./src/assets/knight.png");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.scss */ "./src/index.scss");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController */ "./src/scripts/displayController.js");





document.querySelector('[type="image/x-icon"]').href = _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__;
document.getElementById("Knight-img-image").src = _assets_knight_png__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById("github-icon").src = _src_assets_gitHubIconWhite_png__WEBPACK_IMPORTED_MODULE_1__;
_displayController__WEBPACK_IMPORTED_MODULE_4__["default"];
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFNLFFBQVEsQ0FBQ3lELGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEbUMsSUFBaEQsR0FBdURGLGdEQUF2RDtBQUNBMUYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q29ELEdBQTVDLEdBQWtENUQsK0NBQWxEO0FBQ0FPLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q29ELEdBQXZDLEdBQTZDc0MsNERBQTdDO0FBRUFqRywwREFBaUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9DaGVzc1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvS25pZ2h0c1RvdXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL0tuaWdodHNUb3VyV2FybnNkb3JmZi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvS25pZ2h0c1RyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENoZXNzU3F1YXJlID0gKHgsIHksIGRpcykgPT4ge1xuICAvLyAgb2JqZWN0IGZvciBzdG9yaW5nIGEgY2hlc3NTcXVhcmUncyBkYXRhXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgeFBvc2l0aW9uOiB4LFxuICAgIHlQb3NpdGlvbjogeSxcbiAgICBib2FyZFNpemU6IDgsXG4gICAgZGlzOiBkaXMgfHwgMCxcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgYm9hcmQ6IG51bGwsXG4gIH07XG5cbiAgLy8gYWxsIHBvc3NpYmxlIGtuaWdodCBtb3Zlc1xuICBjb25zdCBLTklHSFRfQ29tYm9zID0gW1xuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV0sXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgXTtcblxuICAvLyB1cGRhdGUgdGhlIHNpemUgb2YgdGhlIGdhbWUgYm9hcmRcbiAgY29uc3QgdXBkYXRlQm9hcmRTaXplID0gKG4pID0+IHtcbiAgICBkYXRhLmJvYXJkU2l6ZSA9IG47XG4gIH07XG5cbiAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4gZGF0YS5wYXJlbnQ7XG4gIGNvbnN0IHNldFBhcmVudCA9IChuZXdQYXJlbnQpID0+IChkYXRhLnBhcmVudCA9IG5ld1BhcmVudCk7XG5cbiAgLy8gdXRpbGl0eSBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCB0aGUgbW92ZSBpcyBpbnNpZGUgdGhlIGdhbWUgYm9hcmRcbiAgY29uc3QgY2hlY2tNb3ZlID0gKFxuICAgIFggPSBkYXRhLnhQb3NpdGlvbixcbiAgICBZID0gZGF0YS55UG9zaXRpb24sXG4gICAgTiA9IGRhdGEuYm9hcmRTaXplXG4gICkgPT4ge1xuICAgIGlmIChYID49IDEgJiYgWCA8PSBOICYmIFkgPj0gMSAmJiBZIDw9IE4pIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBhbGwgdmFsaWQgS25pZ2h0IG1vdmVzIChhdCBlYWNoIHBvc2l0aW9uKVxuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld01vdmVzID0gS05JR0hUX0NvbWJvcy5tYXAoKG9mZnNldCkgPT4gW1xuICAgICAgZGF0YS54UG9zaXRpb24gKyBvZmZzZXRbMF0sXG4gICAgICBkYXRhLnlQb3NpdGlvbiArIG9mZnNldFsxXSxcbiAgICBdKTtcbiAgICAvLyByZW1vdmUgZHVwbGljYXRlIHZhbHVlc1xuICAgIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSBuZXcgU2V0KFxuICAgICAgbmV3TW92ZXMubWFwKChtb3ZlKSA9PiBKU09OLnN0cmluZ2lmeShtb3ZlKSlcbiAgICApO1xuICAgIC8vIHJlLW1hcCB0aGUgdmFsdWVzIHRvIGFuIGFycmF5ICYgY2hlY2sgdGhhdCB0aGV5IGFyZSB3aXRoaW4gdGhlIGdhbWUgYm9hcmQgYm91bmRzXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocmVtb3ZlRHVwbGljYXRlcylcbiAgICAgIC5tYXAoKG1vdmUpID0+IEpTT04ucGFyc2UobW92ZSkpXG4gICAgICAuZmlsdGVyKCh4KSA9PiBjaGVja01vdmUoeFswXSwgeFsxXSkpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGRhdGEuYm9hcmQgPSBbLi4uQXJyYXkoZGF0YS5ib2FyZFNpemUpXS5tYXAoKCkgPT5cbiAgICAgIEFycmF5KGRhdGEuYm9hcmRTaXplKS5maWxsKFwiXCIpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgdXBkYXRlQm9hcmRTaXplLFxuICAgIGdldFBhcmVudCxcbiAgICBzZXRQYXJlbnQsXG4gICAgY2hlY2tNb3ZlLFxuICAgIHBvc3NpYmxlTW92ZXMsXG4gICAgY3JlYXRlQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVzc1NxdWFyZTtcbiIsImltcG9ydCBDaGVzc1NxdWFyZSBmcm9tIFwiLi9DaGVzc1NxdWFyZVwiO1xuXG5jb25zdCBLbmlnaHRzVG91ciA9ICh4LCB5LCBOKSA9PiB7XG4gIGNvbnN0IG9yaWdpbiA9IENoZXNzU3F1YXJlKHgsIHkpO1xuICBpZiAoTikgb3JpZ2luLnVwZGF0ZUJvYXJkU2l6ZShOKTtcbiAgaWYgKCFvcmlnaW4uY2hlY2tNb3ZlKCkpIHJldHVybiBudWxsO1xuXG4gIC8vIGluaXRpYWxpemUgYSAyRCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHZpc2l0ZWQgdmVydGV4ZXMgJiBtYXJrIHRoZW0gZmFsc2VcbiAgY29uc3QgbiA9IG9yaWdpbi5kYXRhLmJvYXJkU2l6ZTtcbiAgY29uc3QgdmlzaXRlZCA9IFsuLi5BcnJheShuKV0ubWFwKCgpID0+IEFycmF5KG4pLmZpbGwoZmFsc2UpKTtcblxuICAvLyBmdW5jdGlvbiB0byBjaGVjayBpZiBldmVyeSBDaGVzc1NxdWFyZSBoYXMgYmVlbiB2aXNpdGVkXG4gIGNvbnN0IGV2ZXJ5U3F1YXJlVmlzaXRlZCA9IChib2FyZCkgPT4ge1xuICAgIHJldHVybiBib2FyZC5ldmVyeSgoY29sdW1uKSA9PiBjb2x1bW4uZXZlcnkoKHNxdWFyZSkgPT4gc3F1YXJlKSk7XG4gIH07XG5cbiAgLy8gY3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSB2aXNpdGVkIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgZWFjaCBwYXRoJ3MgcHJvZ3Jlc3NcbiAgY29uc3QgY29weU9mVmlzaXRlZCA9IChib2FyZCkgPT4gYm9hcmQubWFwKChjb2x1bW4pID0+IGNvbHVtbi5zbGljZSgpKTtcblxuICAvLyBmaW5kIEtuaWdodHMgVG91ciBmcm9tIGFueSBbeCwgeV0gY29vcmQgb24gYSBib2FyZCBvZiBOIHggTiBzaXplXG4gIC8vIHVzaW5nIGJhY2t0cmFja2luZy1iYXNlZCByZWN1cnNpb24gdG8gYnVpbGQgdGhlIGNvcnJlY3QgcGF0aCBzb2x1dGlvblxuICBjb25zdCBmaW5kUGF0aCA9ICh4Q29vcmQsIHlDb29yZCwgYm9hcmQsIGJvYXJkU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBDaGVzc1NxdWFyZSh4Q29vcmQsIHlDb29yZCk7XG4gICAgY3VycmVudC51cGRhdGVCb2FyZFNpemUoYm9hcmRTaXplKTtcbiAgICBjb25zdCBib2FyZENvcHkgPSBjb3B5T2ZWaXNpdGVkKGJvYXJkKTtcbiAgICAvLyBtYXJrIHRoZSBzdGFydGluZyBjb29yZHMgYXMgdmlzaXRlZFxuICAgIGJvYXJkQ29weVt4Q29vcmQgLSAxXVt5Q29vcmQgLSAxXSA9IHRydWU7XG4gICAgLy8gZ2V0IGFsbCBwb3NzaWJsZSBtb3ZlcyBmb3IgdGhlIEtuaWdodCBhdCBjdXJyZW50IHBvc2l0aW9uXG4gICAgY29uc3QgbW92ZXMgPSBjdXJyZW50LnBvc3NpYmxlTW92ZXMoKTtcbiAgICBjb25zdCBib2FyZE1vdmVzID0gW107XG4gICAgbW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgaWYgKGJvYXJkQ29weVttb3ZlWzBdIC0gMV1bbW92ZVsxXSAtIDFdID09PSBmYWxzZSkgYm9hcmRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgIH0pO1xuICAgIC8vIGJhc2UgY2FzZSAtIGlmIHRoZXJlIGFyZSBubyBtb3JlIG1vdmVzIGF2YWlsYWJsZSB0byBLbmlnaHQsIGNoZWNrIGJvYXJkIGZvciBjb21wbGV0aW9uXG4gICAgaWYgKGJvYXJkTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBpZiB0aGUgYm9hcmQgaXMgY29tcGxldGUsIHJldHVybiB0aGUgc3VjY2Vzc2Z1bCBwYXRoXG4gICAgICBpZiAoZXZlcnlTcXVhcmVWaXNpdGVkKGJvYXJkQ29weSkpIHJldHVybiBbW3hDb29yZCwgeUNvb3JkXV07XG4gICAgICAvLyBpZiB0aGUgYm9hcmQgaXMgbm90IGNvbXBsZXRlLCBtb3ZlIG9uIHRvIHRoZSBuZXh0IGJyYW5jaFxuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBvdGhlcndpc2UgcmVjdXJzaXZlbHkgY2FsbCBmdW5jdGlvbiB0byBmaW5kIGVhY2ggcG9zc2libGUgbW92ZSBmb3IgbmV4dCBib2FyZE1vdmVcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgW25leHRYLCBuZXh0WV0gb2YgYm9hcmRNb3Zlcykge1xuICAgICAgICBsZXQgcGF0aCA9IGZpbmRQYXRoKG5leHRYLCBuZXh0WSwgYm9hcmRDb3B5LCBib2FyZFNpemUpO1xuICAgICAgICAvLyBpZiBwYXRoIGVxdWF0ZXMgdG8gZmFsc2UsIHRoZSBsb29wIHdpbGwgY29udGludWUgb24gdG8gdGhlIG5leHQgbW92ZVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIC8vIG90aGVyd2lzZSwgd2UgaGF2ZSByZWFjaGVkIGEgc3VjY2Vzc2Z1bCBzb2x1dGlvblxuICAgICAgICAgIC8vIGFkZCB0aGUgY3VycmVudCBjb29yZHMgdG8gdGhlIHBhdGggYW5kIHJldHVybiB0aGUgcGF0aFxuICAgICAgICAgIHBhdGgucHVzaChbeENvb3JkLCB5Q29vcmRdKTtcbiAgICAgICAgICAvLyBjb25zdCB0ZXN0ID0gQ2hlc3NTcXVhcmUocGF0aFswXVswXSwgcGF0aFswXVsxXSkucG9zc2libGVNb3ZlcygpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXG4gIHJldHVybiBmaW5kUGF0aCh4LCB5LCB2aXNpdGVkLCBOIHx8IDgpLnJldmVyc2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodHNUb3VyO1xuIiwiaW1wb3J0IENoZXNzU3F1YXJlIGZyb20gXCIuL0NoZXNzU3F1YXJlXCI7XG5cbi8vIGZpbmQgS25pZ2h0cyBUb3VyIGZyb20gYW55IFt4LCB5XSBjb29yZCBvbiBhIGJvYXJkIG9mIE4geCBOIHNpemVcbi8vIHVzaW5nIFdhcm5zZG9yZmYncyBoZXVyaXN0aWNzICsgYmFja3RyYWNraW5nLWJhc2VkIHJlY3Vyc2lvbiB0byBidWlsZCB0aGUgY29ycmVjdCBwYXRoIHNvbHV0aW9uXG5cbi8vICoqKiAvL1xuXG5jb25zdCBLbmlnaHRzVG91cldhcm5zZG9yZmYgPSAoeCwgeSwgTikgPT4ge1xuICAvLyBPcmlnaW5hbCBLbmlnaHRzIFRvdXIgYWxnb3JpdGhtXG4gIGNvbnN0IG9yaWdpbiA9IENoZXNzU3F1YXJlKHgsIHkpO1xuICBpZiAoTikgb3JpZ2luLnVwZGF0ZUJvYXJkU2l6ZShOKTtcbiAgaWYgKCFvcmlnaW4uY2hlY2tNb3ZlKCkpIHJldHVybiBudWxsO1xuICBjb25zdCBuID0gb3JpZ2luLmRhdGEuYm9hcmRTaXplO1xuICBjb25zdCB2aXNpdGVkID0gWy4uLkFycmF5KG4pXS5tYXAoKCkgPT4gQXJyYXkobikuZmlsbChmYWxzZSkpO1xuICAvLyBoZWxwZXIgZnVuY3Rpb25zXG4gIGNvbnN0IGV2ZXJ5U3F1YXJlVmlzaXRlZCA9IChib2FyZCkgPT4ge1xuICAgIHJldHVybiBib2FyZC5ldmVyeSgoY29sdW1uKSA9PiBjb2x1bW4uZXZlcnkoKHNxdWFyZSkgPT4gc3F1YXJlKSk7XG4gIH07XG4gIGNvbnN0IGNvcHlPZlZpc2l0ZWQgPSAoYm9hcmQpID0+IGJvYXJkLm1hcCgoY29sdW1uKSA9PiBjb2x1bW4uc2xpY2UoKSk7XG4gIGNvbnN0IGdldEJvYXJkTW92ZXMgPSAoYXJyYXksIGJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmRNb3ZlcyA9IFtdO1xuICAgIGFycmF5LmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGlmIChib2FyZFttb3ZlWzBdIC0gMV1bbW92ZVsxXSAtIDFdID09PSBmYWxzZSkgYm9hcmRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgIH0pO1xuICAgIHJldHVybiBib2FyZE1vdmVzO1xuICB9O1xuXG4gIC8vIFR3ZWFraW5nIHRoZSBLbmlnaHRzIFRvdXIgYmFja3RyYWNraW5nIGFsZ29yaXRobSB0byBmb2xsb3cgV2FybnNkb3JmZidzIGhldXJpc3RpY3M6XG4gIC8vIFwiV2hlbiBsb29raW5nIGF0IHRoZSBuZXh0IHBvc3NpYmxlIG1vdmVzLCBwcmVmZXIgdGhlIG5leHQgbW92ZSB3aXRoIHRoZSBmZXdlc3QgcG9zc2libGUgb3B0aW9uc1wiXG4gIGNvbnN0IHdhcm5zZG9yZmYgPSAoS25pZ2h0TW92ZXMsIGJvYXJkLCBib2FyZFNpemUpID0+IHtcbiAgICBjb25zdCB3ZWlnaHRlZE1vdmVzID0gW107XG4gICAgLy8gZmluZCB0aGUgbnVtYmVyIG9mIHBvc3NpYmxlIHBhdGhzIGZvciBlYWNoIEtuaWdodE1vdmUgYW5kIHJldHVybiB0aGVtIGluIG9yZGVyIGZyb20gZmV3ZXN0IHRvIG1vc3RcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBLbmlnaHRNb3Zlcykge1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZSA9IENoZXNzU3F1YXJlKHgsIHkpO1xuICAgICAgY3VycmVudFNxdWFyZS51cGRhdGVCb2FyZFNpemUoYm9hcmRTaXplKTtcbiAgICAgIGNvbnN0IG1vdmVzID0gY3VycmVudFNxdWFyZS5wb3NzaWJsZU1vdmVzKCk7XG4gICAgICBjb25zdCBib2FyZE1vdmVzID0gZ2V0Qm9hcmRNb3Zlcyhtb3ZlcywgYm9hcmQpO1xuICAgICAgY29uc3Qgd2VpZ2h0ID0gYm9hcmRNb3Zlcy5sZW5ndGg7XG4gICAgICB3ZWlnaHRlZE1vdmVzLnB1c2goeyBtb3ZlOiBbeCwgeV0sIHdlaWdodCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdlaWdodGVkTW92ZXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLndlaWdodCAtIGIud2VpZ2h0KVxuICAgICAgLm1hcCgod2VpZ2h0ZWQpID0+IHdlaWdodGVkLm1vdmUpO1xuICB9O1xuXG4gIC8vIG1haW4gZnVuY3Rpb25cbiAgY29uc3QgZmluZFBhdGggPSAoeENvb3JkLCB5Q29vcmQsIGJvYXJkLCBib2FyZFNpemUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gQ2hlc3NTcXVhcmUoeENvb3JkLCB5Q29vcmQpO1xuICAgIGN1cnJlbnQudXBkYXRlQm9hcmRTaXplKGJvYXJkU2l6ZSk7XG4gICAgY29uc3QgYm9hcmRDb3B5ID0gY29weU9mVmlzaXRlZChib2FyZCk7XG4gICAgYm9hcmRDb3B5W3hDb29yZCAtIDFdW3lDb29yZCAtIDFdID0gdHJ1ZTtcbiAgICBjb25zdCBtb3ZlcyA9IGN1cnJlbnQucG9zc2libGVNb3ZlcygpO1xuICAgIGNvbnN0IGJvYXJkTW92ZXMgPSBnZXRCb2FyZE1vdmVzKG1vdmVzLCBib2FyZENvcHkpO1xuICAgIGlmIChib2FyZE1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGV2ZXJ5U3F1YXJlVmlzaXRlZChib2FyZENvcHkpKSByZXR1cm4gW1t4Q29vcmQsIHlDb29yZF1dO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdhcm5zZG9yZmZmTW92ZXMgPSB3YXJuc2RvcmZmKGJvYXJkTW92ZXMsIGJvYXJkQ29weSwgYm9hcmRTaXplKTtcbiAgICAgIGZvciAobGV0IFtuZXh0WCwgbmV4dFldIG9mIHdhcm5zZG9yZmZmTW92ZXMpIHtcbiAgICAgICAgbGV0IHBhdGggPSBmaW5kUGF0aChuZXh0WCwgbmV4dFksIGJvYXJkQ29weSwgYm9hcmRTaXplKTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBwYXRoLnB1c2goW3hDb29yZCwgeUNvb3JkXSk7XG4gICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBmaW5kUGF0aCh4LCB5LCB2aXNpdGVkLCBOIHx8IDgpLnJldmVyc2UoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBLbmlnaHRzVG91cldhcm5zZG9yZmY7XG4iLCJpbXBvcnQgQ2hlc3NTcXVhcmUgZnJvbSBcIi4vQ2hlc3NTcXVhcmVcIjtcblxuLy8gUmV0dXJuIHRoZSBtaW5pbXVtIG51bWJlciBvZiBzdGVwcyByZXF1aXJlZCBmb3IgS25pZ2h0IHRvIHRyYXZlcnNlIGZyb20gc3RhcnQgdG8gZW5kXG5jb25zdCBLbmlnaHRzVHJhdmFpbHMgPSAoc3RhcnQsIGVuZCwgTikgPT4ge1xuICAvLyBjcmVhdGUgbm9kZXMgZnJvbSBzdGFydGluZyBhbmQgZW5kaW5nIGNvb3Jkc1xuICBjb25zdCBvcmlnaW4gPSBDaGVzc1NxdWFyZShzdGFydFswXSwgc3RhcnRbMV0pO1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IENoZXNzU3F1YXJlKGVuZFswXSwgZW5kWzFdKTtcblxuICBvcmlnaW4uc2V0UGFyZW50KFwiSEVBRFwiKTtcblxuICAvLyBpZiBuIHBhcmFtZXRlciBpZiBwcmVzZW50LCBjaGFuZ2UgdGhlIHNpemUgb2Ygb3JpZ2luICYgZGVzdGluYXRpb24gQ2hlc3NTcXVhcmVzXG4gIGlmIChOKSB7XG4gICAgb3JpZ2luLnVwZGF0ZUJvYXJkU2l6ZShOKTtcbiAgICBkZXN0aW5hdGlvbi51cGRhdGVCb2FyZFNpemUoTik7XG4gIH1cblxuICAvLyBpZiBzdGFydCBvciBlbmQgaXMgbm90IHdpdGhpbiB0aGUgZ2FtZSBib2FyZCByZXR1cm4gbnVsbFxuICBpZiAoIW9yaWdpbi5jaGVja01vdmUoKSB8fCAhZGVzdGluYXRpb24uY2hlY2tNb3ZlKCkpIHJldHVybiBudWxsO1xuXG4gIC8vIHN0YXJ0IGEgcXVldWUgYW5kIGluc2VydCB0aGUgYmVnaW5uaW5nIHZlcnRleCBhcyBhIENoZXNzU3F1YXJlXG4gIGNvbnN0IHF1ZXVlID0gW29yaWdpbl07XG4gIC8vIGluaXRpYWxpemUgYSAyRCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHZpc2l0ZWQgdmVydGV4ZXMgJiBtYXJrIHRoZW0gZmFsc2VcbiAgY29uc3QgbiA9IG9yaWdpbi5kYXRhLmJvYXJkU2l6ZTtcbiAgY29uc3QgdmlzaXRlZCA9IFsuLi5BcnJheShuKV0ubWFwKCgpID0+IEFycmF5KG4pLmZpbGwoZmFsc2UpKTtcbiAgLy8gbWFyayBzdGFydGluZyBjb29yZGluYXRlcyBhcyB2aXNpdGVkICh0cnVlKVxuICB2aXNpdGVkW3N0YXJ0WzBdIC0gMV1bc3RhcnRbMV0gLSAxXSA9IHRydWU7XG5cbiAgLy8gbG9vcCB3aGlsZSBxdWV1ZSBpcyBub3QgZW1wdHlcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIHJlbW92ZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIHF1ZXVlIChjdXJyZW50KVxuICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuICAgIC8vIGJhc2UgY2FzZSAtIGlmIGN1cnJlbnQgY29vcmRzID09PSBkZXN0aW5hdGlvbiBjb29yZHMsIHJldHVybiBjdXJyZW50IGRpc3RhbmNlXG4gICAgaWYgKFxuICAgICAgY3VycmVudC5kYXRhLnhQb3NpdGlvbiA9PT0gZGVzdGluYXRpb24uZGF0YS54UG9zaXRpb24gJiZcbiAgICAgIGN1cnJlbnQuZGF0YS55UG9zaXRpb24gPT09IGRlc3RpbmF0aW9uLmRhdGEueVBvc2l0aW9uXG4gICAgKSB7XG4gICAgICAvLyBnZXQgcGF0aCBmb3Igc2hvcnRlc3Qgcm91dGVcbiAgICAgIC8vIHN0YXJ0IGEgcGF0aCB2YXIgdG8gc2F2ZSB0cmF2YWlsIHBhdGhcbiAgICAgIGRlc3RpbmF0aW9uLnNldFBhcmVudChjdXJyZW50LmRhdGEucGFyZW50KTtcbiAgICAgIGNvbnN0IHBhdGggPSBbZGVzdGluYXRpb25dO1xuICAgICAgd2hpbGUgKCFwYXRoLmluY2x1ZGVzKG9yaWdpbikpIHtcbiAgICAgICAgY29uc3QgcHJldlNxdWFyZSA9IHBhdGhbMF0uZ2V0UGFyZW50KCk7XG4gICAgICAgIHBhdGgudW5zaGlmdChwcmV2U3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJldHVyblBhdGggPSBbXTtcbiAgICAgIHBhdGguZm9yRWFjaCgobW92ZSkgPT5cbiAgICAgICAgcmV0dXJuUGF0aC5wdXNoKFttb3ZlLmRhdGEueFBvc2l0aW9uLCBtb3ZlLmRhdGEueVBvc2l0aW9uXSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gW2N1cnJlbnQuZGF0YS5kaXMsIHJldHVyblBhdGhdO1xuICAgIH1cbiAgICAvLyBmb3JFYWNoIHBvc3NpYmxlIHNwYWNlIHRoYXQgdGhlIEtuaWdodCBjYW4gbW92ZSB0byBmcm9tIGl0cyBjdXJyZW50IHNxdWFyZVxuICAgIGN1cnJlbnQucG9zc2libGVNb3ZlcygpLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaGFzIG5vdCBiZWVuIHZpc2l0ZWQgYmVmb3JlXG4gICAgICBpZiAoIXZpc2l0ZWRbbW92ZVswXSAtIDFdW21vdmVbMV0gLSAxXSkge1xuICAgICAgICAvLyBtYXJrIHRoZSBzcXVhcmUgYXMgdmlzaXRlZCAodHJ1ZSlcbiAgICAgICAgdmlzaXRlZFttb3ZlWzBdIC0gMV1bbW92ZVsxXSAtIDFdID0gdHJ1ZTtcbiAgICAgICAgLy8gcHVzaCB0aGF0IHNxdWFyZSB0byB0aGUgcXVldWUgd2l0aCBhbiBpbmNyZW1lbnRlZCBkaXN0YW5jZSBvZiArIDEsXG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IENoZXNzU3F1YXJlKG1vdmVbMF0sIG1vdmVbMV0sIGN1cnJlbnQuZGF0YS5kaXMgKyAxKTtcbiAgICAgICAgLy8gY2hhbmdpbmcgdGhlIHNpemUgb2YgZWFjaCBDaGVzc1NxdWFyZSBpZiBuIHBhcmFtZXRlciBpcyBwcmVzZW50XG4gICAgICAgIGlmIChOKSBuZXdTcXVhcmUudXBkYXRlQm9hcmRTaXplKE4pO1xuICAgICAgICAvLyBzZXQgcGFyZW50IHBvaW50ZXIgdG8gY3VycmVudCBub2RlXG4gICAgICAgIG5ld1NxdWFyZS5zZXRQYXJlbnQoY3VycmVudCk7XG4gICAgICAgIHF1ZXVlLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBvdGhlcndpc2Ugbm90IHBvc3NpYmxlIC0gcmV0dXJuIGluZmluaXR5XG4gIHJldHVybiBJbmZpbml0eTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodHNUcmF2YWlscztcbiIsImltcG9ydCBLbmlnaHRzVHJhdmFpbHMgZnJvbSBcIi4vS25pZ2h0c1RyYXZhaWxzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXIgZnJvbSBcIi4vS25pZ2h0c1RvdXJcIjtcbmltcG9ydCBLbmlnaHRzVG91cldhcm5zZG9yZmYgZnJvbSBcIi4vS25pZ2h0c1RvdXJXYXJuc2RvcmZmXCI7XG5pbXBvcnQgS25pZ2h0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2tuaWdodC5wbmdcIjtcblxuLy8gU2ltcGxlIG1vZHVsZSB0byBwbGF5IHdpdGggZGlmZmVyZW50IGJvYXJkIHNpemVzIGFuZCByZXN1bHRzXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy8gdmFyaWFibGUgdG8gaG9sZCBib2FyZFNpemVcbiAgbGV0IE4gPSA2O1xuXG4gIC8vIHZhcmlhYmxlcyB0byBob2xkIHggJiB5IGNvb3Jkc1xuICBsZXQgeENvb3JkO1xuICBsZXQgeUNvb3JkO1xuICBsZXQgeENvb3JkX1NUQVJUO1xuICBsZXQgeUNvb3JkX1NUQVJUO1xuXG4gIGNvbnN0IHVwZGF0ZU4gPSAobmV3TikgPT4ge1xuICAgIE4gPSBuZXdOO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgY29uc3QgYm9hcmRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlSYW5nZVwiKTtcbiAgbGV0IHNxdWFyZXM7XG5cbiAgLy8gc2V0IHNsaWRlciB0byBzdGFydFxuICBib2FyZFJhbmdlLnZhbHVlID0gNjtcbiAgY29uc3QgdXBkYXRlQm9hcmRTaXplID0gKCkgPT4ge1xuICAgIHJlbW92ZUJvYXJkKCk7XG4gICAgdXBkYXRlTihib2FyZFJhbmdlLnZhbHVlKTtcbiAgICByZW5kZXJCb2FyZCgpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgcy5zdHlsZS5oZWlnaHQgPSAzMDAgLyBgJHtib2FyZFJhbmdlLnZhbHVlfWAgKyBcInB4XCI7XG4gICAgICBzLnN0eWxlLndpZHRoID0gMzAwIC8gYCR7Ym9hcmRSYW5nZS52YWx1ZX1gICsgXCJweFwiO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQtc2l6ZVwiKS50ZXh0Q29udGVudCA9XG4gICAgICBib2FyZFJhbmdlLnZhbHVlICsgXCIgeCBcIiArIGJvYXJkUmFuZ2UudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJLbmlnaHQtaW1nLWltYWdlXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICByYW5kb21seVBsYWNlRE9NLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuICAgIHRyYXZhaWxLbmlnaHRET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG4gIH07XG4gIGJvYXJkUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVwZGF0ZUJvYXJkU2l6ZSk7XG5cbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE47IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQubnVtID0gY291bnRlcjtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBzcXVhcmUuc3R5bGUuaGVpZ2h0ID0gMzAwIC8gYCR7Ym9hcmRSYW5nZS52YWx1ZX1gICsgXCJweFwiO1xuICAgICAgICBzcXVhcmUuc3R5bGUud2lkdGggPSAzMDAgLyBgJHtib2FyZFJhbmdlLnZhbHVlfWAgKyBcInB4XCI7XG4gICAgICAgIGkgJSAyID09PSAwXG4gICAgICAgICAgPyBqICUgMiA9PT0gMFxuICAgICAgICAgICAgPyBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm9kZFwiKVxuICAgICAgICAgICAgOiBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImV2ZW5cIilcbiAgICAgICAgICA6IGogJSAyID09PSAwXG4gICAgICAgICAgPyBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImV2ZW5cIilcbiAgICAgICAgICA6IHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwib2RkXCIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkRE9NLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIHNxdWFyZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzcXVhcmVcIikpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IGFkZEtuaWdodFRvQm9hcmQocykpO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXJCb2FyZCgpO1xuXG4gIGNvbnN0IHJlbW92ZUJvYXJkID0gKCkgPT4ge1xuICAgIHdoaWxlIChib2FyZERPTS5maXJzdENoaWxkKSB7XG4gICAgICBib2FyZERPTS5yZW1vdmVDaGlsZChib2FyZERPTS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICAvLyB0dXJuIDEtRCBhcnJheSBpbnRvIFt4LCB5XSBjb29yZHNcbiAgY29uc3QgYXJyYXlUb1hZID0gKHNxdWFyZSkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICBzcXVhcmUuZGF0YXNldC5udW0gJSBOID09PSAwID8gTnVtYmVyKE4pIDogc3F1YXJlLmRhdGFzZXQubnVtICUgTixcbiAgICAgIE1hdGgucm91bmQoTWF0aC5jZWlsKE51bWJlcihzcXVhcmUuZGF0YXNldC5udW0pIC8gTikpLFxuICAgIF07XG4gIH07XG5cbiAgLy8gdHVybiBbeCwgeV0gY29vcmRzIGludG8gMS1EIGFycmF5XG4gIGNvbnN0IHh5VG9BcnJheSA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBjb29yZFsxXSAqIE4gKyBjb29yZFswXSAtIE47XG4gIH07XG5cbiAgY29uc3QgYWRkS25pZ2h0VG9Cb2FyZCA9IChzKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gYXJyYXlUb1hZKHMpO1xuICAgIHhDb29yZCA9IGNvb3Jkc1swXTtcbiAgICB5Q29vcmQgPSBjb29yZHNbMV07XG4gICAgcGxhY2VLbmlnaHQocyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tTnVtYmVyVXBUbyA9IChtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIDEgKyAxKSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGtuaWdodEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIktuaWdodC1pbWctaW1hZ2VcIik7XG4gIGNvbnN0IHBsYWNlS25pZ2h0ID0gKHNwb3QpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIikucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpLnJlbW92ZSgpO1xuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU1RBUlRcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTVEFSVFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgIFwicmdiYSg5NSwgMTU4LCAxNjAsIDAuODMxKVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdHJhbnNmb3JtID0gXCIgcm90YXRlWCgxODBkZWcpXCI7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImljb25cIik7XG4gICAgaWNvbi5zcmMgPSBLbmlnaHRJY29uO1xuICAgIGljb24uc3R5bGUudHJhbnNmb3JtICs9IHRyYW5zZm9ybTtcbiAgICBpY29uLnN0eWxlLmhlaWdodCA9IDMwMCAvIE4gKyBcInB4XCI7XG4gICAgaWNvbi5zdHlsZS53aWR0aCA9IDMwMCAvIE4gKyBcInB4XCI7XG4gICAgc3BvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImNhZGV0Ymx1ZVwiO1xuICAgIHNwb3QuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAga25pZ2h0SWNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAga25pZ2h0SWNvbi5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgfTtcblxuICBjb25zdCByYW5kb21seVBsYWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVNwb3QgPSBnZXRSYW5kb21OdW1iZXJVcFRvKE4gKiBOKTtcbiAgICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtPVwiJHtyYW5kb21TcG90fVwiXWApO1xuICAgIGNvbnN0IGNvb3JkcyA9IGFycmF5VG9YWShzcG90KTtcbiAgICB4Q29vcmQgPSBjb29yZHNbMF07XG4gICAgeUNvb3JkID0gY29vcmRzWzFdO1xuICAgIHBsYWNlS25pZ2h0KHNwb3QpO1xuICB9O1xuICBjb25zdCByYW5kb21seVBsYWNlRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21seS1wbGFjZVwiKTtcbiAgcmFuZG9tbHlQbGFjZURPTS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJhbmRvbWx5UGxhY2UpO1xuXG4gIGNvbnN0IGRyYWdBbmREcm9wID0gKCkgPT4ge1xuICAgIGJvYXJkRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIGJvYXJkRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBjb29yZHMgPSBhcnJheVRvWFkoZS50YXJnZXQpO1xuICAgICAgeENvb3JkID0gY29vcmRzWzBdO1xuICAgICAgeUNvb3JkID0gY29vcmRzWzFdO1xuICAgICAgcGxhY2VLbmlnaHQoZS50YXJnZXQpO1xuICAgIH0pO1xuICB9O1xuICBkcmFnQW5kRHJvcCgpO1xuXG4gIGNvbnN0IHJlcGxhY2VLbmlnaHRJY29ucyA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIikucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpLnJlbW92ZSgpO1xuICAgICAga25pZ2h0SWNvbi5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIGtuaWdodEljb24uc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGVyZm9ybWFuY2VUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJmb3JtYW5jZS10aW1lXCIpO1xuICBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1pbmZvXCIpLmlubmVyVGV4dCA9XG4gICAgICBcIkRyYWcgdGhlIEtuaWdodCBvbnRvIHRoZSBjaGVzc2JvYXJkIG9yIGNsaWNrIG9uZSBvZiB0aGUgYnV0dG9ucyBiZWxvdyB0byBnZXQgc3RhcnRlZC4uLlwiO1xuICAgIHJlcGxhY2VLbmlnaHRJY29ucygpO1xuICAgIHJlbW92ZUJvYXJkKCk7XG4gICAgcmVuZGVyQm9hcmQoKTtcbiAgICByYW5kb21seVBsYWNlRE9NLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuICAgIHRyYXZhaWxLbmlnaHRET00uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICB0cmF2YWlsS25pZ2h0RE9NLnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgIHRvdXJLbmlnaHRET00uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICB0b3VyS25pZ2h0RE9NLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuICAgIHRvdXJLbmlnaHRXYXJuc2RvcmZmRE9NLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgdG91cktuaWdodFdhcm5zZG9yZmZET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG4gICAgeENvb3JkID0gdW5kZWZpbmVkO1xuICAgIHlDb29yZCA9IHVuZGVmaW5lZDtcbiAgICB4Q29vcmRfU1RBUlQgPSB1bmRlZmluZWQ7XG4gICAgeUNvb3JkX1NUQVJUID0gdW5kZWZpbmVkO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3F1YXJlcy12aXNpdGVkXCIpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgcGVyZm9ybWFuY2VUaW1lLmlubmVyVGV4dCA9IFwiXCI7XG4gICAga25pZ2h0SWNvbi5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICBib2FyZFJhbmdlLnZhbHVlID0gNjtcbiAgICB1cGRhdGVCb2FyZFNpemUoKTtcbiAgfTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldFwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsZWFyQm9hcmQpO1xuXG4gIGNvbnN0IHRyYXZhaWxLbmlnaHRET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZhaWwtS25pZ2h0XCIpO1xuICBjb25zdCB0b3VyS25pZ2h0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VyLUtuaWdodFwiKTtcbiAgY29uc3QgdG91cktuaWdodFdhcm5zZG9yZmZET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInRvdXItS25pZ2h0LVdhcm5zZG9yZmZcIlxuICApO1xuICBjb25zdCB0cmF2YWlsS25pZ2h0ID0gKGJvYXJkU2l6ZSkgPT4ge1xuICAgIGlmICh4Q29vcmQgJiYgeUNvb3JkICYmICF4Q29vcmRfU1RBUlQgJiYgIXlDb29yZF9TVEFSVCkge1xuICAgICAgeENvb3JkX1NUQVJUID0geENvb3JkO1xuICAgICAgeUNvb3JkX1NUQVJUID0geUNvb3JkO1xuICAgICAgeENvb3JkID0gdW5kZWZpbmVkO1xuICAgICAgeUNvb3JkID0gdW5kZWZpbmVkO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LWluZm9cIikuaW5uZXJUZXh0ID1cbiAgICAgICAgXCJDaG9vc2UgYW4gZW5kaW5nIHNxdWFyZSBmb3IgdGhlIEtuaWdodFwiO1xuICAgICAgY29uc3QgaW5kZXggPSB4eVRvQXJyYXkoW3hDb29yZF9TVEFSVCwgeUNvb3JkX1NUQVJUXSk7XG4gICAgICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtPVwiJHtpbmRleH1cIl1gKTtcbiAgICAgIHNwb3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJTVEFSVFwiKTtcbiAgICAgIHNwb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDk1LCAxNTgsIDE2MCwgMC44MzEpXCI7XG4gICAgICB0cmF2YWlsS25pZ2h0RE9NLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY2FkZXRibHVlXCI7XG4gICAgICB0cmF2YWlsS25pZ2h0RE9NLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgIHRvdXJLbmlnaHRET00uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJnYWluc2Jvcm9cIjtcbiAgICAgIHRvdXJLbmlnaHRET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgdG91cktuaWdodFdhcm5zZG9yZmZET00uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJnYWluc2Jvcm9cIjtcbiAgICAgIHRvdXJLbmlnaHRXYXJuc2RvcmZmRE9NLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgeENvb3JkICYmXG4gICAgICB5Q29vcmQgJiZcbiAgICAgIHhDb29yZF9TVEFSVCAmJlxuICAgICAgeUNvb3JkX1NUQVJUICYmXG4gICAgICB4eVRvQXJyYXkoW3hDb29yZCwgeUNvb3JkXSkgIT09IHh5VG9BcnJheShbeENvb3JkX1NUQVJULCB5Q29vcmRfU1RBUlRdKVxuICAgICkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LWluZm9cIikuaW5uZXJUZXh0ID1cbiAgICAgICAgXCJLbmlnaHQgaXMgdHJhdmFpbGluZy4uLlwiO1xuICAgICAgY29uc3Qgc3RhcnRUcmF2YWlscyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gS25pZ2h0c1RyYXZhaWxzKFxuICAgICAgICBbeENvb3JkX1NUQVJULCB5Q29vcmRfU1RBUlRdLFxuICAgICAgICBbeENvb3JkLCB5Q29vcmRdLFxuICAgICAgICBOdW1iZXIoYm9hcmRTaXplKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGVuZFRyYXZhaWxzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJLbmlnaHRzVHJhdmFpbHMgcGVyZm9ybWFuY2UgdGltZSBmb3IgXCIgK1xuICAgICAgICAgIGAke059YCArXG4gICAgICAgICAgXCJ4XCIgK1xuICAgICAgICAgIGAke059YCArXG4gICAgICAgICAgXCIgYm9hcmQgc2l6ZTogXCIgK1xuICAgICAgICAgIGAkeygoZW5kVHJhdmFpbHMgLSBzdGFydFRyYXZhaWxzKSAvIDEwMDApLnRvRml4ZWQoXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKX0gc2Vjb25kcyAtIFJFU1VMVDogYFxuICAgICAgKTtcbiAgICAgIHBlcmZvcm1hbmNlVGltZS5pbm5lclRleHQgPVxuICAgICAgICAoKGVuZFRyYXZhaWxzIC0gc3RhcnRUcmF2YWlscykgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCIgc2Vjb25kc1wiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmVzLXZpc2l0ZWRcIikuaW5uZXJUZXh0ID0gcmVzdWx0WzFdLmxlbmd0aDtcbiAgICAgIHJlc3VsdFsxXS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHh5VG9BcnJheShjb29yZCk7XG4gICAgICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW09XCIke2luZGV4fVwiXWApO1xuICAgICAgICBzcG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY2FkZXRibHVlXCI7XG4gICAgICAgIHNwb3Quc3R5bGUub3BhY2l0eSA9IHJlc3VsdFsxXS5pbmRleE9mKGNvb3JkKSAvIHJlc3VsdFsxXS5sZW5ndGggKyAwLjM7XG4gICAgICAgIHNwb3QuaW5uZXJUZXh0ID0gcmVzdWx0WzFdLmluZGV4T2YoY29vcmQpICsgMTtcbiAgICAgICAgc3BvdC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWSgtMSlcIjtcbiAgICAgICAgc3BvdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHNwb3Quc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgICAgICBzcG90LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMV0pO1xuICAgICAgeENvb3JkID0gdW5kZWZpbmVkO1xuICAgICAgeUNvb3JkID0gdW5kZWZpbmVkO1xuICAgICAgeENvb3JkX1NUQVJUID0gdW5kZWZpbmVkO1xuICAgICAgeUNvb3JkX1NUQVJUID0gdW5kZWZpbmVkO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTVEFSVFwiKS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcbiAgICAgIHNxdWFyZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgICAgcmFuZG9tbHlQbGFjZURPTS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICB0cmF2YWlsS25pZ2h0RE9NLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH07XG4gIHRyYXZhaWxLbmlnaHRET00uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgdHJhdmFpbEtuaWdodChOKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2hvd0Nvb3JkcyA9IChyZXN1bHQsIGNvb3JkKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB4eVRvQXJyYXkoY29vcmQpO1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW09XCIke2luZGV4fVwiXWApO1xuICAgIHNwb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjYWRldGJsdWVcIjtcbiAgICBzcG90LnN0eWxlLm9wYWNpdHkgPSByZXN1bHQuaW5kZXhPZihjb29yZCkgLyByZXN1bHQubGVuZ3RoICsgMC4yO1xuICAgIHNwb3QuaW5uZXJUZXh0ID0gcmVzdWx0LmluZGV4T2YoY29vcmQpICsgMTtcbiAgICBpZiAoTiA+IDEwKSB7XG4gICAgICBzcG90LnN0eWxlLmZvbnRTaXplID0gXCI4LjVweFwiO1xuICAgIH0gZWxzZSBpZiAoTiA+IDIwKSB7XG4gICAgICBzcG90LnN0eWxlLmZvbnRTaXplID0gXCI1cHhcIjtcbiAgICB9XG4gICAgc3BvdC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWSgtMSlcIjtcbiAgICBzcG90LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBzcG90LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBzcG90LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgcmFuZG9tbHlQbGFjZURPTS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdHJhdmFpbEtuaWdodERPTS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgdG91cktuaWdodCA9IChib2FyZFNpemUpID0+IHtcbiAgICBpZiAoIXhDb29yZCAmJiAheUNvb3JkKSByZXR1cm47XG4gICAgY29uc3Qgc3RhcnRUb3VyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gS25pZ2h0c1RvdXIoeENvb3JkLCB5Q29vcmQsIE51bWJlcihib2FyZFNpemUpKTtcbiAgICBjb25zdCBlbmRUb3VyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIktuaWdodHNUb3VyIHBlcmZvcm1hbmNlIHRpbWUgZm9yIFwiICtcbiAgICAgICAgYCR7Tn1gICtcbiAgICAgICAgXCJ4XCIgK1xuICAgICAgICBgJHtOfWAgK1xuICAgICAgICBcIiBib2FyZCBzaXplOiBcIiArXG4gICAgICAgIGAkeygoZW5kVG91ciAtIHN0YXJ0VG91cikgLyAxMDAwKS50b0ZpeGVkKDIpfSBzZWNvbmRzIC0gUkVTVUxUOiBgXG4gICAgKTtcbiAgICBwZXJmb3JtYW5jZVRpbWUuaW5uZXJUZXh0ID0gKChlbmRUb3VyIC0gc3RhcnRUb3VyKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmVzLXZpc2l0ZWRcIikuaW5uZXJUZXh0ID0gcmVzdWx0Lmxlbmd0aDtcbiAgICByZXN1bHQuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIHNob3dDb29yZHMocmVzdWx0LCBjb29yZCk7XG4gICAgfSk7XG4gICAgdG91cktuaWdodERPTS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdG91cktuaWdodFdhcm5zZG9yZmZET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH07XG4gIHRvdXJLbmlnaHRET00uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgdG91cktuaWdodChOKTtcbiAgfSk7XG5cbiAgY29uc3QgdG91cktuaWdodFdhcm5zZG9yZmYgPSAoYm9hcmRTaXplKSA9PiB7XG4gICAgaWYgKCF4Q29vcmQgJiYgIXlDb29yZCkgcmV0dXJuO1xuICAgIGNvbnN0IHN0YXJ0VG91ciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IHJlc3VsdCA9IEtuaWdodHNUb3VyV2FybnNkb3JmZih4Q29vcmQsIHlDb29yZCwgTnVtYmVyKGJvYXJkU2l6ZSkpO1xuICAgIGNvbnN0IGVuZFRvdXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiS25pZ2h0c1RvdXJXYXJuc2RvcmZmIHBlcmZvcm1hbmNlIHRpbWUgZm9yIFwiICtcbiAgICAgICAgYCR7Tn1gICtcbiAgICAgICAgXCJ4XCIgK1xuICAgICAgICBgJHtOfWAgK1xuICAgICAgICBcIiBib2FyZCBzaXplOiBcIiArXG4gICAgICAgIGAkeygoZW5kVG91ciAtIHN0YXJ0VG91cikgLyAxMDAwKS50b0ZpeGVkKDIpfSBzZWNvbmRzIC0gUkVTVUxUOiBgXG4gICAgKTtcbiAgICBwZXJmb3JtYW5jZVRpbWUuaW5uZXJUZXh0ID0gKChlbmRUb3VyIC0gc3RhcnRUb3VyKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmVzLXZpc2l0ZWRcIikuaW5uZXJUZXh0ID0gcmVzdWx0Lmxlbmd0aDtcbiAgICByZXN1bHQuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIHNob3dDb29yZHMocmVzdWx0LCBjb29yZCk7XG4gICAgfSk7XG4gICAgdG91cktuaWdodERPTS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdG91cktuaWdodFdhcm5zZG9yZmZET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH07XG4gIHRvdXJLbmlnaHRXYXJuc2RvcmZmRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgIHRvdXJLbmlnaHRXYXJuc2RvcmZmKE4pO1xuICB9KTtcblxuICByZXR1cm4ge307XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJ2byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjU1KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMTI1cHggNTBweCAxZnIgNTBweC8xZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJ2b1xcXCIsIFxcXCJzZXJpZlxcXCI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNkaXNwbGF5LWluZm8ge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8wLjRmciAwLjJmciAwLjRmcjtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuLmNvbnRlbnQgLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uY29udGVudCAuYm9hcmQgLnNpemUtd3JhcHBlciB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uY29udGVudCAuYm9hcmQgLnNpemUtd3JhcHBlciBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5jb250ZW50IC5ib2FyZCAuc2l6ZS13cmFwcGVyIC5zbGlkZXIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuLmNvbnRlbnQgLmJvYXJkIC5zaXplLXdyYXBwZXIgLnNsaWRlcjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uY29udGVudCAuYm9hcmQgLnNpemUtd3JhcHBlciAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiAjMDRhYTZkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGVudCAuYm9hcmQgLnNpemUtd3JhcHBlciAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGVudCAuYm9hcmQgI2JvYXJkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmNvbnRlbnQgLmJvYXJkICNib2FyZCAuZXZlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5jb250ZW50IC5ib2FyZCAjYm9hcmQgLnJvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250ZW50IC5ib2FyZCAjYm9hcmQgLnNxdWFyZSB7XFxuICBvdXRsaW5lOiAwLjI1cHggZG90dGVkIGdob3N0d2hpdGU7XFxufVxcbi5jb250ZW50IC5ib2FyZCAjYm9hcmQgLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICBvdXRsaW5lOiAwLjVweCBkb3R0ZWQgZ2hvc3R3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRlbnQgLktuaWdodC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNjBweDtcXG59XFxuLmNvbnRlbnQgLktuaWdodC1jb250cm9scyAjS25pZ2h0LWltZy1pbWFnZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbn1cXG4uY29udGVudCAuS25pZ2h0LWNvbnRyb2xzICNyYW5kb21seS1wbGFjZSxcXG4uY29udGVudCAuS25pZ2h0LWNvbnRyb2xzICNyZXNldCB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbn1cXG4uY29udGVudCAuS25pZ2h0LWNvbnRyb2xzICNyYW5kb21seS1wbGFjZTpob3ZlcixcXG4uY29udGVudCAuS25pZ2h0LWNvbnRyb2xzICNyZXNldDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgZ2hvc3R3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRlbnQgLktuaWdodC1jb250cm9scyAucGVyZm9ybWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuLmNvbnRlbnQgLktuaWdodC1jb250cm9scyAjcGVyZm9ybWFuY2UtdGltZSxcXG4uY29udGVudCAuS25pZ2h0LWNvbnRyb2xzICNzcXVhcmVzLXZpc2l0ZWQge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4uY29udGVudCAud2hpY2gtS25pZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uY29udGVudCAud2hpY2gtS25pZ2h0ICN0cmF2YWlsLUtuaWdodCxcXG4uY29udGVudCAud2hpY2gtS25pZ2h0ICN0b3VyLUtuaWdodCxcXG4uY29udGVudCAud2hpY2gtS25pZ2h0ICN0b3VyLUtuaWdodC1XYXJuc2RvcmZmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTc1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC44MzEpO1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RyYXZhaWwtS25pZ2h0OmhvdmVyLFxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RvdXItS25pZ2h0OmhvdmVyLFxcbi5jb250ZW50IC53aGljaC1LbmlnaHQgI3RvdXItS25pZ2h0LVdhcm5zZG9yZmY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgb3V0bGluZTogMC41cHggZG90dGVkIGdob3N0d2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG4uZm9vdGVyIC5tYWRlLWJ5IHtcXG4gIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9vdGVyIC5tYWRlLWJ5IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJnYigyNDgsIDI0OCwgMjU1KTtcXG59XFxuLmZvb3RlciAubWFkZS1ieSBpbWcge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb290ZXIgLm1hZGUtYnkgI2dpdGh1Yi1pY29uIHtcXG4gIG1heC1oZWlnaHQ6IDE2cHg7XFxufVxcbi5mb290ZXIgLm1hZGUtYnkgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBYlU7RUFjVixnQkFBQTtFQUNBLG9DQXBCaUI7QUFXbkI7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBMUJpQjtFQTJCakIsYUFBQTtFQUNBLHNDQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBVEY7QUFVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBUko7QUFTSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBUU07RUFDRSxtQkFBQTtBQU5SO0FBUU07RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBU007RUFDRSxVQUFBO0FBUFI7QUFVTTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJSO0FBV007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVRSO0FBWUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQVZOO0FBV007RUFDRSxvQ0FBQTtBQVRSO0FBV007RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVRSO0FBV007RUFDRSxpQ0FBQTtBQVRSO0FBVVE7RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVJWO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVhKO0FBWUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVZOO0FBWUk7O0VBRUUsc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFWTjtBQVdNOztFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFSUjtBQVdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVE47QUFXSTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUFUTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFWSjtBQVdJOzs7RUFHRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQTNLTTtFQTRLTixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFUTjtBQVVNOzs7RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFOUjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVVFO0VBQ0UseUJBcE1lO0VBcU1mLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFSSjtBQVNJO0VBQ0UscUJBQUE7RUFDQSx5QkFoTmE7QUF5TW5CO0FBU0k7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7QUFQTjtBQVNJO0VBQ0UsZ0JBQUE7QUFQTjtBQVNJO0VBQ0Usb0NBQUE7QUFQTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcnZvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI1NSk7XFxuJGJvYXJkLWNvbG9yOiByZ2JhKDI0OCwgMjQ4LCAyNTUsIDAuOSk7XFxuJHNoaXAtY29sb3I6ICNlMmMwOGM7XFxuJGhpZ2hsaWdodC1jb2xvcjogIzZhN2FhYztcXG4kaGVhZGVyLWZvbnQ6IFxcXCJPcmlnaW5hbCBTdXJmZXJcXFwiLCBcXFwiY3Vyc2l2ZVxcXCI7XFxuJG1haW4tZm9udDogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiRtZWRpdW06IDc2MHB4O1xcbiRzbWFsbDogNTAwcHg7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMTI1cHggNTBweCAxZnIgNTBweCAvIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcnZvXFxcIiwgXFxcInNlcmlmXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2Rpc3BsYXktaW5mbyB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMC40ZnIgMC4yZnIgMC40ZnI7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICAuYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICAuc2l6ZS13cmFwcGVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICBwIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgfVxcbiAgICAgIC5zbGlkZXIge1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICB9XFxuXFxuICAgICAgLnNsaWRlcjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDRhYTZkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjYm9hcmQge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgLmV2ZW4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgIH1cXG4gICAgICAucm93IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICB9XFxuICAgICAgLnNxdWFyZSB7XFxuICAgICAgICBvdXRsaW5lOiAwLjI1cHggZG90dGVkIGdob3N0d2hpdGU7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICAgICAgICBvdXRsaW5lOiAwLjVweCBkb3R0ZWQgZ2hvc3R3aGl0ZTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLktuaWdodC1jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDYwcHg7XFxuICAgICNLbmlnaHQtaW1nLWltYWdlIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgICB9XFxuICAgICNyYW5kb21seS1wbGFjZSxcXG4gICAgI3Jlc2V0IHtcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICBwYWRkaW5nOiA3cHggMTJweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgZ2hvc3R3aGl0ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnBlcmZvcm1hbmNlIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIH1cXG4gICAgI3BlcmZvcm1hbmNlLXRpbWUsXFxuICAgICNzcXVhcmVzLXZpc2l0ZWQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gIH1cXG4gIC53aGljaC1LbmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICAjdHJhdmFpbC1LbmlnaHQsXFxuICAgICN0b3VyLUtuaWdodCxcXG4gICAgI3RvdXItS25pZ2h0LVdhcm5zZG9yZmYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTc1cHg7XFxuICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC44MzEpO1xcbiAgICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXG4gICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgICAgIG91dGxpbmU6IDAuNXB4IGRvdHRlZCBnaG9zdHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gMjtcXG4gIC5tYWRlLWJ5IHtcXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgfVxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAjZ2l0aHViLWljb24ge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XFxuICAgIH1cXG4gICAgaW1nOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBmYXZpY29uIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi5pY29cIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL2dpdEh1Ykljb25XaGl0ZS5wbmdcIjtcbmltcG9ydCBLbmlnaHRJY29uIGZyb20gXCIuLi9hc3NldHMva25pZ2h0LnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiaW1hZ2UveC1pY29uXCJdJykuaHJlZiA9IGZhdmljb247XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIktuaWdodC1pbWctaW1hZ2VcIikuc3JjID0gS25pZ2h0SWNvbjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2l0aHViLWljb25cIikuc3JjID0gZ2l0aHViSWNvbjtcblxuZGlzcGxheUNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOlsiQ2hlc3NTcXVhcmUiLCJ4IiwieSIsImRpcyIsImRhdGEiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJib2FyZFNpemUiLCJwYXJlbnQiLCJib2FyZCIsIktOSUdIVF9Db21ib3MiLCJ1cGRhdGVCb2FyZFNpemUiLCJuIiwiZ2V0UGFyZW50Iiwic2V0UGFyZW50IiwibmV3UGFyZW50IiwiY2hlY2tNb3ZlIiwiWCIsIlkiLCJOIiwicG9zc2libGVNb3ZlcyIsIm5ld01vdmVzIiwibWFwIiwib2Zmc2V0IiwicmVtb3ZlRHVwbGljYXRlcyIsIlNldCIsIm1vdmUiLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwicGFyc2UiLCJmaWx0ZXIiLCJjcmVhdGVCb2FyZCIsImZpbGwiLCJLbmlnaHRzVG91ciIsIm9yaWdpbiIsInZpc2l0ZWQiLCJldmVyeVNxdWFyZVZpc2l0ZWQiLCJldmVyeSIsImNvbHVtbiIsInNxdWFyZSIsImNvcHlPZlZpc2l0ZWQiLCJzbGljZSIsImZpbmRQYXRoIiwieENvb3JkIiwieUNvb3JkIiwiY3VycmVudCIsImJvYXJkQ29weSIsIm1vdmVzIiwiYm9hcmRNb3ZlcyIsImZvckVhY2giLCJwdXNoIiwibGVuZ3RoIiwibmV4dFgiLCJuZXh0WSIsInBhdGgiLCJyZXZlcnNlIiwiS25pZ2h0c1RvdXJXYXJuc2RvcmZmIiwiZ2V0Qm9hcmRNb3ZlcyIsImFycmF5Iiwid2FybnNkb3JmZiIsIktuaWdodE1vdmVzIiwid2VpZ2h0ZWRNb3ZlcyIsImN1cnJlbnRTcXVhcmUiLCJ3ZWlnaHQiLCJzb3J0IiwiYSIsImIiLCJ3ZWlnaHRlZCIsIndhcm5zZG9yZmZmTW92ZXMiLCJLbmlnaHRzVHJhdmFpbHMiLCJzdGFydCIsImVuZCIsImRlc3RpbmF0aW9uIiwicXVldWUiLCJzaGlmdCIsImluY2x1ZGVzIiwicHJldlNxdWFyZSIsInVuc2hpZnQiLCJyZXR1cm5QYXRoIiwibmV3U3F1YXJlIiwiSW5maW5pdHkiLCJLbmlnaHRJY29uIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJ4Q29vcmRfU1RBUlQiLCJ5Q29vcmRfU1RBUlQiLCJ1cGRhdGVOIiwibmV3TiIsImJvYXJkRE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvYXJkUmFuZ2UiLCJzcXVhcmVzIiwidmFsdWUiLCJyZW1vdmVCb2FyZCIsInJlbmRlckJvYXJkIiwicyIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0Q29udGVudCIsIm9wYWNpdHkiLCJyYW5kb21seVBsYWNlRE9NIiwicG9pbnRlckV2ZW50cyIsInRyYXZhaWxLbmlnaHRET00iLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRlciIsImkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsImRhdGFzZXQiLCJudW0iLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRLbmlnaHRUb0JvYXJkIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXJyYXlUb1hZIiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2VpbCIsInh5VG9BcnJheSIsImNvb3JkIiwiY29vcmRzIiwicGxhY2VLbmlnaHQiLCJnZXRSYW5kb21OdW1iZXJVcFRvIiwibWF4IiwiZmxvb3IiLCJyYW5kb20iLCJrbmlnaHRJY29uIiwic3BvdCIsInBhcmVudEVsZW1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmUiLCJ0cmFuc2Zvcm0iLCJpY29uIiwic2V0QXR0cmlidXRlIiwic3JjIiwiY3Vyc29yIiwicmFuZG9tbHlQbGFjZSIsInJhbmRvbVNwb3QiLCJxdWVyeVNlbGVjdG9yIiwiZHJhZ0FuZERyb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJyZXBsYWNlS25pZ2h0SWNvbnMiLCJwZXJmb3JtYW5jZVRpbWUiLCJjbGVhckJvYXJkIiwiaW5uZXJUZXh0IiwiZm9udFdlaWdodCIsInRvdXJLbmlnaHRET00iLCJ0b3VyS25pZ2h0V2FybnNkb3JmZkRPTSIsInVuZGVmaW5lZCIsInRyYXZhaWxLbmlnaHQiLCJpbmRleCIsInN0YXJ0VHJhdmFpbHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3VsdCIsImVuZFRyYXZhaWxzIiwiY29uc29sZSIsImxvZyIsInRvRml4ZWQiLCJpbmRleE9mIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInNob3dDb29yZHMiLCJmb250U2l6ZSIsInRvdXJLbmlnaHQiLCJzdGFydFRvdXIiLCJlbmRUb3VyIiwidG91cktuaWdodFdhcm5zZG9yZmYiLCJmYXZpY29uIiwiZ2l0aHViSWNvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9