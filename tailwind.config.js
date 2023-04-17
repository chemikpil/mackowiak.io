const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Strawford', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
