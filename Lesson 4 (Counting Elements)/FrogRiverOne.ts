/*
 * Copyright (c) 22.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: FrogRiverOne
  URL: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingYQBQVV-Y5V/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(X: number, A: number[]): number {
  const existedLeaves: {[second: number]: boolean} = {};
  // count of uniq leaves across the river
  let fallLeavesAcrossCount: number = 0;

  // A[K] represents the position where one leaf falls at time K, measured in seconds
  for (let second: number = 0; second < A.length; second += 1) {
    const leafPosition: number = A[second];
    // add leaf if it's a first one on this position
    if (!existedLeaves[leafPosition]) {
      existedLeaves[leafPosition] = true;
      fallLeavesAcrossCount += 1;
    }

    // check leaves count
    if (fallLeavesAcrossCount === X) return second;
  }

  // If the frog is never able to jump to the other side of the river, the function should return -1.
  return -1;
}