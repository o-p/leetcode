const maxArea = 最基本作法

export default 從兩側向內找高點;

/**
 * 想不到有效加速法，先用最基本的做法
 *
 * Result:
 *   Runtime: 7044 ms, faster than 5.00% of TypeScript online submissions
 *   Memory Usage: 52.4 MB, less than 5.00% of TypeScript online submissions
 */
function 最基本作法(height: number[]): number {

  const 算容積 = (左側高度: number, maps: number[]) => maps.map(
    (右側高度, distance) => Math.min(左側高度, 右側高度) * distance
  )

  const 各座標作為左邊界的最大容積 = height.map(
    (height, index, arr) => Math.max(...算容積(height, arr.slice(index)))
  )

  return Math.max(...各座標作為左邊界的最大容積)
}

/**
 * 依照 Approach 2: Two Pointer Approach 實作
 *
 * Result:
 *   Runtime: 80 ms, faster than 95.78% of TypeScript online submissions
 *   Memory Usage: 43.9 MB, less than 5.42% of TypeScript online submissions
 */
function 從兩側向內找高點(height: number[]): number {
  const 尋找最大容積 = (左側座標: number, 右側座標: number, max: number = 0): number => {
    if (左側座標 === 右側座標) return max

    const 左高 = height[左側座標]
    const 右高 = height[右側座標]
    const 容積 = Math.min(左高, 右高) * (右側座標 - 左側座標)

    return 左高 > 右高
      ? 尋找最大容積(左側座標, 右側座標 - 1, Math.max(max, 容積))
      : 尋找最大容積(左側座標 + 1, 右側座標, Math.max(max, 容積))
  }

  return 尋找最大容積(0, height.length - 1);
}
