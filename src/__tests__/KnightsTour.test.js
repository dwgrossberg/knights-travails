/* eslint-disable no-undef */
import KnightsTour from "../KnightsTour";

describe("Knights Tour function check", () => {
  test("happy path", () => {
    expect(KnightsTour);
  });
  test("Knight Tour", () => {
    KnightsTour(1, 1, 5);
  });
});
