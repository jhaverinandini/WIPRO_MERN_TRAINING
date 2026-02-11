const { expect } = require("chai");
const { applyBonus } = require("../src/salary");

describe("Bonus Calculation", () => {
  it("should add bonus to basic salary", () => {
    const result = applyBonus(20000, 3000);
    expect(result).to.equal(23000);
  });
});