/*
 * Copyright (c) 12.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: TapeEquilibrium
  URL: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingBGNAFN-N9A/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  let leftSum: number = 0;
  let rightSum: number = 0;

  // calc right sum. Also, it can be calculated with .reduce()
  for (let i: number = 0; i < A.length; i++) {
    rightSum += A[i];
  }

  // diff is missed before first iteration
  let diff: number | null = null;
  for (let P: number = 1; P < A.length; P++) {
    // update sums for the current P (on its shift)
    const index: number = P - 1;
    leftSum += A[index]; // add to left
    rightSum -= A[index]; // subtract from right

    // check difference
    const newDiff: number = Math.abs(leftSum - rightSum);
    if (diff === null || newDiff < diff) diff = newDiff;
  }

  return diff;
}