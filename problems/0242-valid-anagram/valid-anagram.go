package problem0242

// 這題有進階版本, 支援所有 unicode, 感覺需要用 binary tree cache, 這邊不管他
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var cache [26]int

	for _, rune := range s {
		cache[rune-'a']++
	}

	for _, rune := range t {
		cache[rune-'a']--
	}

	for _, count := range cache {
		if count != 0 {
			return false
		}
	}

	return true
}
