/*
 * Copyright (c) 11.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: PermMissingElem
  URL: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingP48SDY-2RB/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  // for es2023 you can use `const sortedA = A.toSorted(...)` instead of array mutation with sort
  A.sort((a, b) => a - b);

  for (let i: number = 0; i < A.length; i++) {
    const expectedValue: number = i + 1;
    // return missed item if not matched
    if (expectedValue !== A[i]) return expectedValue;
  }

  // all items in array exist, so next item is missed
  return A.length + 1;
}

/*
  Tricky solution (create array and set true if exists)
  * Codility analysis: https://app.codility.com/demo/results/training7X54EH-ACT/
  * Task score:	  100%
  
  * Correctness:	100%
  * Performance:	100%
*/

export function trickySolution(A: number[]): number {
  const isExist: boolean[] = Array(A.length + 2).fill(false);
  A.forEach((a) => isExist[a] = true);

  isExist[0] = true;
  return isExist.findIndex(a => !a);
}