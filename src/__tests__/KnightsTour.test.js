/* eslint-disable no-undef */
import KnightsTour from "../scripts/KnightsTour";

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
  test("KnightsTour can generate a path for an 7x7 board", () => {
    expect(KnightsTour(1, 1, 7)).toStrictEqual([
      [1, 1],
      [7, 1],
      [5, 2],
      [6, 4],
      [7, 2],
      [5, 1],
      [4, 3],
      [6, 2],
      [4, 1],
      [2, 2],
      [1, 4],
      [3, 3],
      [2, 1],
      [1, 3],
      [3, 4],
      [2, 6],
      [4, 7],
      [6, 6],
      [4, 5],
      [3, 7],
      [1, 6],
      [2, 4],
      [1, 2],
      [3, 1],
      [2, 3],
      [1, 5],
      [2, 7],
      [3, 5],
      [5, 4],
      [7, 3],
      [6, 1],
      [4, 2],
      [6, 3],
      [4, 4],
      [6, 5],
      [7, 7],
      [5, 6],
      [7, 5],
      [6, 7],
      [4, 6],
      [2, 5],
      [1, 7],
      [3, 6],
      [5, 7],
      [7, 6],
      [5, 5],
      [7, 4],
      [5, 3],
      [3, 2],
    ]);
  });
  test("KnightsTour can generate a path for an 7x7 board", () => {
    console.log(KnightsTour(1, 1, 8));
  });
});
