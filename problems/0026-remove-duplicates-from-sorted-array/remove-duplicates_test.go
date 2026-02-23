package problem0026

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRemoveDuplicates(t *testing.T) {
	type args struct {
		nums         []int
		expectedNums []int
	}
	tests := []struct {
		name string
		args args
	}{
		{
			"Input: [1,1,2]  Output: 2, [1,2]",
			args{[]int{1, 1, 2}, []int{1, 2}},
		},
		{
			"Input: [0,0,1,1,1,2,2,3,3,4]  Output: 5, [0,1,2,3,4]",
			args{[]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}, []int{0, 1, 2, 3, 4}},
		},
		{
			"Input: [1]  Output: 1, [1]",
			args{[]int{1}, []int{1}},
		},
	}

	expect := assert.New(t)
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			k := removeDuplicates(tt.args.nums)
			expect.Equal(len(tt.args.expectedNums), k)
			for i := 0; i < k; i++ {
				expect.Equal(tt.args.expectedNums[i], tt.args.nums[i])
			}
		})
	}
}
