package problem1356

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSortByBits(t *testing.T) {
	tests := []struct {
		name string
		arr  []int
		want []int
	}{
		{
			"example 1: [0,1,2,3,4,5,6,7,8] => [0,1,2,4,8,3,5,6,7]",
			[]int{0, 1, 2, 3, 4, 5, 6, 7, 8},
			[]int{0, 1, 2, 4, 8, 3, 5, 6, 7},
		},
		{
			"example 2: [1024,512,256,128,64,32,16,8,4,2,1] => [1,2,4,8,16,32,64,128,256,512,1024]",
			[]int{1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1},
			[]int{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, sortByBits(tt.arr))
		})
	}
}
