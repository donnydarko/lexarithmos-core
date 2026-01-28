import { describe, it, expect } from 'vitest';
import {
  lexarithm,
  normalizeGreek,
  partialReduction,
  finalReduction,
  operate,
  GREEK_VALUES,
} from '../src/index.js';

describe('normalizeGreek', () => {
  it('removes accents and diacritical marks', () => {
    expect(normalizeGreek('Ἀθήνα')).toBe('ΑΘΗΝΑ');
    expect(normalizeGreek('λόγος')).toBe('ΛΟΓΟΣ');
    expect(normalizeGreek('ἔρως')).toBe('ΕΡΩΣ');
  });

  it('converts final sigma to regular sigma', () => {
    expect(normalizeGreek('κόσμος')).toBe('ΚΟΣΜΟΣ');
    expect(normalizeGreek('ς')).toBe('Σ');
  });

  it('converts to uppercase', () => {
    expect(normalizeGreek('αβγδ')).toBe('ΑΒΓΔ');
  });

  it('handles empty string', () => {
    expect(normalizeGreek('')).toBe('');
    expect(normalizeGreek()).toBe('');
  });
});

describe('GREEK_VALUES', () => {
  it('has correct values for basic letters', () => {
    expect(GREEK_VALUES['Α']).toBe(1);
    expect(GREEK_VALUES['Ι']).toBe(10);
    expect(GREEK_VALUES['Ρ']).toBe(100);
    expect(GREEK_VALUES['Ω']).toBe(800);
  });

  it('has correct values for archaic letters', () => {
    expect(GREEK_VALUES['Ϛ']).toBe(6); // stigma
    expect(GREEK_VALUES['Ϟ']).toBe(90); // koppa
    expect(GREEK_VALUES['Ϡ']).toBe(900); // sampi
  });
});

describe('lexarithm', () => {
  it('calculates correct sum for ΙΗΣΟΥΣ (888)', () => {
    const result = lexarithm('ΙΗΣΟΥΣ');
    expect(result.sum).toBe(888);
    expect(result.normalized).toBe('ΙΗΣΟΥΣ');
  });

  it('calculates correct sum with accents', () => {
    const result = lexarithm('Ἀθήνα');
    expect(result.normalized).toBe('ΑΘΗΝΑ');
    // Α=1, Θ=9, Η=8, Ν=50, Α=1
    expect(result.sum).toBe(69);
  });

  it('returns correct letter values array', () => {
    const result = lexarithm('ΑΒΓ');
    expect(result.values).toEqual([1, 2, 3]);
    expect(result.sum).toBe(6);
  });

  it('reduces to single digit', () => {
    const result = lexarithm('ΙΗΣΟΥΣ'); // 888
    expect(result.reduced).toBe(6); // 8+8+8=24, 2+4=6
  });

  it('includes reduction steps', () => {
    const result = lexarithm('ΙΗΣΟΥΣ'); // 888
    expect(result.steps.length).toBeGreaterThan(0);
    expect(result.steps[0].expression).toContain('8 + 8 + 8');
  });

  it('supports master numbers option', () => {
    // Find a word that reduces to 11
    const result = lexarithm('ΒΘ', { reduction: { masterNumbers: true } }); // Β=2, Θ=9 = 11
    expect(result.sum).toBe(11);
    expect(result.reduced).toBe(11);
  });
});

describe('partialReduction', () => {
  it('sums digits correctly', () => {
    expect(partialReduction(1234)).toBe(10);
    expect(partialReduction(888)).toBe(24);
    expect(partialReduction(123)).toBe(6);
  });

  it('handles single digit', () => {
    expect(partialReduction(5)).toBe(5);
  });
});

describe('finalReduction', () => {
  it('reduces to single digit', () => {
    expect(finalReduction(888)).toBe(6); // 888→24→6
    expect(finalReduction(1234)).toBe(1); // 1234→10→1
    expect(finalReduction(999)).toBe(9); // 999→27→9
  });

  it('returns same value for single digit', () => {
    expect(finalReduction(7)).toBe(7);
    expect(finalReduction(0)).toBe(0);
  });
});

describe('operate', () => {
  it('adds correctly', () => {
    const result = operate(888, 666, 'add');
    expect(result.result).toBe(1554);
    expect(result.expression).toContain('888 + 666');
  });

  it('subtracts correctly', () => {
    const result = operate(888, 666, 'subtract');
    expect(result.result).toBe(222);
  });

  it('multiplies correctly', () => {
    const result = operate(10, 20, 'multiply');
    expect(result.result).toBe(200);
  });

  it('divides correctly', () => {
    const result = operate(100, 25, 'divide');
    expect(result.result).toBe(4);
  });

  it('handles division by zero', () => {
    const result = operate(100, 0, 'divide');
    expect(result.result).toBe(Infinity);
    expect(result.error).toBe('Division by zero');
  });

  it('calculates ratio', () => {
    const result = operate(888, 666, 'ratio');
    expect(result.result).toBeCloseTo(1.333, 2);
  });
});
