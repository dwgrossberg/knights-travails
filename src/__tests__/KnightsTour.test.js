/* eslint-disable no-undef */
import KnightsTour from "../KnightsTour";

describe("KnightsTour function check", () => {
  test("happy path", () => {
    expect(KnightsTour);
  });
  test("KnightsTour can generate a path for a 5x5 board", () => {
    expect(KnightsTour(1, 1, 5)).toStrictEqual([
      [1, 1],
      [5, 1],
      [4, 3],
      [5, 5],
      [3, 4],
      [1, 5],
      [2, 3],
      [3, 1],
      [5, 2],
      [4, 4],
      [2, 5],
      [1, 3],
      [2, 1],
      [4, 2],
      [5, 4],
      [3, 5],
      [1, 4],
      [2, 2],
      [4, 1],
      [3, 3],
      [1, 2],
      [2, 4],
      [4, 5],
      [5, 3],
      [3, 2],
    ]);
  });
  test("KnightsTour can generate a path for an 8x8 board", () => {
    expect(KnightsTour(1, 1, 8)).toStrictEqual([]);
  });
});
