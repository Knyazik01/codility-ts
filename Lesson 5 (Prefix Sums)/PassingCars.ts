/*
 * Copyright (c) 05.06.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: PassingCars
  URL: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/training7BMXP6-JWB/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
const MAX_PAIR_COUNT: number = 1e9; // 1_000_000_000
const CAR_TO_EAST_DIRECTION: number = 0;
export function solution(A: number[]): number {
  // 0 - east (->), 1 - west (<-)
  // To count pairs lets save the count of cart, which move to east
  // if current car moves to west - add count of to east cars to pairs count
  // if pair count is more than MAX_PAIR_COUNT - return `-1`
  let pairsCount: number = 0;
  let carsToEast: number = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === CAR_TO_EAST_DIRECTION) {
      carsToEast += 1;
    } else {
      // increase pairs count
      pairsCount += carsToEast;
      // check max value
      if (pairsCount > MAX_PAIR_COUNT) return -1;
    }
  }

  return pairsCount;
}