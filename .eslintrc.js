module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'airbnb',
    ],
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-import-module-exports': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100,
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
