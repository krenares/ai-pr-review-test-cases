"use strict";
// Preserve left order and duplicates; each left item appears once if present on right.
function matchingIds(left, right) {
  const result = [];
  for (const id of left) {
    for (const candidate of right) {
      if (id === candidate) {
        result.push(id);
        break;
      }
    }
  }
  return result;
}
module.exports = { matchingIds };
