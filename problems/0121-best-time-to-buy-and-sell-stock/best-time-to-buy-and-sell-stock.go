package problem0121

// 基本上就是 cache 前一天的價格
// 1. 收益: 當作昨天有買入並馬上獲利了結
// 2. 虧損: 當作昨天沒買入
func maxProfit(prices []int) int {
	last := 10000
	profit := 0

	for _, price := range prices {
		if price > last {
			profit += price - last
		}

		last = price
	}

	return profit
}
