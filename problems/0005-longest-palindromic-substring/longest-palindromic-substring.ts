// 1. 會有兩種可能狀況, 以 abc 為例
//    > abcba
//    > abccba
//
// 2. 跟 #3 不同, 沒辦法在找到最近的 match 後就放棄多餘的部分
//
// 3. 可能方案 => 從最長字串開始向內查 雙數測 abccba 單數測 abcba
//
// 4. 頻繁把字串反轉比較慢, 所以先把字串反轉好一份等著比對
//
// 5. 流程:
//    - 決定鏡像的位置
//    - 從鏡像位置開始最長可容忍長度開始向內比對

// @lc code=start
const longestPalindrome = stepsAndMirror;

// @lc code=end

// [FAILED TRIAL]
// 1. 先翻轉一次 cbbd => dbbc
// 2. 正向跟反向交錯:
//    ...cbbd   ....cbbd   ....cbbd    ....cbbd    ....cbbd    ....cbbd   ....cbbd
//    dbbc...   ..dbbc..   ...dbbc.    ....dbbc    .....dbb    ......db   .......d
//    _______   ________   ________    ________    ________    ________   ________
//    ...c...   ........   .....b..    .....bb.    ......b.    ........   .......d
//
// 結論: 這種做法會死在反轉字串相同但中間有間隔的 case:
// - 正向: aacabdkacaa
// - 反向: aacakdbacaa
//   得到  aaca 但應該要是 aca
//
// 後記: 這個 case 會遇到的問題在討論中 Approach 1: Longest Common Substring 的 common mistake
function reverseThenMatch(s: string): string {
  function findMatches(a: Array<string|null>, b: Array<string|null>): Array<string|null> {
    return a.map((char, i): string|null =>
      typeof char === 'string'
      && typeof b[i] === 'string'
      && char === b[i] ? char : null
    )
  }

  function longestMatches(a: Array<string|null>, b: Array<string|null>): string {
    return findMatches(a, b).reduce(({ longest, current }, value: string|null) => {
      if (typeof value === 'string') {
        current += value;
        return {
          longest: current.length > longest.length ? current : longest,
          current,
        }
      }
      return {
        longest,
        current: '',
      }
    }, { longest: '', current: '' })['longest']
  }

  function recursiveFindLongest(a: Array<string|null>, b: Array<string|null>, longest = '') {
    if (a.length) {
      const matches = longestMatches(a, b)
      return recursiveFindLongest(
        a.slice(1),
        b,
        matches.length > longest.length ? matches : longest
      )
    }
    return longest
  }

  const forward = [...Array(s.length).fill(null), ...s]
  return recursiveFindLongest(forward, [...forward].reverse())
}

// 1. 位移鏡像點，逐格前進
// 2. 透過鏡像點，回傳最長字串
//
//    c b b d    c b b d    c b b d    c b b d    c b b d    c b b d    c b b d
//    ^           ^           ^           ^           ^           ^           ^
//    _______    _______    _______    _______    _______    _______    _______
//    c                       b          b b          b                       d
//
// 3. 結論: pass, 但效能不彰
//      - 速度 26.71%
//      - 記憶 5.59%
//    思考 - 完全沒用到 cache 等常見方式
//
// 後記: 這後來翻討論, 應該類似 Approach 4: Expand Around Center
// 效率是 O(n^2), 但只需要固定記憶體空間, 這邊不確定是否實作有問題...
function stepsAndMirror(s: string, position: number = 0, longest: string = ''): string {
  if (position > s.length) {
    return longest
  }

  const mergeMirroredChars = (str: string, pos: number, distance: number = 0, word: string = ''): string => {
    const index1 = Math.floor(pos - distance)
    const index2 = Math.ceil(pos + distance)

    if (index1 >= 0 && index2 < str.length) {
      const first = str[index1];
      const second = str[index2]
      if (index1 === index2) return mergeMirroredChars(str, pos, distance + 1, first)
      if (first === second) return mergeMirroredChars(str, pos, distance + 1, `${first}${word}${second}`)
    }
    return word
  }

  const word = mergeMirroredChars(s, position)
  return stepsAndMirror(s, position + .5, word.length > longest.length ? word : longest);
}

export default longestPalindrome;
