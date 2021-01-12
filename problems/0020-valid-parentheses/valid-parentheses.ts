interface Match {
  [left: string]: string;
}

const DEFAULT_MATCHES: Match = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * 每個字符進入時，可能情況有：
 *   1. 左括號：在待比對清單中加入對應的右括號
 *   2. 右括號：如果待比對清單第一個字元跟這個右括號不相同，則錯誤；如果相同，則消去
 *   3. 其他字：錯誤
 *
 * 執行到最後，如果待比對清單已清空，則為正確
 *
 * 圖解 isValid('(){[]}')
 *
 * 步驟 | 當前字元 | 當前待比對清單 | 比對完之後的待比對清單
 *   1      (          ''              ')'
 *   2      )          ')'             ''
 *   3      {          ''              '}'
 *   4      [          '}'             ']}'
 *   5      ]          ']}'            '}'
 *   6      }          '}'             ''
 *
 * 最終待比對清單為空，所以為正確
 */
function isValid(s: string, matches: Match = DEFAULT_MATCHES): boolean {
  let pendings = '';
  for (const char of s) {
    if (pendings[0] === char) {
      pendings = pendings.slice(1);
      continue;
    }

    const match = matches[char] ?? null;
    if (match === null) {
      return false;
    }

    pendings = match + pendings;
  }
  return pendings.length === 0;
}

export default isValid;
