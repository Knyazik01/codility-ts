/*
 * Copyright (c) 31.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: MaxCounters
  URL: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
  Level: Medium

  * Codility analysis: https://app.codility.com/demo/results/trainingQ7JZHW-52M/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(N: number, A: number[]): number[] {
  let maximumCounter: number = 0;
  // To save values only between maximize operations
  let counters: {[counter: number]: number} = {};

  A.forEach((value: number): void => {
    const isMaxOperator: boolean = N + 1 === value;
    if (isMaxOperator) {
      // we use maximumCounter as one of values, as this can be several maximize operations one-by-one
      maximumCounter = Math.max(maximumCounter, ...Object.values(counters));
      counters = {};
    } else {
      // increase current counter. If this is a first increment - use maximum as init value
      counters[value] = (counters[value] || maximumCounter) + 1
    }
  });

  const result: number[] = [];
  for (let i: number = 1; i <= N; i++) {
    // set counter value. If it doesn't exist - set maximum value
    result.push(counters[i] || maximumCounter);
  }
  return result;
}