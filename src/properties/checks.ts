/**
 * Check if a number is prime.
 *
 * @param n - Number to check
 * @returns True if the number is prime
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Check if a number is in the Fibonacci sequence.
 * Checks against precomputed values up to 6765.
 *
 * @param n - Number to check
 * @returns True if the number is a Fibonacci number
 */
export function isFibonacci(n: number): boolean {
  const fibs = [
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
    4181, 6765,
  ];
  return fibs.includes(n);
}

/**
 * Check if a number is a perfect square.
 *
 * @param n - Number to check
 * @returns True if the number is a perfect square
 */
export function isPerfectSquare(n: number): boolean {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
}

/**
 * Check if a number is a perfect number.
 * A perfect number equals the sum of its proper divisors.
 * Examples: 6 (1+2+3), 28 (1+2+4+7+14)
 *
 * @param n - Number to check
 * @returns True if the number is perfect
 */
export function isPerfectNumber(n: number): boolean {
  if (n < 2) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

/**
 * Check if a number is triangular.
 * Triangular numbers: 1, 3, 6, 10, 15, 21, 28, 36...
 *
 * @param n - Number to check
 * @returns True if the number is triangular
 */
export function isTriangular(n: number): boolean {
  if (n < 1) return false;
  const k = Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
  return (k * (k + 1)) / 2 === n;
}

/**
 * Check if a number is a power of two.
 *
 * @param n - Number to check
 * @returns True if the number is a power of two
 */
export function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
