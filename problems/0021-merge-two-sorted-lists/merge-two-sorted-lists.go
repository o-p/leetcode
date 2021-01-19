package problem0021

import . "github.com/o-p/leetcode/helpers"

// mergeTwoLists - 合併兩個排序過的 List
// 兩個 List size 限制均為 0 - 50
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	var root, prev, next *ListNode
	cursor1 := l1
	cursor2 := l2

	for cursor1 != nil || cursor2 != nil {
		if cursor1 == nil || cursor2 != nil && cursor2.Val < cursor1.Val {
			next = cursor2
			cursor2 = cursor2.Next
		} else {
			next = cursor1
			cursor1 = cursor1.Next
		}

		if prev != nil {
			prev.Next = next
		} else {
			root = next
		}
		prev = next
	}

	return root
}
