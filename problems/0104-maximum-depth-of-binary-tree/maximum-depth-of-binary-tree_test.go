package problem0104

import (
	"testing"

	. "github.com/o-p/leetcode/helpers"
	"github.com/stretchr/testify/assert"
)

func TestMaxDepth(t *testing.T) {
	tests := []struct {
		name string
		root *TreeNode
		want int
	}{
		{
			// [3,9,20,null,null,15,7] -> 3
			"root=[3,9,20,null,null,15,7]",
			&TreeNode{3,
				&TreeNode{9, nil, nil},
				&TreeNode{20,
					&TreeNode{15, nil, nil},
					&TreeNode{7, nil, nil},
				},
			},
			3,
		},
		{
			// [1,null,2] -> 2
			"root=[1,null,2]",
			&TreeNode{1, nil, &TreeNode{2, nil, nil}},
			2,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, maxDepth(tt.root))
		})
	}
}
