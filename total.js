// Total a dense finite-number array without mutating it; empty arrays total zero.
function total(values) {
  let subtotal = 0;
  for (const value of values) subtotal += value;
  return subtotal;
}
module.exports = { total };
