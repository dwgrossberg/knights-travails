/* eslint-disable no-undef */
import ChessSquare from "../scripts/ChessSquare";

describe("ChessSquare methods and properties", () => {
  test("happy path", () => {
    expect(ChessSquare);
  });
  test("checkMove() will return true for values within the Board and false otherwise", () => {
    expect(ChessSquare(1, 1).checkMove()).toBe(true);
    expect(ChessSquare(3, 6).checkMove()).toBe(true);
    expect(ChessSquare(8, 8).checkMove()).toBe(true);
    const testSquare = ChessSquare(12, 12);
    testSquare.updateBoardSize(15);
    expect(testSquare.checkMove()).toBe(true);
    expect(ChessSquare(9, 8).checkMove()).toBe(false);
  });
  test("possibleMoves() returns a list of all possible moves the Knight could make from any give spot on the board", () => {
    expect(ChessSquare(1, 1).possibleMoves()).toStrictEqual([
      [3, 2],
      [2, 3],
    ]);
    expect(ChessSquare(4, 4).possibleMoves()).toStrictEqual([
      [6, 5],
      [6, 3],
      [2, 5],
      [2, 3],
      [5, 6],
      [5, 2],
      [3, 6],
      [3, 2],
    ]);
    expect(ChessSquare(8, 8).possibleMoves()).toStrictEqual([
      [6, 7],
      [7, 6],
    ]);
  });
});
