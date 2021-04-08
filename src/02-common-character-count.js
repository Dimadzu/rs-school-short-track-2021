/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const repeatArr = [];
  for (let i = 1; i < s1; i++) {
    if (s1.indexOf(s2[i]) !== -1) {
      repeatArr.push(s2[i]);
    }
  }
  const number = repeatArr.length;
  return number;
}
module.exports = getCommonCharacterCount;
