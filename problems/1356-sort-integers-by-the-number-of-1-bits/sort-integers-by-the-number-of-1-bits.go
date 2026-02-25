package problem1356

import "slices"

var MAX_NUM = 10000

// 0 <= arr[i] <= 10^4 => 最高 14 bits
func sortByBits(arr []int) []int {
	slices.SortFunc(arr, func(a int, b int) int {
		countA := bitCount(a)
		countB := bitCount(b)

		diff := countA - countB
		return diff*MAX_NUM + (a - b)
	})

	return arr
}

// easy approach: 逐個 bit 計算
// func countBits(n int) int {
// 	count := 0
// 	for n > 0 {
// 		count += n & 1
// 		n >>= 1
// 	}
// 	return count
// }

/*
O(1) approach: 參考 https://www.geeksforgeeks.org/count-set-bits-in-an-integer/

	int BitCount(unsigned int u)
	{
	     unsigned int uCount;

	     uCount = u - ((u >> 1) & 033333333333) - ((u >> 2) & 011111111111);
	     return ((uCount + (uCount >> 3)) & 030707070707) % 63;
	}
*/
func bitCount(n int) int {
	uCount := n - ((n >> 1) & 0o33333333333) - ((n >> 2) & 0o11111111111)
	return ((uCount + (uCount >> 3)) & 0o30707070707) % 63
}
