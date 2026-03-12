import * as assert from "assert";
import { test, describe } from "node:test";
import { app } from "../src/app";

describe("integration test", () => {
  test("app", () => {
    // arrange
    const expected = 5;
    // act
    const actual = app(2, 3);
    // assert
    assert.strictEqual(actual, expected);
  });
});
