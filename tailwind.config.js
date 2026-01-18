/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
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
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-in-right': 'slide-in-right 0.4s ease-out',
                'slide-in-left': 'slide-in-left 0.4s ease-out',
                'zoom-in': 'zoom-in 0.3s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translate3d(0, 0, 0)' },
                    to: { transform: 'translate3d(-50%, 0, 0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(50px)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-50px)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'zoom-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
