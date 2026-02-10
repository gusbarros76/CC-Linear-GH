import { validateCPF, formatCPF } from './cpf';

describe('validateCPF', () => {
  describe('valid CPFs', () => {
    it('should validate a valid CPF without formatting', () => {
      expect(validateCPF('12345678909')).toBe(true);
    });

    it('should validate a valid CPF with formatting', () => {
      expect(validateCPF('123.456.789-09')).toBe(true);
    });

    it('should validate real valid CPFs', () => {
      const validCPFs = [
        '11144477735',
        '111.444.777-35',
        '52998224725',
        '529.982.247-25'
      ];

      validCPFs.forEach(cpf => {
        expect(validateCPF(cpf)).toBe(true);
      });
    });
  });

  describe('invalid CPFs', () => {
    it('should reject CPF with less than 11 digits', () => {
      expect(validateCPF('123456789')).toBe(false);
    });

    it('should reject CPF with more than 11 digits', () => {
      expect(validateCPF('123456789012')).toBe(false);
    });

    it('should reject CPF with all digits the same', () => {
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

      invalidCPFs.forEach(cpf => {
        expect(validateCPF(cpf)).toBe(false);
      });
    });

    it('should reject CPF with invalid first check digit', () => {
      expect(validateCPF('12345678901')).toBe(false);
    });

    it('should reject CPF with invalid second check digit', () => {
      expect(validateCPF('12345678908')).toBe(false);
    });

    it('should reject empty string', () => {
      expect(validateCPF('')).toBe(false);
    });

    it('should reject null value', () => {
      expect(validateCPF(null as any)).toBe(false);
    });

    it('should reject undefined value', () => {
      expect(validateCPF(undefined as any)).toBe(false);
    });

    it('should reject non-string values', () => {
      expect(validateCPF(12345678909 as any)).toBe(false);
      expect(validateCPF({} as any)).toBe(false);
      expect(validateCPF([] as any)).toBe(false);
    });

    it('should reject CPF with only letters', () => {
      expect(validateCPF('abcdefghijk')).toBe(false);
    });

    it('should reject CPF with special characters only', () => {
      expect(validateCPF('...-')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle CPF with mixed formatting', () => {
      expect(validateCPF('111.444.77735')).toBe(true);
    });

    it('should handle CPF with spaces', () => {
      expect(validateCPF('111 444 777 35')).toBe(true);
    });

    it('should handle CPF with extra characters', () => {
      expect(validateCPF('CPF: 111.444.777-35')).toBe(true);
    });
  });
});

describe('formatCPF', () => {
  it('should format a valid CPF', () => {
    expect(formatCPF('12345678909')).toBe('123.456.789-09');
  });

  it('should format a CPF that is already formatted', () => {
    expect(formatCPF('123.456.789-09')).toBe('123.456.789-09');
  });

  it('should return empty string for CPF with less than 11 digits', () => {
    expect(formatCPF('123456789')).toBe('');
  });

  it('should return empty string for CPF with more than 11 digits', () => {
    expect(formatCPF('123456789012')).toBe('');
  });

  it('should return empty string for empty input', () => {
    expect(formatCPF('')).toBe('');
  });

  it('should return empty string for null input', () => {
    expect(formatCPF(null as any)).toBe('');
  });

  it('should return empty string for undefined input', () => {
    expect(formatCPF(undefined as any)).toBe('');
  });

  it('should handle CPF with mixed characters', () => {
    expect(formatCPF('111a444b777c35')).toBe('111.444.777-35');
  });
});
