/**
 * 解題詳情在 ts，這邊是簡化後結果
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (
  height,
  max = 0,
  left = 0,
  right = height.length - 1,
  leftH = height[left],
  rightH = height[right],
  length = right - left,
  minH = Math.min(leftH, rightH)
) => length > 0
  ? maxArea(
    height,
    Math.max(max, minH * length),
    left + (leftH === minH),
    right - (rightH === minH)
  )
  : max

export default maxArea
