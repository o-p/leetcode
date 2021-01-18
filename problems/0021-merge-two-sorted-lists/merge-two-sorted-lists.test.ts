import ListNode from '../../helpers/ListNode';
import mergeTwoLists, { iteration, recursion } from './merge-two-sorted-lists';

describe('Merge Two Sorted Lists', (): void => {
  const toArray = (nodes: ListNode | null): number[] => {
    const list = [];
    let cursor = nodes;
    while (cursor) {
      list.push(cursor.val);
      cursor = cursor.next;
    }
    return list;
  };

  const fromArray = (list: number[]): ListNode | null => list.reduce(
    ({ result, cursor }, num) => {
      if (!result) {
        result = cursor = new ListNode(num);
        return { result, cursor };
      }
      cursor.next = new ListNode(num);
      return { result, cursor: cursor.next };
    }, {
      result: null,
      cursor: null,
    }
  ).result;

  test.each`
    method           | name
    ${iteration}     | ${'迭代解'}
    ${recursion}     | ${'遞迴解'}
  `('以 $name 測試 Merge Two Sorted Lists:', ({ method }): void => {
    expect(
      toArray(
        method(
          fromArray([1,2,4]),
          fromArray([1,3,4])
        )
      )
    ).toEqual([1,1,2,3,4,4]);
  });

  test.each`
    l1         | l2         | expected
    ${[1,2,4]} | ${[1,3,4]} | ${[1,1,2,3,4,4]}
    ${[]}      | ${[]}      | ${[]}
    ${[]}      | ${[0]}     | ${[0]}
    ${[0]}     | ${[]}      | ${[0]}
  `('Merge Two Sorted Lists: ($l1, $l2)', ({ l1, l2, expected }) =>
    expect(
      toArray(
        mergeTwoLists(
          fromArray(l1),
          fromArray(l2)
        )
      )
    ).toEqual(expected)
  );

});
