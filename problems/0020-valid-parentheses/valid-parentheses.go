package problem0020

var parentheses = map[string]string{
	"(": ")",
	"[": "]",
	"{": "}",
}

func isValid(s string) bool {
	pendings := ""

	for _, char := range s {
		if len(pendings) > 0 && char == rune(pendings[0]) {
			pendings = string(pendings[1:])
		} else if pair, isLeftParenthese := parentheses[string(char)]; isLeftParenthese {
			pendings = pair + pendings
		} else {
			return false
		}
	}

	return len(pendings) == 0
}
