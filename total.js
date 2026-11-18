// Total a dense finite-number array without mutating it; empty arrays total zero.
function total(values) {
  let result = 0;
  for (const value of values) result += value;
  return result;
}
module.exports = { total };
