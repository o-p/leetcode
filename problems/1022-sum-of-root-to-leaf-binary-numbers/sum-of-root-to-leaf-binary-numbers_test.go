package problem1022

import (
	"testing"

	"github.com/o-p/leetcode/helpers"
	"github.com/stretchr/testify/assert"
)

func TestSumRootToLeaf(t *testing.T) {
	assert := assert.New(t)

	tests := []struct {
		name string
		vals []any
		want int
	}{
		{
			"example 1: [1,0,1,0,1,0,1] => 22",
			[]any{1, 0, 1, 0, 1, 0, 1},
			22, // (100)+(101)+(110)+(111) = 4+5+6+7
		},
		{
			"example 2: single node [0] => 0",
			[]any{0},
			0,
		},
		{
			"single node [1] => 1",
			[]any{1},
			1,
		},
		{
			"left-skewed 1->1->1 => 7 (111)",
			[]any{1, 1, nil, 1},
			7,
		},
		{
			"root only with two leaves [1,0,1] => (10)+(11) = 2+3 = 5",
			[]any{1, 0, 1},
			5,
		},
		{
			"all zeros [0,0,0] => 0",
			[]any{0, 0, 0},
			0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(tt.want, sumRootToLeaf(helpers.BuildTree(tt.vals)))
		})
	}
}
