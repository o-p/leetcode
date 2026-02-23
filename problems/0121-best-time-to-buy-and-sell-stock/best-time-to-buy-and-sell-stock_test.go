package problem0121

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMaxProfit(t *testing.T) {
	tests := []struct {
		name   string
		prices []int
		want   int
	}{
		{"all decreasing, no profit", []int{7, 6, 4, 3, 1}, 0},
		{"single element", []int{5}, 0},
		{"two elements increasing", []int{1, 2}, 1},
		{"two elements decreasing", []int{2, 1}, 0},
		{"all same price", []int{3, 3, 3, 3}, 0},
		{"profit at the end", []int{9, 8, 7, 1, 6}, 5},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, maxProfit(tt.prices))
		})
	}
}
