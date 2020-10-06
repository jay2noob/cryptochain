const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("generates a SHA-256 generated output", () => {
    expect(cryptoHash("foo")).toEqual(
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
    );
  });

  it("produces the same hash with the same input", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });

  it("produces a unique hash when the properties have changed on an input", () => {
    const foo = {};
    const originalHash = cryptoHash(foo);
    foo["a"] = "a";

    expect(cryptoHash(foo)).not.toEqual(originalHash);
  });
});
