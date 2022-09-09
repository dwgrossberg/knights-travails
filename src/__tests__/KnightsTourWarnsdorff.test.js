/* eslint-disable no-undef */
import KnightsTourWarnsdorff from "../scripts/KnightsTourWarnsdorff";

describe("KnightsTourWarnsdorff function check", () => {
  test("happy path", () => {
    expect(KnightsTourWarnsdorff);
  });
  test("KnightsTourWarnsdorff can generate a path for a 5x5 board", () => {
    expect(KnightsTourWarnsdorff(1, 1, 5)).toStrictEqual([
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
  test("8x8", () => {
    console.log(KnightsTourWarnsdorff(1, 1, 8));
  });
});
