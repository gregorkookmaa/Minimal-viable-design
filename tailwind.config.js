/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#C44639',
                brandLight: '#E55A4B',
                brandSoft: '#FFF1F0',
                brandDark: '#0E131F',
                accentOrange: '#EC691B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 60s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translate3d(0, 0, 0)' },
                    to: { transform: 'translate3d(-50%, 0, 0)' },
                }
            }
        },
    },
    plugins: [],
}
