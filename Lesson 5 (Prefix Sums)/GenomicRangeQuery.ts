/*
 * Copyright (c) 09.06.2025
 * Created by Viktor Kniahnitskyi
 *
 * GitHub: https://github.com/Knyazik01
 */

/*
  Task: GenomicRangeQuery
  URL: https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
  Level: Medium

  * Codility analysis: https://app.codility.com/demo/results/trainingBVHD7W-AP3/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/

// Core solution
type ImpactFactor = 'A' | 'C' | 'G' | 'T';
const IMPACT_FACTOR: { [key in ImpactFactor]: number } = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
} as const;

export function solution(S: string, P: number[], Q: number[]): number[] {
  const prefixSumOfCountForImpactFactors: { [key in ImpactFactor]: number[] } = {
    A: [0],
    C: [0],
    G: [0],
    T: [0],
  };

  // fill counts of impact factor from start to the current item
  // Total of one slice — O(1): count_total(PrefixSums, x, y) = PrefixSums[y + 1] - PrefixSums[x]
  for (let i: number = 0; i < S.length; i ++) {
    const impactFactor = S[i] as ImpactFactor;
    Object.keys(prefixSumOfCountForImpactFactors)
      .forEach((key) => {
        const currentImpactFactor: ImpactFactor = key as ImpactFactor;
        const currentPrefix: number = (impactFactor === currentImpactFactor) ? 1 : 0;
        const nextSum: number = prefixSumOfCountForImpactFactors[currentImpactFactor][i] + currentPrefix;
        prefixSumOfCountForImpactFactors[currentImpactFactor].push(nextSum);
      });
  }


  const result: number[] = [];
  for (let i: number = 0; i < P.length; i++) {
    const minIndex: number = P[i];
    const maxIndex: number = Q[i];

    // find index in needed range (P[i] <= index <= Q[i]) from the lowest impact factor to the highest one
    // we use `find` here to stop iterations after first match, as it'll be the lowest impact factor
    const minImpactFactor: ImpactFactor = (['A', 'C', 'G', 'T'] as ImpactFactor[])
      .find((impactFactor) => (
        // find impact factor, which is contained (its count is more than 0) in needed range (P[i] <= impactFactor <= Q[i])
        prefixSumOfCountForImpactFactors[impactFactor][maxIndex + 1] - prefixSumOfCountForImpactFactors[impactFactor][minIndex] > 0
      ));

    // add to result
    result.push(IMPACT_FACTOR[minImpactFactor]);
  }

  return result;
}

/*
  Tricky solution (using positions)
  * Codility analysis: https://app.codility.com/demo/results/trainingJJCF98-RN3/
  * Task score:	  100%

  * Correctness:	100%
  * Performance:	100%
*/
export function trickySolution(S: string, P: number[], Q: number[]): number[] {
  const indexesOfImpactFactors: { [key in ImpactFactor]: number[] } = {
    A: [],
    C: [],
    G: [],
    T: [],
  };

  // save impact factors indexes per impact factor
  // ex.
  // For S = 'ACAGC' indexesOfImpactFactors will have value
  // {
  //   A: [0, 2],
  //   C: [1, 4],
  //   G: [3],
  //   T: [],
  // }
  for (let i: number = 0; i < S.length; i++) {
    const impactFactor = S[i] as ImpactFactor;
    indexesOfImpactFactors[impactFactor].push(i);
  }

  const result: number[] = [];
  for (let i: number = 0; i < P.length; i++) {
    const minIndex: number = P[i];
    const maxIndex: number = Q[i];

    // find index in needed range (P[i] <= index <= Q[i]) from the lowest impact factor to the highest one
    // we use `find` here to stop iterations after first match, as it'll be the lowest impact factor
    const minImpactFactor: ImpactFactor = (['A', 'C', 'G', 'T'] as ImpactFactor[])
      .find((impactFactor) => (
        // find impact factor, which contain index in needed range (P[i] <= index <= Q[i])
        -1 !== indexesOfImpactFactors[impactFactor].findIndex((index: number) => minIndex <= index && index <= maxIndex)
      ));

    // add to result
    result.push(IMPACT_FACTOR[minImpactFactor]);
  }

  return result;
}