import threeSum from './3sum';

test.each`
  nums                     | expected
  ${[-1, 0, 1, 2, -1, -4]} | ${[[-1, -1, 2], [-1, 0, 1]]} }
  ${[]}                    | ${[]}
  ${[0]}                   | ${[]}
  ${[1, -1]}               | ${[]}
`('3Sum: ($nums)', ({ nums, expected }) =>
  expect(threeSum(nums)).toEqual(expected)
);
