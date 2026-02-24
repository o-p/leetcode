package problem0098

import . "github.com/o-p/leetcode/helpers"

// 檢查每個節點, left < node < right, 需要跨層級比較, 不能只比較父子節點
func isValidBST(root *TreeNode) bool {
	return isSubtreeValidBST(root.Left, nil, &root.Val) && isSubtreeValidBST(root.Right, &root.Val, nil)
}

func isSubtreeValidBST(node *TreeNode, minVal *int, maxVal *int) bool {
	if node == nil {
		return true
	}

	if minVal != nil && node.Val <= *minVal {
		return false
	}

	if maxVal != nil && node.Val >= *maxVal {
		return false
	}

	return isSubtreeValidBST(node.Left, minVal, &node.Val) && isSubtreeValidBST(node.Right, &node.Val, maxVal)
}
