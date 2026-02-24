package problem0104

import . "github.com/o-p/leetcode/helpers"

func maxDepth(root *TreeNode) int {
	return getDepth(root, 0)
}

func getDepth(node *TreeNode, dep int) int {
	if node == nil {
		return dep
	} else {
		return max(getDepth(node.Left, dep+1), getDepth(node.Right, dep+1))
	}
}
