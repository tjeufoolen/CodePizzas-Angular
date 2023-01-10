/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        colors: {
            'darker-blue': '#000040',
            'dark-blue': '#404085',
            blue: '#04B9F4',
            pink: '#EC359C',
            'dark-pink': '#66093d',
            'light-grey': '#CACAD9',
            white: '#FFFFFF',
            'light-black': '#0D1117',
            black: '#0A0D12',
        },
        fontFamily: {
            fredoka: ['Fredoka', 'sans-serif'],
            knewave: ['Knewave', 'cursive'],
            'open-sans': ['Open Sans', 'sans-serif'],
        },
        extend: {
            flex: {
                '2': '2 2 0%'
            }
        },
    },
    plugins: [],
};
