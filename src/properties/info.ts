import type { NumberPropertyInfo } from '../types.js';
import {
  isPrime,
  isFibonacci,
  isPerfectSquare,
  isPerfectNumber,
  isTriangular,
  isPowerOfTwo,
} from './checks.js';

/**
 * Mystical and symbolic numbers with their meanings.
 */
const MYSTICAL_NUMBERS: Record<number, NumberPropertyInfo> = {
  1: { icon: '①', text: 'Μονάδα - Αρχή όλων', type: 'mystical' },
  3: { icon: '✝', text: 'Αγία Τριάδα - Τελειότητα', type: 'mystical' },
  7: { icon: '🕊', text: 'Ιερός αριθμός - 7 ημέρες δημιουργίας', type: 'mystical' },
  12: { icon: '⭐', text: 'Απόστολοι, Φυλές Ισραήλ, Ζώδια', type: 'mystical' },
  13: { icon: '🎲', text: 'Αριθμός γρουσουζιάς/τύχης', type: 'mystical' },
  40: { icon: '⛰', text: 'Δοκιμασία - 40 μέρες στην έρημο', type: 'mystical' },
  72: { icon: '📜', text: '72 Ονόματα του Θεού (Καββάλα)', type: 'mystical' },
  108: { icon: '🙏', text: 'Ιερός αριθμός (Βουδισμός/Ινδουισμός)', type: 'mystical' },
  153: { icon: '🐟', text: 'Ψάρια στο δίχτυ (Ιωάννης 21:11)', type: 'mystical' },
  369: { icon: '⚡', text: 'Κλειδί του Σύμπαντος (Nikola Tesla)', type: 'mystical' },
  666: { icon: '👿', text: 'Αριθμός του Θηρίου', type: 'mystical' },
  777: { icon: '👼', text: 'Θεία τελειότητα - Τριπλό 7', type: 'mystical' },
  888: {
    icon: '☦',
    text: 'ΙΗΣΟΥΣ στα ελληνικά (Ι=10, Η=8, Σ=200, Ο=70, Υ=400, Σ=200)',
    type: 'mystical',
  },
  999: { icon: '🔄', text: 'Ολοκλήρωση κύκλου', type: 'mystical' },
};

/**
 * Special numbers with cultural significance.
 */
const SPECIAL_NUMBERS: Record<number, NumberPropertyInfo> = {
  144: { icon: '📦', text: 'Μία χονδρική (12×12)', type: 'special' },
  360: { icon: '⭕', text: 'Μοίρες κύκλου', type: 'special' },
  365: { icon: '📅', text: 'Ημέρες του έτους', type: 'special' },
  1000: { icon: '🔟', text: 'Χιλιετία', type: 'special' },
};

/**
 * Get all properties and info about a number.
 * Returns mathematical properties, constants, mystical meanings, and special numbers.
 *
 * @param n - Number to analyze
 * @returns Array of property info objects
 *
 * @example
 * getNumberInfo(7)   // [{ icon: "🔢", text: "Πρώτος αριθμός", type: "math" }, ...]
 * getNumberInfo(888) // [{ icon: "☦", text: "ΙΗΣΟΥΣ...", type: "mystical" }]
 */
export function getNumberInfo(n: number): NumberPropertyInfo[] {
  if (!Number.isFinite(n) || n < 0) return [];

  const info: NumberPropertyInfo[] = [];
  const absN = Math.abs(n);

  // Mathematical constants (work for decimals too)
  if ((absN >= 3.14 && absN <= 3.15) || n === 314) {
    info.push({
      icon: 'π',
      text: 'Προσέγγιση του π (3.14159...)',
      type: 'constant',
    });
  }

  if ((absN >= 1.61 && absN <= 1.62) || n === 1618 || n === 161 || n === 162) {
    info.push({ icon: 'φ', text: 'Χρυσή τομή φ (1.618...)', type: 'constant' });
  }

  if ((absN >= 2.71 && absN <= 2.72) || n === 271 || n === 2718) {
    info.push({
      icon: 'e',
      text: 'Αριθμός Euler e (2.718...)',
      type: 'constant',
    });
  }

  // Integer-only properties
  if (!Number.isInteger(n) || n < 1) return info;

  // Mathematical properties
  if (isPrime(n)) {
    info.push({ icon: '🔢', text: 'Πρώτος αριθμός', type: 'math' });
  }

  if (isFibonacci(n)) {
    info.push({ icon: '🌀', text: 'Αριθμός Fibonacci', type: 'math' });
  }

  if (isPerfectSquare(n)) {
    const root = Math.sqrt(n);
    info.push({ icon: '□', text: `Τέλειο τετράγωνο (${root}²)`, type: 'math' });
  }

  if (isPerfectNumber(n)) {
    info.push({ icon: '✨', text: 'Τέλειος αριθμός', type: 'math' });
  }

  if (isTriangular(n)) {
    info.push({ icon: '△', text: 'Τριγωνικός αριθμός', type: 'math' });
  }

  if (isPowerOfTwo(n)) {
    const power = Math.log2(n);
    info.push({ icon: '⚡', text: `Δύναμη του 2 (2^${power})`, type: 'math' });
  }

  // Mystical numbers
  if (MYSTICAL_NUMBERS[n]) {
    info.push(MYSTICAL_NUMBERS[n]);
  }

  // Special numbers
  if (SPECIAL_NUMBERS[n]) {
    info.push(SPECIAL_NUMBERS[n]);
  }

  return info;
}
