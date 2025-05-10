/*
 * Copyright (c) 10.05.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: BinaryGap
  URL: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
  Level: Easy

  * Codility analysis: https://app.codility.com/demo/results/trainingSVVYN7-VFH/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	Not assessed
*/

// Core solution
function solution(N: number): number {
  const binaryNumber: string = N.toString(2);
  let maxGap: number = 0;

  let currentGap: number = 0;
  for (let i = 0; i < binaryNumber.length; i += 1) {
    const char: string = binaryNumber[i];
    if (char === '1') {
      // This is gap's end
      // update gap length if needed
      if (currentGap > maxGap) maxGap = currentGap;
      // reset current gap
      currentGap = 0;
    } else if (char === '0') {
      currentGap += 1;
    }
  }

  return maxGap;
}

/*
  Tricky solution (RegExp)
  * Codility analysis: https://app.codility.com/demo/results/trainingZGV25T-Q9T/
  * Task score:	100%

  * Correctness:	100%
  * Performance:	Not assessed
*/

const trickySolution = (N: number): number => {
  const binaryNumber: string = N.toString(2);
  let maxGap: number = 0;
  const match = binaryNumber.match(/(?<=1)0+(?=1)/g) ?? [];
  match.forEach((zeros: string) => {
    const count: number = zeros.length;
    if (count > maxGap) maxGap = count;
  });

  return maxGap;
}