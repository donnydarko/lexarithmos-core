import type { OperationType, OperationResult } from '../types.js';

/**
 * Perform a mathematical operation between two lexarithm values.
 *
 * Supported operations:
 * - add: a + b
 * - subtract: a - b
 * - multiply: a * b
 * - divide: a / b (with divide-by-zero handling)
 * - ratio: a : b (returns decimal ratio, with divide-by-zero handling)
 *
 * @param a - First operand
 * @param b - Second operand
 * @param operation - Type of operation to perform
 * @returns Operation result including error handling for division by zero
 *
 * @example
 * operate(888, 666, 'add')      // { result: 1554, expression: "888 + 666 = 1554" }
 * operate(888, 666, 'ratio')    // { result: 1.333..., expression: "888 : 666 = 1.33" }
 * operate(100, 0, 'divide')     // { result: Infinity, error: "Division by zero" }
 */
export function operate(
  a: number,
  b: number,
  operation: OperationType
): OperationResult {
  let result: number;
  let expression: string;
  let error: string | undefined;

  switch (operation) {
    case 'add':
      result = a + b;
      expression = `${a} + ${b} = ${result}`;
      break;

    case 'subtract':
      result = a - b;
      expression = `${a} - ${b} = ${result}`;
      break;

    case 'multiply':
      result = a * b;
      expression = `${a} × ${b} = ${result}`;
      break;

    case 'divide':
      if (b === 0) {
        result = a === 0 ? NaN : a > 0 ? Infinity : -Infinity;
        expression = `${a} ÷ ${b} = ${result}`;
        error = 'Division by zero';
      } else {
        result = a / b;
        // Format to reasonable precision
        const formatted = Number.isInteger(result)
          ? result.toString()
          : result.toFixed(4).replace(/\.?0+$/, '');
        expression = `${a} ÷ ${b} = ${formatted}`;
      }
      break;

    case 'ratio':
      if (b === 0) {
        result = a === 0 ? NaN : a > 0 ? Infinity : -Infinity;
        expression = `${a} : ${b} = ${result}`;
        error = 'Division by zero';
      } else {
        result = a / b;
        const formatted = Number.isInteger(result)
          ? result.toString()
          : result.toFixed(4).replace(/\.?0+$/, '');
        expression = `${a} : ${b} = ${formatted}`;
      }
      break;

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  return {
    a,
    b,
    operation,
    result,
    expression,
    ...(error && { error }),
  };
}
