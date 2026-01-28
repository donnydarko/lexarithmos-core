import type { LexarithmResult, Ruleset, LetterValues } from './types.js';
import { GREEK_VALUES } from './greek/values.js';
import { normalizeGreek } from './greek/normalize.js';
import { finalReduction, getReductionSteps } from './math/reduction.js';

/**
 * Calculate the lexarithm (isopsephy value) of Greek text.
 *
 * Returns the sum of letter values, the reduced value, and detailed steps.
 * By default uses the ancient Greek numeral system with reduction to 1-9.
 *
 * @param text - Greek text to analyze
 * @param ruleset - Optional custom ruleset with letter values and reduction options
 * @returns Complete lexarithm result with normalized text, values, sum, reduced value, and steps
 *
 * @example
 * // Basic usage
 * const result = lexarithm("Ἀθήνα");
 * // result.normalized = "ΑΘΗΝΑ"
 * // result.values = [1, 9, 8, 50, 1]
 * // result.sum = 69
 * // result.reduced = 6
 *
 * @example
 * // With master numbers enabled
 * const result = lexarithm("ΚΟΣΜΟΣ", { reduction: { masterNumbers: true } });
 *
 * @example
 * // With custom letter values
 * const result = lexarithm("TEST", { values: { T: 10, E: 5, S: 20 } });
 */
export function lexarithm(text: string, ruleset: Ruleset = {}): LexarithmResult {
  const values: LetterValues = ruleset.values ?? GREEK_VALUES;
  const reductionOptions = ruleset.reduction ?? {};

  // Normalize the input text
  const normalized = normalizeGreek(text);

  // Calculate individual letter values
  const letterValues: number[] = Array.from(normalized).map(
    (char) => values[char] ?? 0
  );

  // Calculate sum
  const sum = letterValues.reduce((acc, val) => acc + val, 0);

  // Calculate reduced value
  const reduced = finalReduction(sum, reductionOptions);

  // Get reduction steps
  const steps = getReductionSteps(sum, reductionOptions);

  return {
    original: text,
    normalized,
    values: letterValues,
    sum,
    reduced,
    steps,
  };
}
