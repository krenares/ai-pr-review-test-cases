"use strict";
function displayName(user) {
  if (user == null) return "Guest";
  return user.name.trim();
}
module.exports = { displayName };
