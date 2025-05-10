/*
 * Copyright (c) 10.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: CyclicRotation
  URL: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingWM9YYY-KPQ/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	Not assessed
*/

// Core solution
export function solution(A: number[], K: number): number[] {
  const count: number = A.length;
  // calculate only needed moves: remove full array rotations
  const realRotation = K % count;
  if (realRotation === 0) return A;

  const result = [];

  // first element should be moved to this index R
  // this operation is equal to split array to 2 subarrays (second should have length R) and change them's positions:
  // [1, ... (N-R)-1, N-R, ... N] => [G1: (1, ... (N-R)-1), G2: ((N-R), ... N)]
  // [G1, G2] => [G2, G1] => [G2: ((N-R), ... N), G1: (1, ... (N-R)-1)]
  // so new array will have next items:
  // [(N-R), ... N, 1, ... (N-R)-1]

  const splitIndex: number = count - realRotation;

  // put second group [(N-R), N]
  for (let i = splitIndex; i < count; i++) {
    result.push(A[i]);
  }

  // put first group [0, (N-R)-1]
  for (let i = 0; i < splitIndex; i++) {
    result.push(A[i]);
  }

  return result;
}

/*
  Tricky solution
  * Codility analysis: https://app.codility.com/demo/results/training2HQA6Y-E59/
  * Task score:	  100%
  
  * Correctness:	100%
  * Performance:	Not assessed
*/

export function trickySolution(A: number[], K: number): number[] {
  const realRotation = K % A.length;
  return realRotation ? [
    ...A.slice(-realRotation),
    ...A.slice(0, A.length - realRotation)
  ] : A;
}

