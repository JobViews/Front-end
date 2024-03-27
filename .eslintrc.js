module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'next'
	],
	plugins: [
		'@stylistic/js'
	],
	overrides: [
		{
			env: { node: true },
			files: [
				'.eslintrc.{js,cjs}'
			],
			parserOptions: { sourceType: 'script' },
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	globals: {
		React: true,
		google: true,
		mount: true,
		mountWithRouter: true,
		shallow: true,
		shallowWithRouter: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
	ignorePatterns: [
		'**/*.d.ts'
	],
	rules: {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-console': [
			'error'
		],
		'no-empty': [
			'error'
		],
		'no-eval': [
			'error'
		],
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'@stylistic/js/array-bracket-spacing': [
			'error'
		],
		'@stylistic/js/arrow-parens': [
			'error',
			'always'
		],
		'@stylistic/js/arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			}
		],
		'@stylistic/js/block-spacing': [
			'error',
			'always'
		],
		'@stylistic/js/brace-style': [
			'error',
			'1tbs'
		],
		'@stylistic/js/comma-dangle': [
			'error',
			{
				arrays: 'never',
				objects: 'always-multiline',
			}
		],
		'@stylistic/js/implicit-arrow-linebreak': [
			'error',
			'beside'
		],
		'@stylistic/js/key-spacing': [
			'error'
		],
		'@stylistic/js/keyword-spacing': [
			'error'
		],
		'@stylistic/js/newline-per-chained-call': [
			'error'
		],
		'@stylistic/js/no-multi-spaces': [
			'error'
		],
		'@stylistic/js/object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 3, 
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 3,
				},
				ImportDeclaration: {
					multiline: true,
					minProperties: 3,
				},
				ExportDeclaration: {
					multiline: true,
					minProperties: 3,
				},
			}
		],
		'@stylistic/js/object-curly-spacing': [
			'error',
			'always'
		],
		'@stylistic/js/object-property-newline': [
			'error'
		],
		'@stylistic/js/quote-props': [
			'error',
			'consistent-as-needed'
		],
		'@stylistic/js/space-before-blocks': [
			'error'
		],
		'@stylistic/js/space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			}
		],
		'@stylistic/js/template-curly-spacing': [
			'error',
			'never'
		],
	},
};
