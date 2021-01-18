import ListNode from '../../helpers/ListNode';

// 不斷 next, 直到超過 n 之後就持續迭代替換 node
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let counts = 0;

  let tail = head;
  let detached = head;
  let parent = null;
  let anchor = head.next;

  //                 n + 1    n        n-1             0
  // head => ... => parent ========> anchor => ... => tail
  //                    .. detached ...

  while (tail) {
    counts++;
    tail = tail.next;

    if (counts > n) {
      if (parent) parent.next = detached; // 補接 parent

      // 替換三個主要指標
      [
        parent,
        detached,
        anchor,
      ] = [
        detached,
        anchor,
        anchor.next,
      ];

      // 建立新關聯
      parent.next = anchor;
      detached.next = null;
    }
  }

  return counts === n
    ? head.next
    : head;
}

export default removeNthFromEnd;
