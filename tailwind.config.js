const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Strawford', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateRows: {
                home: '80px auto 80px',
            },
            fontSize: {
                hello: 'calc(2rem + (60 - 20) * ((100vw - 300px) / (1600 - 300)))',
                title: 'calc(3rem + (140 - 30) * ((100vw - 300px) / (1600 - 300)))',
                who: 'calc(1rem + (16 - 1) * ((100vw - 300px) / (1600 - 300)))',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
