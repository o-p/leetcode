package problem0242

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsAnagram(t *testing.T) {
	tests := []struct {
		name string
		s, t string
		want bool
	}{
		{"example 1: anagram / nagaram => true", "anagram", "nagaram", true},
		{"example 2: rat / car => false", "rat", "car", false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, isAnagram(tt.s, tt.t))
		})
	}
}
