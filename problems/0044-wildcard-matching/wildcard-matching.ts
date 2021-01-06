const WILDCARD_SINGLE_CHARACTER = '?';
const WILDCARD_ANY_CHARACTERS = '*';

interface Wildcards {
  SINGLE: string;
  ANY: string;
}

/** 透過 Recuration 方式比對，複雜的 * 案例會超過 Max Call Stack */
export function recuration(
  text: string,
  pattern: string,
  WILDCARD: Wildcards = { SINGLE: WILDCARD_SINGLE_CHARACTER, ANY: WILDCARD_ANY_CHARACTERS },
): boolean {
  const [char] = text;
  const [tester] = pattern;

  switch (tester) {
    // *: 0 ~ ∞ chars
    case WILDCARD.ANY:
      return (
        // 分解為: isMatch 0 chars || isMatch 1 ~ ∞ chars
        recuration(text, pattern.slice(1), WILDCARD) || recuration(text.slice(1), pattern, WILDCARD)
      );
    // 已經沒有後續 pattern, 但如果還有 char, 則必定 false
    case undefined:
      return char === undefined;
    // 單字節判斷
    default:
      return (
        (tester === WILDCARD.SINGLE || tester === char) &&
        recuration(text.slice(1), pattern.slice(1), WILDCARD)
      );
  }
}

/**
 * 透過 Iteration 方式比對，要注意 text 與 pattern 兩邊各自要獨立的 anchor
 * 另外每個 * 只要遇到新的 * 就可以刷新兩個 anchor，因為新的 * 必定可以涵蓋前者的範圍
 */
export function iteration(
  text: string,
  pattern: string,
  WILDCARD: Wildcards = { SINGLE: WILDCARD_SINGLE_CHARACTER, ANY: WILDCARD_ANY_CHARACTERS },
): boolean {
  let anchorT = text.length;
  let anchorP = pattern.length;
  let indexT = 0;
  let indexP = 0;

  // 持續判斷至 pattern 到底且無法往回
  while (true) {
    const char = text[indexT];
    const tester = pattern[indexP];

    // 同時到底才算正確
    if (char === tester) {
      if (tester === undefined) return true;
      indexP += 1;
      indexT += 1;
      continue;
    }

    if (tester === WILDCARD.SINGLE && char !== undefined) {
      indexP += 1;
      indexT += 1;
      continue;
    }

    // 符合任意字串時，刷新 anchor，從下一個 tester 開始判斷
    if (tester === WILDCARD.ANY) {
      anchorT = indexT;
      anchorP = ++indexP;
      continue;
    }

    // 可以返回的情況
    if (anchorT < text.length) {
      indexP = anchorP;
      indexT = ++anchorT;
      continue;
    }

    return false;
  }
}

/**
 * 透過 Pattern 判斷兩個字串是否相等，支援兩種 wildcard:
 *   - ".": 單一任意字元
 *   - "*": 任意長度的任意字元
 */
export default iteration;
