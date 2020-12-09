const maxArea = 最基本作法

export default maxArea;

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
