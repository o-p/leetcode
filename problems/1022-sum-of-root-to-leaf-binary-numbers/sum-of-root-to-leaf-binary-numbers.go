package problem1022

import . "github.com/o-p/leetcode/helpers"

func sumRootToLeaf(root *TreeNode) int {
	return getSum(root, 0)
}

func getSum(node *TreeNode, sum int) int {
	if node == nil {
		return 0
	}

	val := sum<<1 + node.Val
	if node.Left == nil && node.Right == nil {
		return val
	} else {
		return getSum(node.Left, val) + getSum(node.Right, val)
	}
}
