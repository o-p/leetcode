# LeetCode Practice — Agent Context

## Project Purpose

Personal LeetCode problem-solving practice. Problems are solved in multiple languages. Focus is on quickly writing solutions and running tests.

## Directory Structure

```text
problems/NNNN-problem-name/   # One directory per problem (zero-padded 4-digit prefix)
helpers/                      # Shared types used across problems (e.g. ListNode)
difficulty/                   # Problem categorization metadata
```

## Languages & Runtimes

| Language   | Runtime     | Test Runner     |
|------------|-------------|-----------------|
| TypeScript | Bun         | `bun test`      |
| Go         | Go stdlib   | `go test`       |
| Rust       | Cargo       | `cargo test`    |

**TypeScript**: Use `bun:test` imports — do NOT use Jest or Deno APIs. No `.js` files.

## Test Conventions

### TypeScript (Bun)

```typescript
import { test, expect, describe } from 'bun:test';
```

- Co-locate test as `<problem-name>.test.ts` alongside `<problem-name>.ts`
- Use `test.each` or `describe` + `test` pattern for table-driven tests
- Import shared types from `../../helpers/` when needed (e.g. `ListNode`)

Run: `bun test problems/NNNN-problem-name/`

### Go

```go
package problemNNNN

import (
    "testing"
    "github.com/stretchr/testify/assert"
)
```

- Test file: `<problem-name>_test.go`, same package as solution
- Use table-driven tests with `[]struct{ name string; ... }` + `t.Run`
- Use `assert.New(t)` from testify for assertions

Run: `go test -v ./problems/NNNN-problem-name/`

### Rust (future)

- Use built-in `#[cfg(test)]` module with `#[test]` functions
- Table-driven via a `vec![]` of test cases iterated in the test body

Run: `cargo test`

## Agent Instructions

When asked to generate tests or scaffold a new problem:

1. **Generate test file only** — no README, no extra markdown, no documentation files
2. Include meaningful edge cases: empty input, single element, duplicates, negative numbers, boundaries — whatever is relevant to the problem type
3. For TypeScript: the solution file exports a default function; named exports are used for multiple approaches
4. For Go: package name follows the pattern `problemNNNN` (e.g. `problem0026`)
5. Use helper types from `helpers/` when the problem involves linked lists, trees, etc.
6. Test case names should be descriptive enough to identify the case at a glance in VS Code's test runner

## Scaffold Boilerplate (skip reading existing files — use these directly)

When scaffolding a new problem `NNNN-problem-name` in language L, the steps are:

1. `mkdir -p problems/NNNN-problem-name/`
2. Write solution stub
3. Write test file
4. Run test to verify compile (expect failures on empty stub)

### Go — solution stub

```go
package problemNNNN

func functionName(args) returnType {
    return zero_value
}
```

### Go — test file

```go
package problemNNNN

import (
    "testing"

    "github.com/stretchr/testify/assert"
)

func TestFunctionName(t *testing.T) {
    tests := []struct {
        name string
        // input fields
        want returnType
    }{
        {"description of case", inputArgs, expectedOutput},
        // more cases...
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            assert.Equal(t, tt.want, functionName(tt.inputArgs))
        })
    }
}
```

> If the problem uses linked lists or trees, add `. "github.com/o-p/leetcode/helpers"` to both files.

### TypeScript — solution stub

```typescript
export default function functionName(args): returnType {
    return zero_value;
}
```

### TypeScript — test file

```typescript
import { describe, test, expect } from 'bun:test';
import functionName from './problem-name';

describe('FunctionName', () => {
    test.each([
        ['description', inputArgs, expectedOutput],
        // more cases...
    ])('%s', (_, input, expected) => {
        expect(functionName(input)).toBe(expected);
    });
});
```

## VS Code Workflow

- **Go**: The Go extension auto-discovers `_test.go` files; use CodeLens "run test" / "debug test" inline
- **TypeScript**: The Bun VS Code extension shows test results inline; run individual tests via CodeLens
- **Formatting**: `.editorconfig` is set (2-space indent, LF, UTF-8) — editors should respect this automatically

Keep solutions and tests in the same directory so VS Code file explorer and test explorer stay in sync.

## TODO

- Migrate legacy TS problems from Jest/yarn to `bun:test` (low priority)
