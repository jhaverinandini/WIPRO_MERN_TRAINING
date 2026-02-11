const { expect } = require("chai");
const { applyLeaveDeduction } = require("../src/salary");

describe("Leave Deduction", () => {
  it("should deduct leave amount from salary", () => {
    const result = applyLeaveDeduction(20000, 2000);
    expect(result).to.equal(18000);
  });
});