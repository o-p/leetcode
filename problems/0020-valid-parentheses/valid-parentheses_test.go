package problem0020

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsValid(t *testing.T) {
	type param struct {
		s string
	}
	tests := []struct {
		name string
		args param
		want bool
	}{
		{"Case 1", param{"()"}, true},
		{"Case 2", param{"()[]{}"}, true},
		{"Case 3", param{"(]"}, false},
		{"Case 4", param{"([)]"}, false},
		{"Case 5", param{"{[]}"}, true},
	}

	expect := assert.New(t)
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			expect.Equal(tt.want, isValid(tt.args.s))
		})
	}
}
