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
		{name: "Case 1", args: param{s: "()"}, want: true},
		{name: "Case 2", args: param{s: "()[]{}"}, want: true},
		{name: "Case 3", args: param{s: "(]"}, want: false},
		{name: "Case 4", args: param{s: "([)]"}, want: false},
		{name: "Case 5", args: param{s: "{[]}"}, want: true},
	}

	expect := assert.New(t)
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			expect.Equal(
				tt.want,
				isValid(tt.args.s), "isValid() = %v, want %v",
				tt.args.s,
				tt.want,
			)
		})
	}
}
