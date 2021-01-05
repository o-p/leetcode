import isMatch, { recuration, iteration } from './wildcard-matching';

describe('簡易測試', (): void => {
  test.each`
    text       | pattern   | expected
    ${''}      | ${''}     | ${true}
    ${''}      | ${'a'}    | ${false}
    ${'0'}     | ${''}     | ${false}
    ${'aa'}    | ${'a'}    | ${false}
    ${'aa'}    | ${'*'}    | ${true}
    ${'cb'}    | ${'?a'}   | ${false}
    ${'cb'}    | ${'?b'}   | ${true}
    ${'acdcb'} | ${'*a*b'} | ${true}
  `('$"$text" <-> "$pattern"', ({ text, pattern, expected }): void => {
    expect(recuration(text, pattern)).toBe(expected);
    expect(iteration(text, pattern)).toBe(expected);
  });
});

describe('完整測試', (): void => {
  test.each`
    text            | pattern                  | expected
    ${''}           | ${''}                    | ${true}
    ${''}           | ${'a'}                   | ${false}
    ${'0'}          | ${''}                    | ${false}
    ${'aa'}         | ${'a'}                   | ${false}
    ${'aa'}         | ${'*'}                   | ${true}
    ${'cb'}         | ${'?a'}                  | ${false}
    ${'cb'}         | ${'?b'}                  | ${true}
    ${'acdcb'}      | ${'*a*b'}                | ${true}
    ${'acdcb'}      | ${'a*c?b'}               | ${false}
    ${'b'}          | ${'*?*?*'}               | ${false}
    ${'abcbcbcbcd'} | ${'a**bc*bc*'}           | ${true}
    ${'abcbcbcbcd'} | ${'********??*****??*k'} | ${false}
    ${'abcabbaabc'} | ${'ab*ab*ab*ab*'}        | ${false}
  `('"$text" <-> "$pattern"', ({ text, pattern, expected }): void => {
    expect(isMatch(text, pattern)).toBe(expected);
  });
});
