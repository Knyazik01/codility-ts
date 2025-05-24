/*
 * Copyright (c) 24.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: MissingInteger
  URL: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
  Level: Medium

  * Codility analysis: https://app.codility.com/demo/results/trainingY3X2TQ-6KY/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  const savedValues: number[] = [];
  for (let i: number = 0; i < A.length; i++) {
    if (A[i] > 0) savedValues[A[i]] = 1;
  }

  // if no one saved - return minimum positive integer
  if (savedValues.length === 0) return 1;

  // we start from 1, as 0 should not be counted
  for (let i: number = 1; i < savedValues.length; i++) {
    if (savedValues[i] !== 1) return i;
  }

  // return next value
  return savedValues.length;
}

/*
  Tricky solution (set of unique values and check from 1 to A.length)
  * Codility analysis: https://app.codility.com/demo/results/training9S8WUD-CUE/
  * Task score:	  100%
  
  * Correctness:	100%
  * Performance:	100%
*/
export function trickySolution(A: number[]): number {
  const set = new Set<number>(A);
  for (let index: number = 1; index <= A.length; index++) {
    // return if missed
    if (!set.has(index)) return index
  }

  // return next element
  return A.length + 1;
}