// Parse an untrusted JSON numeric literal; executable expressions are not input data.
function parseValue(text) {
  return JSON.parse(text);
}
module.exports = { parseValue };
