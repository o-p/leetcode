package problem0088

/*
m: nums1 需要處理的 elements counts
n: nums2 需要處理的 elements counts
nums1.length: m + n
nums2.length: n
*/
func merge(nums1 []int, m int, nums2 []int, n int) {
	for i := 0; i < len(nums1); i++ {
		// i: 已 merge 的元素, 反向尋找, 避免覆蓋 nums1 有效的元素
		idx := len(nums1) - 1 - i

		if m == 0 {
			n -= 1
			nums1[idx] = nums2[n]
		} else if n == 0 {
			m -= 1
			nums1[idx] = nums1[m]
		} else {
			if nums1[m-1] > nums2[n-1] {
				m -= 1
				nums1[idx] = nums1[m]
			} else {
				n -= 1
				nums1[idx] = nums2[n]
			}
		}
	}
}
