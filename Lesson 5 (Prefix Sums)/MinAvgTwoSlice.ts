/*
 * Copyright (c) 09.06.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: MinAvgTwoSlice
  URL: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
  Level: Medium

  * Codility analysis: https://app.codility.com/demo/results/training5E857Z-NE3/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  // ! Prove we need to check only 2 or 3 items in slice
  // Case where avg_3 < avg_2
  // case [1, 10, 1], avg_2 = (1+10)/2 = 5.5; avg_3 = (1+10+1)/3 = 4;
  //
  // avg_4 cannot be less than avg_2
  // Let's prove it.
  // Else both conditions should be truth at the same time:
  // (1) (a+b+c+d)/4 < (a+b)/2
  // (2) (a+b+c+d)/4 < (c+d)/2
  //
  // (1)*4 => (a+b+c+d) < 2*(a+b)
  // c+d < a+b
  //
  // (2)*4 => (a+b+c+d) < 2*(c+d)
  // a+b < c+d
  //
  // So we'll get this condition, which is falsy, as something cannot be grater and less from the same value at once:
  // c+d < a+b < c+d
  //
  // So we need to check only average for 2 and 3 items in slice
  const MAX_SLICE_SIZE: number = 3;

  let minAverage: number = Infinity;
  let minAverageIndex: number = 0;

  // we need to check only each 2 or 3 elements in slice
  // so we can use prefix sum for this:
  // 1. prefixSum = a[i];
  // 2. increase prefix sum on each iteration until slice will have 3 items max (+ check average)
  for (let i: number = 0; i < A.length; i++) {
    let prefixSum: number = A[i];

    // j has i+1 as min value, as slice should have at least two items
    // Limit items max count in array slice: MAX_SLICE_SIZE (3, as described before) [slice count can be calculated with (j-i+1)]
    // Limit j value to be less than array length (to prevent calling an index outside the array)
    for (let j: number = i + 1; (j - i + 1) <= MAX_SLICE_SIZE && j < A.length; j++) {
      const itemsCount: number = j - i + 1;

      // increase the sum
      prefixSum += A[j];
      const currentAverage: number = prefixSum / itemsCount;

      if (currentAverage < minAverage) {
        // update average and index
        minAverage = currentAverage;
        minAverageIndex = i;
      }
    }
  }

  return minAverageIndex;
}