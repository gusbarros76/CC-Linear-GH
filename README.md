# CC-Linear-GH

Linear AI Demo - TypeScript project with CPF validation

[![Tests](https://img.shields.io/badge/tests-25%20passed-success)](https://github.com/gusbarros76/CC-Linear-GH)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-green)](https://jestjs.io/)

## 📋 Overview

This project implements a robust CPF (Cadastro de Pessoas Físicas) validation system for Brazilian tax identification numbers. The implementation follows strict validation rules and includes comprehensive test coverage.

## 🚀 Features

- ✅ **Full CPF Validation**: Validates both format and check digits
- ✅ **Format Handling**: Accepts CPF with or without formatting (dots and dashes)
- ✅ **CPF Formatting**: Formats CPF strings to standard XXX.XXX.XXX-XX format
- ✅ **Comprehensive Tests**: 25 test cases covering all scenarios
- ✅ **TypeScript**: Full type safety with strict mode enabled
- ✅ **100% Test Coverage**: All code paths tested

## 📦 Installation

```bash
npm install
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Usage

```typescript
import { validateCPF, formatCPF } from './src/utils/validation/cpf';

// Validate CPF
validateCPF('111.444.777-35'); // true
validateCPF('11144477735');     // true
validateCPF('123.456.789-00');  // false

// Format CPF
formatCPF('11144477735');       // '111.444.777-35'
formatCPF('123.456.789-09');    // '123.456.789-09'
```

## 📚 API Reference

### `validateCPF(cpf: string): boolean`

Validates a Brazilian CPF number.

**Parameters:**
- `cpf` (string): The CPF to validate (can include dots and dashes)

**Returns:**
- `boolean`: `true` if valid, `false` otherwise

**Validation Rules:**
1. Must contain exactly 11 digits
2. Cannot be a sequence of repeated digits (e.g., 111.111.111-11)
3. Must have valid check digits calculated using the official algorithm

### `formatCPF(cpf: string): string`

Formats a CPF string to the standard XXX.XXX.XXX-XX format.

**Parameters:**
- `cpf` (string): The CPF to format (digits only or with formatting)

**Returns:**
- `string`: Formatted CPF or empty string if invalid

## 🏗️ Project Structure

```
CC-Linear-GH/
├── src/
│   └── utils/
│       └── validation/
│           ├── cpf.ts          # CPF validation implementation
│           └── cpf.test.ts     # Comprehensive test suite
├── dist/                       # Compiled JavaScript (after build)
├── coverage/                   # Test coverage reports
├── jest.config.js              # Jest configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🧰 Tech Stack

- **TypeScript 5.3.3**: Strict type checking and modern JS features
- **Jest 29.7.0**: Testing framework with ts-jest preset
- **Node.js**: ES2020 target for modern JavaScript support

## 📊 Test Results

```
Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        1.026 s
```

### Test Coverage

- ✅ Valid CPFs (formatted and unformatted)
- ✅ Invalid CPFs (wrong length, invalid check digits)
- ✅ Edge cases (null, undefined, non-string inputs)
- ✅ Format handling (dots, dashes, spaces, mixed characters)
- ✅ Known invalid patterns (repeated digits)

## 🔗 Related

- **Linear Issue**: [GUS-6](https://linear.app/issue/GUS-6) - Implementar função validação CPF
- **Pull Request**: [#1](https://github.com/gusbarros76/CC-Linear-GH/pull/1)

## 📝 License

MIT

## 👤 Author

GusBarros
