import removeNthFromEnd from './remove-nth-node-from-end-of-list';
import ListNode from '../../helpers/ListNode';

describe('Remove Nth Node From End of List', () => {
  test('head = [1], n = 1', (): void => {
    const head = new ListNode(1);
    const result = removeNthFromEnd(head, 1);
    expect(result).toBe(null);
  });

  test('head = [1,2], n = 1', (): void => {
    const head = new ListNode(
      1,
      new ListNode(2)
    );
    const result = removeNthFromEnd(head, 1);
    expect(result).toBeInstanceOf(ListNode);
    expect(result.val).toBe(1);
    expect(result.next).toBeNull();
  });

  test('head = [1,2,3,4,5], n = 2', (): void => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(5)
          )
        )
      )
    );
    const result = removeNthFromEnd(head, 2);
    expect(result).toBeInstanceOf(ListNode);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(3);
    expect(result.next.next.next.val).toBe(5);
    expect(result.next.next.next.next).toBeNull();
  });
});
