// eslint.config.cjs — ESM repo wrapper (flat config)
const path = require('node:path');

// Shared base config — MUST export an array
const baseConfig = require(path.resolve(__dirname, 'config/eslint.base.cjs'));

// Prettier config for markdown override (used in CJS repo)
// const prettierConfig = require('./prettier.config.cjs');

module.exports = [
  // 1. Override for config/tooling files (CJS in an ESM repo)
  {
    files: [
      '**/*.config.{js,cjs,mjs}',
      '**/config/**/*.cjs',
      '**/scripts/**/*.cjs',
    ],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': 'off',
      'import/order': 'off',
      'import/no-commonjs': 'off',
    },
  },

  // 2. Shared base config
  ...baseConfig,

  // 3. Markdown override — active for .md files
  // {
  //   files: ['**/*.md'],
  //   processor: 'markdown/markdown',
  //   rules: {
  //     'prettier/prettier': ['warn', prettierConfig],
  //     'no-undef': 'off',
  //     'no-unused-vars': 'off',
  //   },
  // },

  // // 4. Repo-specific overrides
  // ...localOverrides,
];
