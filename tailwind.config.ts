/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
			},
			fontFamily: {
				display: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
				sans: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
