/**
 * Validates a Brazilian CPF (Cadastro de Pessoas Físicas) number
 *
 * @param cpf - The CPF string to validate (can include dots and dashes)
 * @returns true if the CPF is valid, false otherwise
 *
 * @example
 * ```typescript
 * validateCPF('123.456.789-09') // returns true/false
 * validateCPF('12345678909')     // returns true/false
 * ```
 */
export function validateCPF(cpf: string): boolean {
  if (!cpf || typeof cpf !== 'string') {
    return false;
  }

  // Remove non-digit characters
  const cleanCPF = cpf.replace(/\D/g, '');

  // CPF must have exactly 11 digits
  if (cleanCPF.length !== 11) {
    return false;
  }

  // Check for known invalid CPFs (all digits the same)
  const invalidCPFs = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  if (invalidCPFs.includes(cleanCPF)) {
    return false;
  }

  // Validate first check digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let remainder = sum % 11;
  const firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;

  if (firstCheckDigit !== parseInt(cleanCPF.charAt(9))) {
    return false;
  }

  // Validate second check digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  remainder = sum % 11;
  const secondCheckDigit = remainder < 2 ? 0 : 11 - remainder;

  if (secondCheckDigit !== parseInt(cleanCPF.charAt(10))) {
    return false;
  }

  return true;
}

/**
 * Formats a CPF string with dots and dash
 *
 * @param cpf - The CPF string to format (only digits)
 * @returns Formatted CPF (XXX.XXX.XXX-XX) or empty string if invalid
 *
 * @example
 * ```typescript
 * formatCPF('12345678909') // returns '123.456.789-09'
 * ```
 */
export function formatCPF(cpf: string): string {
  if (!cpf || typeof cpf !== 'string') {
    return '';
  }

  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11) {
    return '';
  }

  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
