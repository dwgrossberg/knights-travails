/* eslint-disable no-undef */
import KnightsTravails from "../scripts/KnightsTravails";

describe("Knights Travails function check", () => {
  test("happy path", () => {
    expect(KnightsTravails);
  });
  test("Knight Travails returns null when invalid coords are input", () => {
    expect(KnightsTravails([1, 1], [9, 2])).toBe(null);
  });
  test("Knight Travails the correct number of spaces as expected", () => {
    expect(KnightsTravails([1, 1], [3, 2])[0]).toBe(1);
    expect(KnightsTravails([8, 8], [8, 6])[0]).toBe(2);
    expect(KnightsTravails([8, 8], [1, 1])[0]).toBe(6);
  });
  test("Knight Travails can accept an N parameter that will change the board size", () => {
    expect(KnightsTravails([1, 1], [30, 30], 30)[0]).toBe(20);
  });
  test("Knight Travails will output the correct path", () => {
    expect(KnightsTravails([1, 1], [30, 30], 30)[1]).toStrictEqual([
      [1, 1],
      [3, 2],
      [5, 3],
      [7, 4],
      [9, 5],
      [11, 6],
      [13, 7],
      [15, 8],
      [17, 9],
      [19, 10],
      [21, 11],
      [23, 12],
      [24, 14],
      [25, 16],
      [26, 18],
      [27, 20],
      [28, 22],
      [29, 24],
      [30, 26],
      [29, 28],
      [30, 30],
    ]);
  });
});
