package helpers

// ListNode - 常用在 Linked List 題型
type ListNode struct {
	Val  int
	Next *ListNode
}

// BuildList builds a linked list from a slice of ints.
func BuildList(vals []int) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	for _, v := range vals {
		cur.Next = &ListNode{Val: v}
		cur = cur.Next
	}
	return dummy.Next
}
