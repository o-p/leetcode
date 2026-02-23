package problem1461

// 1 <= k <= 20
func hasAllCodes(s string, k int) bool {
	// 預計要找出的數量 = 2^k 個 (包含 0)
	expect := 1 << k
	// 最大數字到 2^k - 1
	max := expect - 1
	// 已找到數量
	count := 0

	// 下面做一個 []uint64 的 cache, 記錄找到的數字
	size := (expect + 63) / 64
	founds := make([]uint64, size)

	prev := 0
	for i, c := range s {
		// 把之前的數字左移一格, 加上最新一位的 0 or 1, 然後只保留最後 k 位
		prev = (prev<<1 + int(c-'0')) & max

		// 依照規則，要長度足夠之後才能開始判斷
		if i >= k-1 {
			index := prev / 64

			cached := founds[index]
			founds[index] |= 1 << (prev % 64)

			if cached != founds[index] {
				count++

				if count == expect {
					return true
				}
			}
		}
	}

	return false
}
