// Main lexarithm function
export { lexarithm } from './lexarithm.js';

// Greek utilities
export { GREEK_VALUES } from './greek/values.js';
export { normalizeGreek } from './greek/normalize.js';

// Math operations
export { partialReduction, finalReduction, getReductionSteps } from './math/reduction.js';
export { operate } from './math/operations.js';

// Types
export type {
  LetterValues,
  Ruleset,
  ReductionOptions,
  ReductionStep,
  LexarithmResult,
  OperationType,
  OperationResult,
  NumberPropertyInfo,
  SymbolicMeaning,
} from './types.js';
