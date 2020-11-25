/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  /** @var int 當前 char 位置 （1 base) */
  let pos = 0
  /** @var int 總體最長不重複字串 */
  let longest = 0
  /** @var int 當前不重複最長字串 */
  let currentLength = 0
  /** @var Map 所有文字前一次出現的位置 */
  const lastOccurs = new Map()

  // 每個字母我們都記錄最後一次出現的位置
  // - 如果兩次出現的距離小於當前段落長度: 刷新段落長度
  // - 如果兩次出現的距離大於當前段落長度: 當前段落長度 + 1
  // 找出最長段落
  for (const char of s) {
    const last = lastOccurs.get(char) || 0
    const distance = (++pos - last)
    currentLength = distance > currentLength ? currentLength + 1 : distance
    longest = Math.max(longest, currentLength)
    lastOccurs.set(char, pos)
  }

  return longest
};

export default lengthOfLongestSubstring
