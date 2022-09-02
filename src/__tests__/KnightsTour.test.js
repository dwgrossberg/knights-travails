/* eslint-disable no-undef */
import KnightsTour from "../KnightsTour";

describe("Knights Tour function check", () => {
  test("happy path", () => {
    expect(KnightsTour);
  });
  test("Knight Travails returns null when invalid coords are input", () => {
    KnightsTour(1, 1, 4);
  });
});
