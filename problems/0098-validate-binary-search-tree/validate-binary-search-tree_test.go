package problem0098

import (
	"testing"

	. "github.com/o-p/leetcode/helpers"
	"github.com/stretchr/testify/assert"
)

func TestIsValidBST(t *testing.T) {
	tests := []struct {
		name string
		vals []any
		want bool
	}{
		{
			"example 1: [2,1,3] => true",
			[]any{2, 1, 3},
			true,
		},
		{
			"example 2: [5,1,4,null,null,3,6] => false (right child 4 < root 5)",
			[]any{5, 1, 4, nil, nil, 3, 6},
			false,
		},
		{
			"single node => true",
			[]any{1},
			true,
		},
		{
			"left child equals parent => false (must be strictly less)",
			[]any{2, 2, nil},
			false,
		},
		{
			"right child equals parent => false (must be strictly greater)",
			[]any{2, nil, 2},
			false,
		},
		{
			"deep violation: [5,4,6,null,null,3,7] => false (3 in right subtree but < root 5)",
			[]any{5, 4, 6, nil, nil, 3, 7},
			false,
		},
		{
			"negative values: [-2,-3,-1] => true",
			[]any{-2, -3, -1},
			true,
		},
		{
			"min int as node value: [math.MinInt32] => true",
			[]any{-2147483648},
			true,
		},
		{
			"max int as node value: [math.MaxInt32] => true",
			[]any{2147483647},
			true,
		},
		{
			"increasing left-skewed tree => false",
			[]any{3, 1, nil, nil, 2},
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, isValidBST(BuildTree(tt.vals)))
		})
	}
}
