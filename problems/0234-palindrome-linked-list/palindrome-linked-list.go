package problem0234

import (
	"math"

	. "github.com/o-p/leetcode/helpers"
)

var MAX = math.MaxInt / 10 // 用來 cache 的 max value

// list 長度 1 ~ 10^5
// list node value 0 ~ 9
func isPalindrome(head *ListNode) bool {
	// node value 0~9, 用十進制 cache

	// 0: 預算出 MAX = 10^digits - 1
	var digits int = 1
	for num := 0; num <= MAX; num = num*10 + 9 {
		digits++
	}

	// 1: 算出 list 長度
	length := 0
	for cur := head; cur != nil; cur = cur.Next {
		length++
	}

	// 2: build cache
	cacheSize := (length + digits - 1) / digits
	forwards, backwards := make([]int, cacheSize), make([]int, cacheSize)

	for i, cur := 0, head; cur != nil; i, cur = i+1, cur.Next {
		bPos := length - 1 - i
		bMod := bPos % digits
		bIndex := bPos / digits
		fIndex := i / digits
		fMod := i % digits

		forwards[fIndex] += cur.Val * int(math.Pow10(fMod))
		backwards[bIndex] += cur.Val * int(math.Pow10(bMod))
	}

	// 3: compare cache
	for i := 0; i < cacheSize; i++ {
		if forwards[i] != backwards[i] {
			return false
		}
	}

	return true
}
