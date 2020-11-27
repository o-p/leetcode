import lps from './longest-palindromic-substring';

test.each`
       s           | expected
  ${'babad'}       | ${'bab'} }
  ${'cbbd'}        | ${'bb'}
  ${'a'}           | ${'a'}
  ${'ac'}          | ${'a'}
  ${'aacabdkacaa'} | ${'aca'}
`('Longest Palindromic Substring: ($s)', ({ s, expected }) =>
  expect(lps(s)).toBe(expected)
);
