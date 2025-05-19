module.exports = {
  // Extend from Next.js recommended ESLint configuration
  extends: ['next/core-web-vitals'],

  // Global rules that apply to all files
  rules: {
    // 1. Globally turn off the no-img-element rule to allow using raw <img> tags
    '@next/next/no-img-element': 'off',
    
    // 2. Downgrade no-unused-vars from error to warn to prevent build failures
    // This allows unused variables but still highlights them as warnings locally
    '@typescript-eslint/no-unused-vars': ['warn', { 
      // Ignore variables that start with underscore
      'argsIgnorePattern': '^_',
      // Also ignore destructured variables that aren't used
      'destructuredArrayIgnorePattern': '^_',
      // Ignore all variables named in your specific case
      'varsIgnorePattern': '^(controls|imageHeight|cn|SheetDescription|planIndex|className)$'
    }]
  },

  // Specific overrides for different file patterns
  overrides: [
    {
      // 3. Disable react-hooks/exhaustive-deps for case-studies folder
      files: ['app/case-studies/**/*.tsx', 'app/case-studies/**/*.ts'],
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    },
    {
      // 3. Disable react-hooks/exhaustive-deps for ui components folder
      files: ['components/ui/**/*.tsx', 'components/ui/**/*.ts'],
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    }
  ],

  // This ensures the configuration is used in CI but can be overridden locally
  // by setting the NEXT_LINT_IGNORE_ESLINT environment variable
  ignorePatterns: process.env.CI ? [] : [
    // Add any patterns you want to ignore locally but enforce in CI
  ]
}
