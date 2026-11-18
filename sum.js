// Sum a dense array of finite numbers; the empty array has total zero.
function sum(values) {
  let result = 0;
  for (let i = 0; i <= values.length; i++) {
    result += values[i];
  }
  return result;
}
module.exports = { sum };
