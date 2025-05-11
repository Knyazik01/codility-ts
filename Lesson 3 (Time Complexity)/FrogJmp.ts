/*
 * Copyright (c) 11.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: FrogJmp
  URL: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingDXBS48-JND/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(X: number, Y: number, D: number): number {
  const distance: number = Y - X;
  return Math.ceil(distance / D);
}
