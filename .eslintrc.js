module.exports = {
    env: {
        browser: true,
        node: true, // Node.js global vars
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-console': 'off',
    },
};