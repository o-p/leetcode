import isValid from './valid-parentheses';

describe('20. Valid Parentheses', (): void => {
  test.each`
       s        | expected
    ${'()'}     | ${true} }
    ${'()[]{}'} | ${true}
    ${'(]'}     | ${false}
    ${'([)]'}   | ${false}
    ${'{[]}'}   | ${true}
  `('Expect $s to be $expected', ({ s, expected }): void =>
    expect(isValid(s)).toBe(expected)
  );
});
