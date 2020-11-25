/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  return cacheAndTest(nums, target)
};

// 1. 先將所有數字與 index cache, 再用減法測試 num & target - num 是否存在
//    約在 8x %
const cacheAllThenFind = (nums, target) => {
  const cached = nums.reduce((cache, num, index) => {
    cache[num] = [...cache[num] ?? [], index]
    return cache
  }, {})

  let result;
  nums.some((i) => {
    const j = target - i
    if (i === j && cached[i].length > 1) {
      result = cached[i].slice(0, 2)
      return true;
    }
    if (i === j) {
      if (cached[i].length > 1) {
        result = cached[i].slice(0, 2)
        return true;
      }
      return false
    }
    if (cached[i] && cached[j]) {
      result = [cached[i], cached[j]]
      return true
    }
  })
  return result
}

// 2. 一邊 cache index 一邊測試 (基本上等同於 One-pass Hash Table, 但看起來慢在選用 some)
//    約在 98 %
const cacheAndTest = (nums, target) => {
  const cached = {}
  let result;

  nums.some((num, index) => {
    if (typeof cached[target - num] === 'number') {
      result = [cached[target - num], index]
      return true
    }
    cached[num] = index
    return false
  })
  return result
}

export default twoSum;
