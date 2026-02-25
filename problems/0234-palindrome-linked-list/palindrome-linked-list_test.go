package problem0234

import (
	"testing"

	. "github.com/o-p/leetcode/helpers"
	"github.com/stretchr/testify/assert"
)

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		name string
		vals []int
		want bool
	}{
		{
			"example 1: [1,2,2,1] => true",
			[]int{1, 2, 2, 1},
			true,
		},
		{
			"example 2: [1,2] => false",
			[]int{1, 2},
			false,
		},
		{
			"[2,3,3,2,3,2,2,3] => false",
			[]int{2, 3, 3, 2, 3, 2, 2, 3},
			false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, isPalindrome(BuildList(tt.vals)))
		})
	}
}
