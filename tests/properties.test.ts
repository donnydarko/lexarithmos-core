import { describe, it, expect } from 'vitest';
import {
  isPrime,
  isFibonacci,
  isPerfectSquare,
  isPerfectNumber,
  isTriangular,
  isPowerOfTwo,
  getNumberInfo,
  getSymbolicMeaning,
} from '../src/properties/index.js';

describe('isPrime', () => {
  it('identifies primes correctly', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it('rejects non-primes', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });
});

describe('isFibonacci', () => {
  it('identifies Fibonacci numbers', () => {
    expect(isFibonacci(1)).toBe(true);
    expect(isFibonacci(2)).toBe(true);
    expect(isFibonacci(3)).toBe(true);
    expect(isFibonacci(5)).toBe(true);
    expect(isFibonacci(8)).toBe(true);
    expect(isFibonacci(13)).toBe(true);
    expect(isFibonacci(144)).toBe(true);
  });

  it('rejects non-Fibonacci numbers', () => {
    expect(isFibonacci(4)).toBe(false);
    expect(isFibonacci(7)).toBe(false);
    expect(isFibonacci(100)).toBe(false);
  });
});

describe('isPerfectSquare', () => {
  it('identifies perfect squares', () => {
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(100)).toBe(true);
  });

  it('rejects non-perfect squares', () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
  });
});

describe('isPerfectNumber', () => {
  it('identifies perfect numbers', () => {
    expect(isPerfectNumber(6)).toBe(true); // 1+2+3=6
    expect(isPerfectNumber(28)).toBe(true); // 1+2+4+7+14=28
  });

  it('rejects non-perfect numbers', () => {
    expect(isPerfectNumber(5)).toBe(false);
    expect(isPerfectNumber(10)).toBe(false);
  });
});

describe('isTriangular', () => {
  it('identifies triangular numbers', () => {
    expect(isTriangular(1)).toBe(true);
    expect(isTriangular(3)).toBe(true);
    expect(isTriangular(6)).toBe(true);
    expect(isTriangular(10)).toBe(true);
    expect(isTriangular(15)).toBe(true);
  });

  it('rejects non-triangular numbers', () => {
    expect(isTriangular(2)).toBe(false);
    expect(isTriangular(4)).toBe(false);
    expect(isTriangular(7)).toBe(false);
  });
});

describe('isPowerOfTwo', () => {
  it('identifies powers of two', () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(8)).toBe(true);
    expect(isPowerOfTwo(256)).toBe(true);
  });

  it('rejects non-powers of two', () => {
    expect(isPowerOfTwo(3)).toBe(false);
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(100)).toBe(false);
  });
});

describe('getNumberInfo', () => {
  it('returns info for mystical numbers', () => {
    const info888 = getNumberInfo(888);
    expect(info888.some((i) => i.type === 'mystical')).toBe(true);
    expect(info888.some((i) => i.text.includes('ΙΗΣΟΥΣ'))).toBe(true);

    const info666 = getNumberInfo(666);
    expect(info666.some((i) => i.text.includes('Θηρίου'))).toBe(true);
  });

  it('returns info for mathematical properties', () => {
    const info7 = getNumberInfo(7);
    expect(info7.some((i) => i.text.includes('Πρώτος'))).toBe(true);
  });

  it('returns empty array for negative numbers', () => {
    expect(getNumberInfo(-5)).toEqual([]);
  });
});

describe('getSymbolicMeaning', () => {
  it('returns meaning for 0-9', () => {
    expect(getSymbolicMeaning(1)?.title).toBe('Μονάδα');
    expect(getSymbolicMeaning(7)?.title).toBe('Επτάδα');
    expect(getSymbolicMeaning(9)?.title).toBe('Εννεάδα');
  });

  it('returns undefined for numbers outside 0-9', () => {
    expect(getSymbolicMeaning(10)).toBeUndefined();
    expect(getSymbolicMeaning(100)).toBeUndefined();
  });
});
