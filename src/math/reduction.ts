import type { ReductionStep, ReductionOptions } from '../types.js';

/** Master numbers that may stop reduction (when enabled) */
const MASTER_NUMBERS = [11, 22, 33];

/**
 * Perform a single digit sum reduction (partial reduction).
 * Example: 1234 → 1+2+3+4 = 10
 *
 * @param n - Number to reduce
 * @returns Sum of all digits
 */
export function partialReduction(n: number): number {
  const str = Math.abs(Math.floor(n)).toString();
  return Array.from(str).reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

/**
 * Perform recursive digit sum until reaching a single digit (1-9).
 * Example: 1234 → 10 → 1
 *
 * If masterNumbers option is true, stops at 11, 22, or 33.
 *
 * @param n - Number to reduce
 * @param options - Reduction options
 * @returns Final reduced value
 */
export function finalReduction(
  n: number,
  options: ReductionOptions = {}
): number {
  let current = Math.abs(Math.floor(n));

  while (current >= 10) {
    // Check for master numbers if enabled
    if (options.masterNumbers && MASTER_NUMBERS.includes(current)) {
      return current;
    }
    current = partialReduction(current);
  }

  return current;
}

/**
 * Get all steps of the reduction process.
 *
 * @param n - Starting number
 * @param options - Reduction options
 * @returns Array of reduction steps showing the process
 */
export function getReductionSteps(
  n: number,
  options: ReductionOptions = {}
): ReductionStep[] {
  const steps: ReductionStep[] = [];
  let current = Math.abs(Math.floor(n));

  if (current < 10) {
    return steps;
  }

  while (current >= 10) {
    const digits = current.toString().split('');
    const expression = digits.join(' + ');
    const next = digits.reduce((sum, d) => sum + parseInt(d, 10), 0);

    steps.push({
      value: next,
      expression: `${expression} = ${next}`,
    });

    // Check for master numbers if enabled
    if (options.masterNumbers && MASTER_NUMBERS.includes(next)) {
      break;
    }

    current = next;
  }

  return steps;
}
