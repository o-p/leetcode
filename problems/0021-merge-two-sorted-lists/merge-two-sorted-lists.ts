import ListNode from '../../helpers/ListNode';

interface RootNode {
  next: ListNode | null
}

/**
 * 遞迴解，原本就預期比較慢，但似乎也沒太乾淨
 *
 * Runtime: 104 ms, faster than 27.18% of TypeScript online submissions
 * Memory Usage: 40.9 MB, less than 47.76% of TypeScript online submissions
 */
export function recursion(
  l1: ListNode | null,
  l2: ListNode | null,
  root: RootNode = { next: null },
  tail: RootNode | ListNode = root,
): ListNode | null {
  if (l1 === null) {
    if (l2 === null) return root.next;
    return recursion(l2, l1, root, tail);
  }

  if (l2 === null) {
    tail.next = l1;
    return root.next;
  }

  if (l2.val < l1.val) {
    tail.next = l2;
    return recursion(l1, l2.next, root, l2);
  }

  tail.next = l1;
  return recursion(l1.next, l2, root, l1);
};

/**
 * 迭代解
 *
 * Runtime: 96 ms, faster than 66.23% of TypeScript online submissions
 * Memory Usage: 40.9 MB, less than 66.23% of TypeScript online submissions
 */
export function iteration(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = { next: null };
  let tail = result;
  let c1 = l1;
  let c2 = l2;

  while (c1 !== null || c2 !== null) {
    if (c1 === null) {
      tail.next = c2;
      return result.next;
    }
    if (c2 === null) {
      tail.next = c1;
      return result.next;
    }
    if (c2.val < c1.val) {
      tail.next = c2;
      c2 = c2.next;
    } else {
      tail.next = c1;
      c1 = c1.next;
    }
    tail = tail.next;
  }
  return result.next;
}

export default iteration;
