import type { LetterValues } from '../types.js';

/**
 * Default Greek letter values for lexarithm calculation.
 * Uses the ancient Greek numeral system (isopsephy):
 * - 1-9: Α Β Γ Δ Ε Ϛ Ζ Η Θ
 * - 10-90 (×10): Ι Κ Λ Μ Ν Ξ Ο Π Ϟ
 * - 100-900 (×100): Ρ Σ Τ Υ Φ Χ Ψ Ω Ϡ
 *
 * Includes archaic letters:
 * - Ϛ (stigma) = 6
 * - Ϟ (koppa) = 90
 * - Ϡ (sampi) = 900
 */
export const GREEK_VALUES: LetterValues = {
  Α: 1,
  Β: 2,
  Γ: 3,
  Δ: 4,
  Ε: 5,
  Ϛ: 6, // stigma (archaic)
  Ζ: 7,
  Η: 8,
  Θ: 9,
  Ι: 10,
  Κ: 20,
  Λ: 30,
  Μ: 40,
  Ν: 50,
  Ξ: 60,
  Ο: 70,
  Π: 80,
  Ϟ: 90, // koppa (archaic)
  Ρ: 100,
  Σ: 200,
  Τ: 300,
  Υ: 400,
  Φ: 500,
  Χ: 600,
  Ψ: 700,
  Ω: 800,
  Ϡ: 900, // sampi (archaic)
};
