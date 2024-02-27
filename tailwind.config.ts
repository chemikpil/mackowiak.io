/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				border: 'hsl(var(--border))',
				muted: 'hsl(var(--muted))',
			},
			fontFamily: {
				display: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
				sans: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
