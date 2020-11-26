import twoSum from './two-sum.ts';

test.each`
       nums         | target | expected
  ${[2, 7, 11, 15]} | ${9}   | ${[0, 1]}
  ${[3, 2, 4]}      | ${6}   | ${[1, 2]}
  ${[3, 3]}         | ${6}   | ${[0, 1]}
`('Two Sum: ($nums, $target)', ({ nums, target, expected }) =>
  expect(twoSum(nums, target)).toEqual(expected)
);
