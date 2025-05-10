/*
 * Copyright (c) 10.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: OddOccurrencesInArray
  URL: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingPFYJCS-JRQ/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number[]): number {
  const notPaired: { [key: number]: boolean } = {};
  A.forEach((num: number) => {
    if (!notPaired[num]) notPaired[num] = true; // add new item
    else delete notPaired[num]; // delete existed
  });

  return +Object.keys(notPaired)[0];
}

/*
  Tricky solution
  * Codility analysis: https://app.codility.com/demo/results/trainingH34D6Z-ASB/
  * Task score:	  100%
  
  * Correctness:	100%
  * Performance:	100%
*/

export function trickySolution(A: number[]): number {
  // XOR operation:
  // if it will be called even times - it'll not affect the initial value
  // but if it'll be called once - its value will be replaced with this value
  return A.reduce((a, b) => a ^ b, 0);
}