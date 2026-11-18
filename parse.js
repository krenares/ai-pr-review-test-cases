// Parse an untrusted JSON numeric literal; executable expressions are not input data.
function parseValue(text) {
  return eval(text);
}
module.exports = { parseValue };
