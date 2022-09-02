/* eslint-disable no-undef */
import KnightsTour from "../KnightsTour";

describe("Board methods and properties", () => {
  test("happy path", () => {
    expect(KnightsTour);
  });
  test("Knight Travails returns null when invalid coords are input", () => {
    expect(KnightsTravails([1, 1], [9, 2])).toBe(null);
  });
});
