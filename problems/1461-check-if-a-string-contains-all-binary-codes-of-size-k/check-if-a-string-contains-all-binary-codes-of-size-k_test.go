package problem1461

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestHasAllCodes(t *testing.T) {
	tests := []struct {
		name string
		s    string
		k    int
		want bool
	}{
		{"s=00110110 k=2 -> true", "00110110", 2, true},
		{"s=0110 k=1 -> true", "0110", 1, true},
		{"s=0110 k=2 -> false", "0110", 2, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, hasAllCodes(tt.s, tt.k))
		})
	}
}
