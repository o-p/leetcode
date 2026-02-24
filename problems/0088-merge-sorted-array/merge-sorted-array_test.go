package problem0088

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMerge(t *testing.T) {
	tests := []struct {
		name  string
		nums1 []int
		m     int
		nums2 []int
		n     int
		want  []int
	}{
		{
			"example 1: [1,2,3,0,0,0] m=3, [2,5,6] n=3 => [1,2,2,3,5,6]",
			[]int{1, 2, 3, 0, 0, 0}, 3,
			[]int{2, 5, 6}, 3,
			[]int{1, 2, 2, 3, 5, 6},
		},
		{
			"example 2: [1] m=1, [] n=0 => [1]",
			[]int{1}, 1,
			[]int{}, 0,
			[]int{1},
		},
		{
			"example 3: [0] m=0, [1] n=1 => [1]",
			[]int{0}, 0,
			[]int{1}, 1,
			[]int{1},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			merge(tt.nums1, tt.m, tt.nums2, tt.n)
			assert.Equal(t, tt.want, tt.nums1)
		})
	}
}
