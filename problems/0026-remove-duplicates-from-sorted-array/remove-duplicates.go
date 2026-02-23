package problem0026

func removeDuplicates(nums []int) int {
	uniq := 0
	last := -101 // -100 <= nums[i] <= 100

	for _, num := range nums {
		if num > last {
			uniq++
			last = num
			nums[uniq-1] = num
		}
	}
	return uniq
}
