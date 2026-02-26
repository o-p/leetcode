package problem1404

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNumSteps(t *testing.T) {
	tests := []struct {
		name string
		s    string
		want int
	}{
		{"example 1: 1101 (13) => 6", "1101", 6},
		{"example 2: 10 (2) => 1", "10", 1},
		{"example 3: 1 (1) => 0", "1", 0},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, numSteps(tt.s))
		})
	}
}
