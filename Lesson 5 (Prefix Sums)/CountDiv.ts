/*
 * Copyright (c) 08.06.2025-09.06.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: CountDiv
  URL: https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
  Level: Medium

  * Codility analysis: https://app.codility.com/demo/results/trainingTQGPUS-AFD/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
export function solution(A: number, B: number, K: number): number {
  // count of elements before the number N (included itself, if N % K === 0) dividable to K can be calculated with `N div K` = Math.floor(N / K)
  // count between B (includes) and A (will be excluded) dividable to K can be calculated as difference between their `div`s:
  // Math.floor(B / K) - Math.floor(A / K)
  // So, we need to add `A` to the counter manually if A is dividable to K - this will be a prefix sum

  const prefixSum: number = A % K === 0 ? 1 : 0; // to include first item if it's dividable
  return Math.floor(B / K) - Math.floor(A / K) + prefixSum;
}

/*
  Tricky solution (without offset)
  * Codility analysis: https://app.codility.com/demo/results/trainingGDFQJT-VUN/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/
export function trickySolution(A: number, B: number, K: number): number {
  // to find next nearest dividable number to A - we need add `K - (A % K)` to A
  // [this is rest which is needed for A to make it dividable to K]
  // In this case A + `(K - (A % K))` = A + c where c can be [1...K] (c = K if A % K === 0)
  // We should not add `c` if c=K, so let's use % operation to make c's range [0, ..., K-1]
  // so nA = A + ((K - A % K) % K)
  const nextDivFromA: number = A + ((K - A % K) % K);
  // to find prev dividable number before B - we need remove rest on dividing by K from B:
  // So pB = B - (B % K)
  const prevDivBeforeB: number = B - (B % K);
  // So now we have two dividable to K numbers in [A...B] range
  // nA = a*K, pB = b*K, where a,b - natural numbers
  // so we need find count of integer numbers between a and b ([a...b] range)
  // Range: a, a + 1, ..., b - 1, b
  // Substrate (a - 1) for each item;
  // Range: 1, ..., b - (a - 1) = [b - a + 1];
  // So count of numbers between a and b (includes `a`, `b`) will be `b - a + 1`
  // (pB - nA) / K = b - a.
  // b - a + 1 = (pB - nA) / K + 1
  // we add 1, as we need include first item too
  return (prevDivBeforeB - nextDivFromA) / K + 1;
}