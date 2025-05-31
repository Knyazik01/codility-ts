/*
 * Copyright (c) 22.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: PermCheck
  URL: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingP78EDT-ED8/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  const existedNumbers: {[n: number]: boolean} = {};
  let countOfUniqueNumbers: number = 0;
  let maxValue: number = A[0];

  // Each element of array A is a positive integer
  // So to be a permutation - A's items should a numbers from 1 to N = A.length (items count).
  // To match this we need to check next conditions:
  // [1]. all items should be unique (count of unique should be same as all items count) - we will have N unique items
  // [2]. max value should be same with its count (N = A.length)
  // If min value is '1' (based on task) and max value is equal to items count (N) [2] and all items is unique (N unique values) [1],
  // so according to the Pigeonhole Principle (Dirichlet box principle) these items values should be from 1 to N

  for (let i: number = 0; i < A.length; i++) {
    const number: number = A[i];
    if (existedNumbers[number]) {
      // this item already exist, so array A cannot be a permutation
      return 0;
    } else {
      // save number to exists
      existedNumbers[number] = true;
      // increase unique count
      countOfUniqueNumbers += 1;
      // update max value
      if (number > maxValue) maxValue = number;
    }
  }

  // [1] (count of unique should be same as all items count)
  const isAllUnique: boolean = countOfUniqueNumbers === A.length;
  // [2] (max value should be same with its count)
  const isMaxValueMatchesItemsCount: boolean = maxValue === A.length;

  // check both conditions
  return isAllUnique && isMaxValueMatchesItemsCount ? 1 : 0;
}

/*
  Tricky solution: (Set with numbers 1...N + check if all exist in A (remove A items + check if set is empty))
  * Codility analysis: https://app.codility.com/demo/results/training88S2ZX-RQR/
  * Task score:	  100%
  
  * Correctness:	100%
  * Performance:	100%
*/
export function trickySolution(A: number[]): number {
  const N: number = A.length
  const expectedValues = new Set<number>();

  // fill expected values (1...N)
  for (let i: number = 1; i <= N; i++) {
    expectedValues.add(i);
  }

  for (let a of A) {
    if (expectedValues.has(a)) {
      // remove item from set
      expectedValues.delete(a);
    } else {
      // value is missed (or this is a duplicated value)
      return 0;
    }
  }

  // if all items has been removed based on A values - A is permutation
  return expectedValues.size === 0 ? 1 : 0;
}