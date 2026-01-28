/**
 * Normalize Greek text for lexarithm calculation.
 *
 * Performs the following transformations:
 * 1. Removes diacritical marks (accents, breathings, dialytika)
 * 2. Converts final sigma (ς) to regular sigma (σ)
 * 3. Converts to uppercase
 *
 * @param text - Input Greek text
 * @returns Normalized uppercase Greek text without accents
 *
 * @example
 * normalizeGreek("Ἀθήνα") // Returns "ΑΘΗΝΑ"
 * normalizeGreek("λόγος") // Returns "ΛΟΓΟΣ"
 */
export function normalizeGreek(text: string = ''): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove combining diacritical marks
    .replace(/ς/g, 'σ') // Convert final sigma to regular sigma
    .toUpperCase();
}
