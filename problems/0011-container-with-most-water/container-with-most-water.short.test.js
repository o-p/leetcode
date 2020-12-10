import maxArea from './container-with-most-water.short';

test.each`
  height                 | expected
  ${[1,8,6,2,5,4,8,3,7]} | ${49} }
  ${[1,1]}               | ${1}
  ${[4,3,2,1,4]}         | ${16}
  ${[1,2,1]}             | ${2}
`('Container With Most Water: ($height)', ({ height, expected }) =>
  expect(maxArea(height)).toBe(expected)
);
