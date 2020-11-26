import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.79.0/testing/asserts.ts";

import twoSum from './two-sum.ts'

Deno.test('[#0001] Two Sum', (): void => {
  assertEquals(
    twoSum([2, 7, 11, 15], 9),
    [0, 1],
  );

  assertEquals(
    twoSum([3, 2, 4], 6),
    [1, 2],
  );

  assertEquals(
    twoSum([3, 3], 6),
    [0, 1],
  );
})
