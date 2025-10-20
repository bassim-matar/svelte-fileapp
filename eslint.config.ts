import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import { browser } from 'globals'

const allowedProps = ['__table__']

const namingConventionRules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: ['PascalCase'],
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
    },
    {
      selector: 'class',
      format: ['PascalCase'],
    },
    {
      selector: 'method',
      format: ['camelCase'],
    },
    {
      selector: 'function',
      format: ['camelCase'],
    },
    {
      selector: 'variableLike',
      format: ['camelCase'],
    },
    {
      selector: 'variableLike',
      filter: {
        regex: '.*Component$',
        match: true,
      },
      format: ['PascalCase'],
    },
    {
      selector: 'property',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'property',
      filter: {
        regex: `^(${allowedProps.join('|')})$`,
        match: true,
      },
      format: null,
    },
  ],
}

const globals = {
  ...browser,
}

const strictTypeScriptRules = {
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-inferrable-types': 'off',
  'init-declarations': ['error', 'always'],
} as const

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    ignores: [
      '**/*.json.js',
      'app/',
      'dist/',
      'node_modules/',
      'src/page/.router-index.ts',
      'test-app/',
    ],
  },
  {
    files: ['**/*.ts', '**/*.svelte.ts'],
    ignores: ['eslint.config.ts', 'vite.config.ts', 'test-app/vite.config.ts'],
    languageOptions: {
      globals,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: { ...namingConventionRules, ...strictTypeScriptRules },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      globals,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: { ...namingConventionRules, ...strictTypeScriptRules },
  },
]
