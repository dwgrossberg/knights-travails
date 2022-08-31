/* eslint-disable no-undef */
import ChessSquare from "./ChessSquare";

describe("Board methods and properties", () => {
  test("happy path", () => {
    expect(ChessSquare);
  });
  test("checkMove() will return true for values within the Board and false otherwise", () => {
    expect(ChessSquare(1, 1, 8).checkMove()).toBe(true);
    expect(ChessSquare(3, 6, 8).checkMove()).toBe(true);
    expect(ChessSquare(8, 8, 8).checkMove()).toBe(true);
    expect(ChessSquare(12, 12, 15).checkMove()).toBe(true);
    expect(ChessSquare(9, 8, 8).checkMove()).toBe(false);
  });
});
