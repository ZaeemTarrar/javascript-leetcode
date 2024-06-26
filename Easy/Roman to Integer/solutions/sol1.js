/**
 * Converts string of any Roman number into a digital number.
 * @param {string} s - String of any Roman number
 * @returns {number} Roman number string converted
 *                        into a digital number
 */
function romanToInt(s) {
  const R = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let fNum = 0;
  let i = 0;
  while (i < s.length) {
    fNum +=
      R[s[i]] < R[s[i + 1]] ? R[s[++i]] - R[s[i++ - 1]] : R[s[i++]];
  }
  return +fNum;
}

module.exports = { romanToInt };
