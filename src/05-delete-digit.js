/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = String(n).split('');
  let min = arrN.length ? arrN[0] : 0;
  for (let i = 0; i < arrN.length; i++) {
    if (arrN[i] < min) min = arrN[i];
  }
  arrN.splice(arrN.indexOf(min), 1);
  const num = Number(arrN.join(''));
  return num;
}

module.exports = deleteDigit;
