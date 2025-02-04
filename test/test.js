import { assert } from "chai";
import { factorial } from "../factorial.js";

describe("Finding factorial of number", function () {
  it("Correct factorial should be returned", function () {
    assert.equal(factorial(5), 120);
  });

  it("Factorial of '0' and '1' should return '1'", function () {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(0), 1);
  });
});

// PAIR PARTNER
// Moses Olara
