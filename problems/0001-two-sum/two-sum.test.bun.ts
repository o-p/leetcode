import { test, expect } from 'bun:test'

import twoSum from './two-sum.ts';

test('LeetCode#0001: Two Sum', () => {
  [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ].forEach(({ nums, target, expected }) =>
    expect(twoSum(nums, target)).toEqual(expected)
  )
})
