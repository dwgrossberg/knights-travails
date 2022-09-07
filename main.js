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
var ChessSquare = function ChessSquare(x, y, dis) {
  //  object for storing a chessSquare's data
  var data = {
    xPosition: x,
    yPosition: y,
    boardSize: 8,
    dis: dis || 0
  }; // all possible knight moves

  var KNIGHT_Combos = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]; // update the size of the game board

  var updateBoardSize = function updateBoardSize(n) {
    data.boardSize = n;
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

  return {
    data: data,
    updateBoardSize: updateBoardSize,
    checkMove: checkMove,
    possibleMoves: possibleMoves
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
  var origin = _ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, _toConsumableArray(start));
  var destination = _ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, _toConsumableArray(end)); // if n parameter if present, change the size of origin & destination ChessSquares

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

    if (current.data.xPosition === destination.data.xPosition && current.data.yPosition === destination.data.yPosition) return {
      v: current.data.dis
    }; // forEach possible space that the Knight can move to from its current square

    current.possibleMoves().forEach(function (move) {
      // if the square has not been visited before
      if (!visited[move[0] - 1][move[1] - 1]) {
        // mark the square as visited (true)
        visited[move[0] - 1][move[1] - 1] = true; // push that square to the queue with an incremented distance of + 1,

        var newSquare = (0,_ChessSquare__WEBPACK_IMPORTED_MODULE_0__["default"])(current.data.dis + 1); // changing the size of each ChessSquare if n parameter is present

        if (N) newSquare.updateBoardSize(N);
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

/***/ "./src/scripts/domStuff.js":
/*!*********************************!*\
  !*** ./src/scripts/domStuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KnightsTravails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnightsTravails */ "./src/scripts/KnightsTravails.js");
/* harmony import */ var _KnightsTour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnightsTour */ "./src/scripts/KnightsTour.js");
/* harmony import */ var _KnightsTourWarnsdorff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnightsTourWarnsdorff */ "./src/scripts/KnightsTourWarnsdorff.js");




var displayController = function () {
  var getRandomNumberUpTo = function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  var runKnights = function runKnights(boardSize) {
    console.log("hi");
    (0,_KnightsTravails__WEBPACK_IMPORTED_MODULE_0__["default"])(getRandomNumberUpTo(boardSize), getRandomNumberUpTo(boardSize), boardSize);
    (0,_KnightsTour__WEBPACK_IMPORTED_MODULE_1__["default"])(getRandomNumberUpTo(boardSize), getRandomNumberUpTo(boardSize), boardSize);
    (0,_KnightsTourWarnsdorff__WEBPACK_IMPORTED_MODULE_2__["default"])(getRandomNumberUpTo(boardSize), getRandomNumberUpTo(boardSize), boardSize);
  };

  (0,_KnightsTravails__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 1, 8);
  return {
    runKnights: runKnights
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/scripts/domStuff.js");

console.log("hi");
_domStuff__WEBPACK_IMPORTED_MODULE_0__["default"].runKnights();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVA7RUFDRCxDQUZEOztFQUlBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN4RSxTQUFELEVBQWU7SUFDaEN5RSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0lBQ0FoQiw0REFBZSxDQUNiUyxtQkFBbUIsQ0FBQ25FLFNBQUQsQ0FETixFQUVibUUsbUJBQW1CLENBQUNuRSxTQUFELENBRk4sRUFHYkEsU0FIYSxDQUFmO0lBS0FxQix3REFBVyxDQUNUOEMsbUJBQW1CLENBQUNuRSxTQUFELENBRFYsRUFFVG1FLG1CQUFtQixDQUFDbkUsU0FBRCxDQUZWLEVBR1RBLFNBSFMsQ0FBWDtJQUtBNkMsa0VBQXFCLENBQ25Cc0IsbUJBQW1CLENBQUNuRSxTQUFELENBREEsRUFFbkJtRSxtQkFBbUIsQ0FBQ25FLFNBQUQsQ0FGQSxFQUduQkEsU0FIbUIsQ0FBckI7RUFLRCxDQWpCRDs7RUFtQkEwRCw0REFBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFmO0VBRUEsT0FBTztJQUNMYyxVQUFVLEVBQVZBO0VBREssQ0FBUDtBQUdELENBN0J5QixFQUExQjs7QUErQkEsaUVBQWVOLGlCQUFmOzs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFFQVIsNERBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9DaGVzc1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvS25pZ2h0c1RvdXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL0tuaWdodHNUb3VyV2FybnNkb3JmZi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvS25pZ2h0c1RyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENoZXNzU3F1YXJlID0gKHgsIHksIGRpcykgPT4ge1xuICAvLyAgb2JqZWN0IGZvciBzdG9yaW5nIGEgY2hlc3NTcXVhcmUncyBkYXRhXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgeFBvc2l0aW9uOiB4LFxuICAgIHlQb3NpdGlvbjogeSxcbiAgICBib2FyZFNpemU6IDgsXG4gICAgZGlzOiBkaXMgfHwgMCxcbiAgfTtcblxuICAvLyBhbGwgcG9zc2libGUga25pZ2h0IG1vdmVzXG4gIGNvbnN0IEtOSUdIVF9Db21ib3MgPSBbXG4gICAgWzIsIDFdLFxuICAgIFsyLCAtMV0sXG4gICAgWy0yLCAxXSxcbiAgICBbLTIsIC0xXSxcbiAgICBbMSwgMl0sXG4gICAgWzEsIC0yXSxcbiAgICBbLTEsIDJdLFxuICAgIFstMSwgLTJdLFxuICBdO1xuXG4gIC8vIHVwZGF0ZSB0aGUgc2l6ZSBvZiB0aGUgZ2FtZSBib2FyZFxuICBjb25zdCB1cGRhdGVCb2FyZFNpemUgPSAobikgPT4ge1xuICAgIGRhdGEuYm9hcmRTaXplID0gbjtcbiAgfTtcblxuICAvLyB1dGlsaXR5IGZ1bmN0aW9uIHRvIGNoZWNrIHdoZXRoZXIgb3Igbm90IHRoZSBtb3ZlIGlzIGluc2lkZSB0aGUgZ2FtZSBib2FyZFxuICBjb25zdCBjaGVja01vdmUgPSAoXG4gICAgWCA9IGRhdGEueFBvc2l0aW9uLFxuICAgIFkgPSBkYXRhLnlQb3NpdGlvbixcbiAgICBOID0gZGF0YS5ib2FyZFNpemVcbiAgKSA9PiB7XG4gICAgaWYgKFggPj0gMSAmJiBYIDw9IE4gJiYgWSA+PSAxICYmIFkgPD0gTikgcmV0dXJuIHRydWU7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gY3JlYXRlIGFsbCB2YWxpZCBLbmlnaHQgbW92ZXMgKGF0IGVhY2ggcG9zaXRpb24pXG4gIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3TW92ZXMgPSBLTklHSFRfQ29tYm9zLm1hcCgob2Zmc2V0KSA9PiBbXG4gICAgICBkYXRhLnhQb3NpdGlvbiArIG9mZnNldFswXSxcbiAgICAgIGRhdGEueVBvc2l0aW9uICsgb2Zmc2V0WzFdLFxuICAgIF0pO1xuICAgIC8vIHJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzXG4gICAgY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IG5ldyBTZXQoXG4gICAgICBuZXdNb3Zlcy5tYXAoKG1vdmUpID0+IEpTT04uc3RyaW5naWZ5KG1vdmUpKVxuICAgICk7XG4gICAgLy8gcmUtbWFwIHRoZSB2YWx1ZXMgdG8gYW4gYXJyYXkgJiBjaGVjayB0aGF0IHRoZXkgYXJlIHdpdGhpbiB0aGUgZ2FtZSBib2FyZCBib3VuZHNcbiAgICByZXR1cm4gQXJyYXkuZnJvbShyZW1vdmVEdXBsaWNhdGVzKVxuICAgICAgLm1hcCgobW92ZSkgPT4gSlNPTi5wYXJzZShtb3ZlKSlcbiAgICAgIC5maWx0ZXIoKHgpID0+IGNoZWNrTW92ZSh4WzBdLCB4WzFdKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHVwZGF0ZUJvYXJkU2l6ZSxcbiAgICBjaGVja01vdmUsXG4gICAgcG9zc2libGVNb3ZlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZXNzU3F1YXJlO1xuIiwiaW1wb3J0IENoZXNzU3F1YXJlIGZyb20gXCIuL0NoZXNzU3F1YXJlXCI7XG5cbmNvbnN0IEtuaWdodHNUb3VyID0gKHgsIHksIE4pID0+IHtcbiAgY29uc3Qgb3JpZ2luID0gQ2hlc3NTcXVhcmUoeCwgeSk7XG4gIGlmIChOKSBvcmlnaW4udXBkYXRlQm9hcmRTaXplKE4pO1xuICBpZiAoIW9yaWdpbi5jaGVja01vdmUoKSkgcmV0dXJuIG51bGw7XG5cbiAgLy8gaW5pdGlhbGl6ZSBhIDJEIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgdmlzaXRlZCB2ZXJ0ZXhlcyAmIG1hcmsgdGhlbSBmYWxzZVxuICBjb25zdCBuID0gb3JpZ2luLmRhdGEuYm9hcmRTaXplO1xuICBjb25zdCB2aXNpdGVkID0gWy4uLkFycmF5KG4pXS5tYXAoKCkgPT4gQXJyYXkobikuZmlsbChmYWxzZSkpO1xuXG4gIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGV2ZXJ5IENoZXNzU3F1YXJlIGhhcyBiZWVuIHZpc2l0ZWRcbiAgY29uc3QgZXZlcnlTcXVhcmVWaXNpdGVkID0gKGJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLmV2ZXJ5KChjb2x1bW4pID0+IGNvbHVtbi5ldmVyeSgoc3F1YXJlKSA9PiBzcXVhcmUpKTtcbiAgfTtcblxuICAvLyBjcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIHZpc2l0ZWQgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiBlYWNoIHBhdGgncyBwcm9ncmVzc1xuICBjb25zdCBjb3B5T2ZWaXNpdGVkID0gKGJvYXJkKSA9PiBib2FyZC5tYXAoKGNvbHVtbikgPT4gY29sdW1uLnNsaWNlKCkpO1xuXG4gIC8vIGZpbmQgS25pZ2h0cyBUb3VyIGZyb20gYW55IFt4LCB5XSBjb29yZCBvbiBhIGJvYXJkIG9mIE4geCBOIHNpemVcbiAgLy8gdXNpbmcgYmFja3RyYWNraW5nLWJhc2VkIHJlY3Vyc2lvbiB0byBidWlsZCB0aGUgY29ycmVjdCBwYXRoIHNvbHV0aW9uXG4gIGNvbnN0IGZpbmRQYXRoID0gKHhDb29yZCwgeUNvb3JkLCBib2FyZCwgYm9hcmRTaXplKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IENoZXNzU3F1YXJlKHhDb29yZCwgeUNvb3JkKTtcbiAgICBjdXJyZW50LnVwZGF0ZUJvYXJkU2l6ZShib2FyZFNpemUpO1xuICAgIGNvbnN0IGJvYXJkQ29weSA9IGNvcHlPZlZpc2l0ZWQoYm9hcmQpO1xuICAgIC8vIG1hcmsgdGhlIHN0YXJ0aW5nIGNvb3JkcyBhcyB2aXNpdGVkXG4gICAgYm9hcmRDb3B5W3hDb29yZCAtIDFdW3lDb29yZCAtIDFdID0gdHJ1ZTtcbiAgICAvLyBnZXQgYWxsIHBvc3NpYmxlIG1vdmVzIGZvciB0aGUgS25pZ2h0IGF0IGN1cnJlbnQgcG9zaXRpb25cbiAgICBjb25zdCBtb3ZlcyA9IGN1cnJlbnQucG9zc2libGVNb3ZlcygpO1xuICAgIGNvbnN0IGJvYXJkTW92ZXMgPSBbXTtcbiAgICBtb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgICBpZiAoYm9hcmRDb3B5W21vdmVbMF0gLSAxXVttb3ZlWzFdIC0gMV0gPT09IGZhbHNlKSBib2FyZE1vdmVzLnB1c2gobW92ZSk7XG4gICAgfSk7XG4gICAgLy8gYmFzZSBjYXNlIC0gaWYgdGhlcmUgYXJlIG5vIG1vcmUgbW92ZXMgYXZhaWxhYmxlIHRvIEtuaWdodCwgY2hlY2sgYm9hcmQgZm9yIGNvbXBsZXRpb25cbiAgICBpZiAoYm9hcmRNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGlmIHRoZSBib2FyZCBpcyBjb21wbGV0ZSwgcmV0dXJuIHRoZSBzdWNjZXNzZnVsIHBhdGhcbiAgICAgIGlmIChldmVyeVNxdWFyZVZpc2l0ZWQoYm9hcmRDb3B5KSkgcmV0dXJuIFtbeCwgeV1dO1xuICAgICAgLy8gaWYgdGhlIGJvYXJkIGlzIG5vdCBjb21wbGV0ZSwgbW92ZSBvbiB0byB0aGUgbmV4dCBicmFuY2hcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gb3RoZXJ3aXNlIHJlY3Vyc2l2ZWx5IGNhbGwgZnVuY3Rpb24gdG8gZmluZCBlYWNoIHBvc3NpYmxlIG1vdmUgZm9yIG5leHQgYm9hcmRNb3ZlXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IFtuZXh0WCwgbmV4dFldIG9mIGJvYXJkTW92ZXMpIHtcbiAgICAgICAgbGV0IHBhdGggPSBmaW5kUGF0aChuZXh0WCwgbmV4dFksIGJvYXJkQ29weSwgYm9hcmRTaXplKTtcbiAgICAgICAgLy8gaWYgcGF0aCBlcXVhdGVzIHRvIGZhbHNlLCB0aGUgbG9vcCB3aWxsIGNvbnRpbnVlIG9uIHRvIHRoZSBuZXh0IG1vdmVcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAvLyBvdGhlcndpc2UsIHdlIGhhdmUgcmVhY2hlZCBhIHN1Y2Nlc3NmdWwgc29sdXRpb25cbiAgICAgICAgICAvLyBhZGQgdGhlIGN1cnJlbnQgY29vcmRzIHRvIHRoZSBwYXRoIGFuZCByZXR1cm4gdGhlIHBhdGhcbiAgICAgICAgICBwYXRoLnB1c2goW25leHRYLCBuZXh0WV0pO1xuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvLyBjYWxsIHRoZSBmdW5jdGlvblxuICByZXR1cm4gZmluZFBhdGgoeCwgeSwgdmlzaXRlZCwgTiB8fCA4KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodHNUb3VyO1xuIiwiaW1wb3J0IENoZXNzU3F1YXJlIGZyb20gXCIuL0NoZXNzU3F1YXJlXCI7XG5cbi8vIGZpbmQgS25pZ2h0cyBUb3VyIGZyb20gYW55IFt4LCB5XSBjb29yZCBvbiBhIGJvYXJkIG9mIE4geCBOIHNpemVcbi8vIHVzaW5nIFdhcm5zZG9yZmYncyBoZXVyaXN0aWNzICsgYmFja3RyYWNraW5nLWJhc2VkIHJlY3Vyc2lvbiB0byBidWlsZCB0aGUgY29ycmVjdCBwYXRoIHNvbHV0aW9uXG5cbmNvbnN0IEtuaWdodHNUb3VyV2FybnNkb3JmZiA9ICh4LCB5LCBOKSA9PiB7XG4gIC8vIE9yaWdpbmFsIEtuaWdodHMgVG91ciBhbGdvcml0aG1cbiAgY29uc3Qgb3JpZ2luID0gQ2hlc3NTcXVhcmUoeCwgeSk7XG4gIGlmIChOKSBvcmlnaW4udXBkYXRlQm9hcmRTaXplKE4pO1xuICBpZiAoIW9yaWdpbi5jaGVja01vdmUoKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG4gPSBvcmlnaW4uZGF0YS5ib2FyZFNpemU7XG4gIGNvbnN0IHZpc2l0ZWQgPSBbLi4uQXJyYXkobildLm1hcCgoKSA9PiBBcnJheShuKS5maWxsKGZhbHNlKSk7XG4gIC8vIGhlbHBlciBmdW5jdGlvbnNcbiAgY29uc3QgZXZlcnlTcXVhcmVWaXNpdGVkID0gKGJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLmV2ZXJ5KChjb2x1bW4pID0+IGNvbHVtbi5ldmVyeSgoc3F1YXJlKSA9PiBzcXVhcmUpKTtcbiAgfTtcbiAgY29uc3QgY29weU9mVmlzaXRlZCA9IChib2FyZCkgPT4gYm9hcmQubWFwKChjb2x1bW4pID0+IGNvbHVtbi5zbGljZSgpKTtcbiAgY29uc3QgZ2V0Qm9hcmRNb3ZlcyA9IChhcnJheSwgYm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZE1vdmVzID0gW107XG4gICAgYXJyYXkuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgaWYgKGJvYXJkW21vdmVbMF0gLSAxXVttb3ZlWzFdIC0gMV0gPT09IGZhbHNlKSBib2FyZE1vdmVzLnB1c2gobW92ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvYXJkTW92ZXM7XG4gIH07XG5cbiAgLy8gVHdlYWtpbmcgdGhlIEtuaWdodHMgVG91ciBiYWNrdHJhY2tpbmcgYWxnb3JpdGhtIHRvIGZvbGxvdyBXYXJuc2RvcmZmJ3MgaGV1cmlzdGljczpcbiAgLy8gXCJXaGVuIGxvb2tpbmcgYXQgdGhlIG5leHQgcG9zc2libGUgbW92ZXMsIHByZWZlciB0aGUgbmV4dCBtb3ZlIHdpdGggdGhlIGZld2VzdCBwb3NzaWJsZSBvcHRpb25zXCJcbiAgY29uc3Qgd2FybnNkb3JmZiA9IChLbmlnaHRNb3ZlcywgYm9hcmQsIGJvYXJkU2l6ZSkgPT4ge1xuICAgIGNvbnN0IHdlaWdodGVkTW92ZXMgPSBbXTtcbiAgICAvLyBmaW5kIHRoZSBudW1iZXIgb2YgcG9zc2libGUgcGF0aHMgZm9yIGVhY2ggS25pZ2h0TW92ZSBhbmQgcmV0dXJuIHRoZW0gaW4gb3JkZXIgZnJvbSBmZXdlc3QgdG8gbW9zdFxuICAgIGZvciAoY29uc3QgW3gsIHldIG9mIEtuaWdodE1vdmVzKSB7XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlID0gQ2hlc3NTcXVhcmUoeCwgeSk7XG4gICAgICBjdXJyZW50U3F1YXJlLnVwZGF0ZUJvYXJkU2l6ZShib2FyZFNpemUpO1xuICAgICAgY29uc3QgbW92ZXMgPSBjdXJyZW50U3F1YXJlLnBvc3NpYmxlTW92ZXMoKTtcbiAgICAgIGNvbnN0IGJvYXJkTW92ZXMgPSBnZXRCb2FyZE1vdmVzKG1vdmVzLCBib2FyZCk7XG4gICAgICBjb25zdCB3ZWlnaHQgPSBib2FyZE1vdmVzLmxlbmd0aDtcbiAgICAgIHdlaWdodGVkTW92ZXMucHVzaCh7IG1vdmU6IFt4LCB5XSwgd2VpZ2h0IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2VpZ2h0ZWRNb3Zlc1xuICAgICAgLnNvcnQoKGEsIGIpID0+IGIud2VpZ2h0IC0gYS53ZWlnaHQpXG4gICAgICAubWFwKCh3ZWlnaHRlZCkgPT4gd2VpZ2h0ZWQubW92ZSk7XG4gIH07XG5cbiAgLy8gbWFpbiBmdW5jdGlvblxuICBjb25zdCBmaW5kUGF0aCA9ICh4Q29vcmQsIHlDb29yZCwgYm9hcmQsIGJvYXJkU2l6ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBDaGVzc1NxdWFyZSh4Q29vcmQsIHlDb29yZCk7XG4gICAgY3VycmVudC51cGRhdGVCb2FyZFNpemUoYm9hcmRTaXplKTtcbiAgICBjb25zdCBib2FyZENvcHkgPSBjb3B5T2ZWaXNpdGVkKGJvYXJkKTtcbiAgICBib2FyZENvcHlbeENvb3JkIC0gMV1beUNvb3JkIC0gMV0gPSB0cnVlO1xuICAgIGNvbnN0IG1vdmVzID0gY3VycmVudC5wb3NzaWJsZU1vdmVzKCk7XG4gICAgY29uc3QgYm9hcmRNb3ZlcyA9IGdldEJvYXJkTW92ZXMobW92ZXMsIGJvYXJkQ29weSk7XG4gICAgaWYgKGJvYXJkTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoZXZlcnlTcXVhcmVWaXNpdGVkKGJvYXJkQ29weSkpIHJldHVybiBbW3gsIHldXTtcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3YXJuc2RvcmZmZk1vdmVzID0gd2FybnNkb3JmZihib2FyZE1vdmVzLCBib2FyZENvcHksIGJvYXJkU2l6ZSk7XG4gICAgICBmb3IgKGxldCBbbmV4dFgsIG5leHRZXSBvZiB3YXJuc2RvcmZmZk1vdmVzKSB7XG4gICAgICAgIGxldCBwYXRoID0gZmluZFBhdGgobmV4dFgsIG5leHRZLCBib2FyZENvcHksIGJvYXJkU2l6ZSk7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKFtuZXh0WCwgbmV4dFldKTtcbiAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGZpbmRQYXRoKHgsIHksIHZpc2l0ZWQsIE4gfHwgOCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgS25pZ2h0c1RvdXJXYXJuc2RvcmZmO1xuIiwiaW1wb3J0IENoZXNzU3F1YXJlIGZyb20gXCIuL0NoZXNzU3F1YXJlXCI7XG5cbi8vIFJldHVybiB0aGUgbWluaW11bSBudW1iZXIgb2Ygc3RlcHMgcmVxdWlyZWQgZm9yIEtuaWdodCB0byB0cmF2ZXJzZSBmcm9tIHN0YXJ0IHRvIGVuZFxuY29uc3QgS25pZ2h0c1RyYXZhaWxzID0gKHN0YXJ0LCBlbmQsIE4pID0+IHtcbiAgLy8gY3JlYXRlIG5vZGVzIGZyb20gc3RhcnRpbmcgYW5kIGVuZGluZyBjb29yZHNcbiAgY29uc3Qgb3JpZ2luID0gQ2hlc3NTcXVhcmUoLi4uc3RhcnQpO1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IENoZXNzU3F1YXJlKC4uLmVuZCk7XG5cbiAgLy8gaWYgbiBwYXJhbWV0ZXIgaWYgcHJlc2VudCwgY2hhbmdlIHRoZSBzaXplIG9mIG9yaWdpbiAmIGRlc3RpbmF0aW9uIENoZXNzU3F1YXJlc1xuICBpZiAoTikge1xuICAgIG9yaWdpbi51cGRhdGVCb2FyZFNpemUoTik7XG4gICAgZGVzdGluYXRpb24udXBkYXRlQm9hcmRTaXplKE4pO1xuICB9XG5cbiAgLy8gaWYgc3RhcnQgb3IgZW5kIGlzIG5vdCB3aXRoaW4gdGhlIGdhbWUgYm9hcmQgcmV0dXJuIG51bGxcbiAgaWYgKCFvcmlnaW4uY2hlY2tNb3ZlKCkgfHwgIWRlc3RpbmF0aW9uLmNoZWNrTW92ZSgpKSByZXR1cm4gbnVsbDtcblxuICAvLyBzdGFydCBhIHF1ZXVlIGFuZCBpbnNlcnQgdGhlIGJlZ2lubmluZyB2ZXJ0ZXggYXMgYSBDaGVzc1NxdWFyZVxuICBjb25zdCBxdWV1ZSA9IFtvcmlnaW5dO1xuICAvLyBpbml0aWFsaXplIGEgMkQgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB2aXNpdGVkIHZlcnRleGVzICYgbWFyayB0aGVtIGZhbHNlXG4gIGNvbnN0IG4gPSBvcmlnaW4uZGF0YS5ib2FyZFNpemU7XG4gIGNvbnN0IHZpc2l0ZWQgPSBbLi4uQXJyYXkobildLm1hcCgoKSA9PiBBcnJheShuKS5maWxsKGZhbHNlKSk7XG4gIC8vIG1hcmsgc3RhcnRpbmcgY29vcmRpbmF0ZXMgYXMgdmlzaXRlZCAodHJ1ZSlcbiAgdmlzaXRlZFtzdGFydFswXSAtIDFdW3N0YXJ0WzFdIC0gMV0gPSB0cnVlO1xuXG4gIC8vIGxvb3Agd2hpbGUgcXVldWUgaXMgbm90IGVtcHR5XG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAvLyByZW1vdmUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBxdWV1ZSAoY3VycmVudClcbiAgICBjb25zdCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKTtcbiAgICAvLyBiYXNlIGNhc2UgLSBpZiBjdXJyZW50IGNvb3JkcyA9PT0gZGVzdGluYXRpb24gY29vcmRzLCByZXR1cm4gY3VycmVudCBkaXN0YW5jZVxuICAgIGlmIChcbiAgICAgIGN1cnJlbnQuZGF0YS54UG9zaXRpb24gPT09IGRlc3RpbmF0aW9uLmRhdGEueFBvc2l0aW9uICYmXG4gICAgICBjdXJyZW50LmRhdGEueVBvc2l0aW9uID09PSBkZXN0aW5hdGlvbi5kYXRhLnlQb3NpdGlvblxuICAgIClcbiAgICAgIHJldHVybiBjdXJyZW50LmRhdGEuZGlzO1xuICAgIC8vIGZvckVhY2ggcG9zc2libGUgc3BhY2UgdGhhdCB0aGUgS25pZ2h0IGNhbiBtb3ZlIHRvIGZyb20gaXRzIGN1cnJlbnQgc3F1YXJlXG4gICAgY3VycmVudC5wb3NzaWJsZU1vdmVzKCkuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgLy8gaWYgdGhlIHNxdWFyZSBoYXMgbm90IGJlZW4gdmlzaXRlZCBiZWZvcmVcbiAgICAgIGlmICghdmlzaXRlZFttb3ZlWzBdIC0gMV1bbW92ZVsxXSAtIDFdKSB7XG4gICAgICAgIC8vIG1hcmsgdGhlIHNxdWFyZSBhcyB2aXNpdGVkICh0cnVlKVxuICAgICAgICB2aXNpdGVkW21vdmVbMF0gLSAxXVttb3ZlWzFdIC0gMV0gPSB0cnVlO1xuICAgICAgICAvLyBwdXNoIHRoYXQgc3F1YXJlIHRvIHRoZSBxdWV1ZSB3aXRoIGFuIGluY3JlbWVudGVkIGRpc3RhbmNlIG9mICsgMSxcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gQ2hlc3NTcXVhcmUoY3VycmVudC5kYXRhLmRpcyArIDEpO1xuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgc2l6ZSBvZiBlYWNoIENoZXNzU3F1YXJlIGlmIG4gcGFyYW1ldGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKE4pIG5ld1NxdWFyZS51cGRhdGVCb2FyZFNpemUoTik7XG4gICAgICAgIHF1ZXVlLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBvdGhlcndpc2Ugbm90IHBvc3NpYmxlIC0gcmV0dXJuIGluZmluaXR5XG4gIHJldHVybiBJbmZpbml0eTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodHNUcmF2YWlscztcbiIsImltcG9ydCBLbmlnaHRzVHJhdmFpbHMgZnJvbSBcIi4vS25pZ2h0c1RyYXZhaWxzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXIgZnJvbSBcIi4vS25pZ2h0c1RvdXJcIjtcbmltcG9ydCBLbmlnaHRzVG91cldhcm5zZG9yZmYgZnJvbSBcIi4vS25pZ2h0c1RvdXJXYXJuc2RvcmZmXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UmFuZG9tTnVtYmVyVXBUbyA9IChtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChtYXggfHwgOCkgLSA0ICsgMSkgKyA0KTtcbiAgfTtcblxuICBjb25zdCBydW5LbmlnaHRzID0gKGJvYXJkU2l6ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgS25pZ2h0c1RyYXZhaWxzKFxuICAgICAgZ2V0UmFuZG9tTnVtYmVyVXBUbyhib2FyZFNpemUpLFxuICAgICAgZ2V0UmFuZG9tTnVtYmVyVXBUbyhib2FyZFNpemUpLFxuICAgICAgYm9hcmRTaXplXG4gICAgKTtcbiAgICBLbmlnaHRzVG91cihcbiAgICAgIGdldFJhbmRvbU51bWJlclVwVG8oYm9hcmRTaXplKSxcbiAgICAgIGdldFJhbmRvbU51bWJlclVwVG8oYm9hcmRTaXplKSxcbiAgICAgIGJvYXJkU2l6ZVxuICAgICk7XG4gICAgS25pZ2h0c1RvdXJXYXJuc2RvcmZmKFxuICAgICAgZ2V0UmFuZG9tTnVtYmVyVXBUbyhib2FyZFNpemUpLFxuICAgICAgZ2V0UmFuZG9tTnVtYmVyVXBUbyhib2FyZFNpemUpLFxuICAgICAgYm9hcmRTaXplXG4gICAgKTtcbiAgfTtcblxuICBLbmlnaHRzVHJhdmFpbHMoMSwgMSwgOCk7XG5cbiAgcmV0dXJuIHtcbiAgICBydW5LbmlnaHRzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kb21TdHVmZlwiO1xuXG5jb25zb2xlLmxvZyhcImhpXCIpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5ydW5LbmlnaHRzKCk7XG4iXSwibmFtZXMiOlsiQ2hlc3NTcXVhcmUiLCJ4IiwieSIsImRpcyIsImRhdGEiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJib2FyZFNpemUiLCJLTklHSFRfQ29tYm9zIiwidXBkYXRlQm9hcmRTaXplIiwibiIsImNoZWNrTW92ZSIsIlgiLCJZIiwiTiIsInBvc3NpYmxlTW92ZXMiLCJuZXdNb3ZlcyIsIm1hcCIsIm9mZnNldCIsInJlbW92ZUR1cGxpY2F0ZXMiLCJTZXQiLCJtb3ZlIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsInBhcnNlIiwiZmlsdGVyIiwiS25pZ2h0c1RvdXIiLCJvcmlnaW4iLCJ2aXNpdGVkIiwiZmlsbCIsImV2ZXJ5U3F1YXJlVmlzaXRlZCIsImJvYXJkIiwiZXZlcnkiLCJjb2x1bW4iLCJzcXVhcmUiLCJjb3B5T2ZWaXNpdGVkIiwic2xpY2UiLCJmaW5kUGF0aCIsInhDb29yZCIsInlDb29yZCIsImN1cnJlbnQiLCJib2FyZENvcHkiLCJtb3ZlcyIsImJvYXJkTW92ZXMiLCJmb3JFYWNoIiwicHVzaCIsImxlbmd0aCIsIm5leHRYIiwibmV4dFkiLCJwYXRoIiwiS25pZ2h0c1RvdXJXYXJuc2RvcmZmIiwiZ2V0Qm9hcmRNb3ZlcyIsImFycmF5Iiwid2FybnNkb3JmZiIsIktuaWdodE1vdmVzIiwid2VpZ2h0ZWRNb3ZlcyIsImN1cnJlbnRTcXVhcmUiLCJ3ZWlnaHQiLCJzb3J0IiwiYSIsImIiLCJ3ZWlnaHRlZCIsIndhcm5zZG9yZmZmTW92ZXMiLCJLbmlnaHRzVHJhdmFpbHMiLCJzdGFydCIsImVuZCIsImRlc3RpbmF0aW9uIiwicXVldWUiLCJzaGlmdCIsIm5ld1NxdWFyZSIsIkluZmluaXR5IiwiZGlzcGxheUNvbnRyb2xsZXIiLCJnZXRSYW5kb21OdW1iZXJVcFRvIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicnVuS25pZ2h0cyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9