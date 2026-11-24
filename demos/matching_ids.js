"use strict";
// Preserve left order and duplicates; each left item appears once if present on right.
function matchingIds(left, right) {
  const allowed = new Set(right);
  return left.filter(id => allowed.has(id));
}
module.exports = { matchingIds };
