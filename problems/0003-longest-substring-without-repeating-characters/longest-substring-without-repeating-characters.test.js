import lswrc from './longest-substring-without-repeating-characters'

test.each`
       s        | expected
  ${'abcabcbb'} | ${3}
  ${'bbbbb'}    | ${1}
  ${'pwwkew'}   | ${3}
  ${''}         | ${0}
`('Longest substring: ($s)', ({ s, expected }) =>
  expect(lswrc(s)).toBe(expected)
)
