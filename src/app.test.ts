import * as assert from "assert";
import { add } from "./app";
import { test } from "node:test";

test("adds", () => {
  // arrange
  const expected = 5;
  // act
  const actual = add(2, 3);
  // assert
  assert.strictEqual(actual, expected);
});
