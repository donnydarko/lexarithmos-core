/**
 * Greek letter to number mapping type
 */
export type LetterValues = Record<string, number>;

/**
 * Reduction options for lexarithm calculation
 */
export interface ReductionOptions {
  /** If true, stops reduction at master numbers (11, 22, 33). Default: false */
  masterNumbers?: boolean;
}

/**
 * Ruleset configuration for lexarithm calculation
 */
export interface Ruleset {
  /** Custom letter-to-value mapping. If not provided, uses default Greek values */
  values?: LetterValues;
  /** Reduction options */
  reduction?: ReductionOptions;
}

/**
 * Step in the reduction process
 */
export interface ReductionStep {
  /** The number at this step */
  value: number;
  /** Expression showing the calculation (e.g., "1 + 2 + 3 + 4") */
  expression: string;
}

/**
 * Result of a lexarithm calculation
 */
export interface LexarithmResult {
  /** Original input text */
  original: string;
  /** Normalized text (uppercase, no accents, final sigma converted) */
  normalized: string;
  /** Array of individual letter values */
  values: number[];
  /** Sum of all letter values */
  sum: number;
  /** Final reduced value (single digit 1-9, or master number if enabled) */
  reduced: number;
  /** Steps showing the reduction process */
  steps: ReductionStep[];
}

/**
 * Mathematical operation types
 */
export type OperationType = 'add' | 'subtract' | 'multiply' | 'divide' | 'ratio';

/**
 * Result of an operation between two lexarithm values
 */
export interface OperationResult {
  /** First operand */
  a: number;
  /** Second operand */
  b: number;
  /** Operation performed */
  operation: OperationType;
  /** Result of the operation */
  result: number;
  /** Human-readable expression */
  expression: string;
  /** Error message if operation failed (e.g., divide by zero) */
  error?: string;
}

/**
 * Number property info item
 */
export interface NumberPropertyInfo {
  /** Icon representing the property */
  icon: string;
  /** Description text */
  text: string;
  /** Property type category */
  type: 'math' | 'constant' | 'mystical' | 'special';
}

/**
 * Symbolic meaning for reduced numbers (0-9)
 */
export interface SymbolicMeaning {
  /** Title of the number meaning */
  title: string;
  /** Short description */
  short: string;
  /** Full description */
  full: string;
  /** Associated qualities */
  qualities: string[];
}
