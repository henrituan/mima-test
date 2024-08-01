module.exports = {
  extends: ['expo', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/constants',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/utils',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/services',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/stores/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/hooks',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/app',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/screens/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
