const twoSum = (nums: Array<number>, target: number): Array<number> => {
  const cached: { [index:number]: number } = {}
  let result: Array<number> = []

  nums.some((num: number, index: number): boolean => {
    if (typeof cached[target - num] === 'number') {
      result = [cached[target - num], index]
      return true
    }
    cached[num] = index
    return false
  })
  return result
};

export default twoSum;
