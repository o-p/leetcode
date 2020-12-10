/**
 * 簡單想法：
 *
 *   1. 總和為 0 一定是:
 *      - 0 + 0 + 0
 *      - +N + -X + -Y (其中 N = X + Y，並且 X 與 Y 中必定有一項 <= N/2)
 *      - -N + +X + +Y (其中 N = X + Y，並且 X 與 Y 中必定有一項 <= N/2)
 */
function threeSum(nums: number[]): number[][] {
  /** 各數字出現量 */
  const counts = nums.reduce(
    (all, val) => Object.assign(all, {
      [val]: (all[val] ?? 0) + 1,
    }), {}
  );

  const numbers = Object.keys(counts).map(n => parseInt(n, 10));
  const postives = numbers.filter(n => n > 0);
  const negatives = numbers.filter(n => n < 0);

  const matched = postives.reduce(
    (all: number[][], pos: number) => negatives
      .filter(neg => pos + 2 * neg <= 0 && pos + neg >= 0) // 這邊接受 -N 0 N 的 case
      .map(neg => [neg, -pos - neg, pos])
      .filter(([a, b, c]) => a === b ? counts[b] >= 2 : counts[b] >= 1)
      .concat(all),
    counts[0] >= 3
      ? [[0, 0, 0]]
      : []
  );

  return negatives.reduce(
    (all: number[][], neg: number) => postives
      .filter(pos => pos * 2 + neg >= 0 && pos + neg < 0) // 這邊不收 N 0 -N 的 case
      .map(pos => [neg, -pos - neg, pos])
      .filter(([a, b, c]) => b === c ? counts[b] >= 2 : counts[b] >= 1)
      .concat(all),
    matched,
  );
}

export default threeSum
