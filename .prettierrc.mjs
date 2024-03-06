// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	tabWidth: 2,
	useTabs: true,
	printWidth: 120,
	semi: true,
	trailingComma: 'es5',
	singleQuote: true,
	endOfLine: 'lf',
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
