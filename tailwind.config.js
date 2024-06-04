/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ['light'],
    },
    plugins: [daisyui],
};
