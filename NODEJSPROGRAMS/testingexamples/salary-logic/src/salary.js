// add bonus to salary
function applyBonus(basicSalary, bonus) {
  return basicSalary + bonus;
}

// deduct amount for leave
function applyLeaveDeduction(basicSalary, leaveAmount) {
  return basicSalary - leaveAmount;
}

// deduct tax based on percentage
function applyTax(basicSalary, taxPercentage) {
  return basicSalary - (basicSalary * taxPercentage / 100);
}

module.exports = {
  applyBonus,
  applyLeaveDeduction,
  applyTax
};