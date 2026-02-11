const { expect } = require("chai");
const { applyTax } = require("../src/salary");

describe("Tax Deduction", () => {
  it("should deduct tax based on percentage", () => {
    const result = applyTax(20000, 10);
    expect(result).to.equal(18000);
  });
});