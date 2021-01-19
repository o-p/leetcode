package problem0021

import (
	"testing"

	. "github.com/o-p/leetcode/helpers"
	"github.com/stretchr/testify/assert"
)

func TestMergeTwoLists(t *testing.T) {
	type args struct {
		l1 *ListNode
		l2 *ListNode
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{
			"Input: l1 = [1,2,4], l2 = [1,3,4]  Output: [1,1,2,3,4,4]",
			args{
				&ListNode{1, &ListNode{2, &ListNode{4, nil}}},
				&ListNode{1, &ListNode{3, &ListNode{4, nil}}},
			},
			&ListNode{1, &ListNode{1, &ListNode{2, &ListNode{3, &ListNode{4, &ListNode{4, nil}}}}}},
		},
		{
			"Input: l1 = [], l2 = []  Output: []",
			args{nil, nil},
			nil,
		},
		{
			"Input: l1 = [], l2 = [0]  Output: [0]",
			args{nil, &ListNode{0, nil}},
			&ListNode{0, nil},
		},
	}
	expect := assert.New(t)
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			expect.Equal(
				tt.want,
				mergeTwoLists(tt.args.l1, tt.args.l2),
			)
		})
	}
}
