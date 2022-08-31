/* eslint-disable no-undef */
import KnightsTravails from "./KnightsTravails";

describe("Board methods and properties", () => {
  test("happy path", () => {
    expect(KnightsTravails);
  });
  test("Knight Travails returns null when invalid coords are input", () => {
    expect(KnightsTravails([1, 1], [9, 2])).toBe(null);
  });
  test("Knight Travails the correct number of spaces as expected", () => {
    expect(KnightsTravails([1, 1], [3, 2])).toBe(1);
    expect(KnightsTravails([8, 8], [8, 6])).toBe(2);
    expect(KnightsTravails([8, 8], [1, 1])).toBe(6);
  });
});
