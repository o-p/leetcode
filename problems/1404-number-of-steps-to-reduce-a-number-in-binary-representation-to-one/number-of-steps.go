package problem1404

func numSteps(s string) int {
	steps := 0
	pending := 0

	// 在 len > 1 情況:

	// case 1: 尾數 0, penging 0, +1 step, pending 0
	// case 2: 尾數 1, pending 0, +2 step, pending 1
	// case 3: 尾數 0, pending 1, +2 step, pending 1
	// case 4: 尾數 1, pending 1, +1 step, pending 1

	// 最後一個 1:
	// pending 0: +0
	// pending 1: +1

	for i := len(s) - 1; i > 0; i-- {
		if s[i] == '0' {
			if pending == 0 {
				steps++
			} else {
				steps += 2
			}
		} else {
			if pending == 0 {
				steps += 2
				pending = 1
			} else {
				steps++
			}
		}
	}

	if pending == 1 {
		steps++
	}

	return steps
}
