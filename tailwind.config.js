/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
      fontFamily: {
        heading: ['Urbanist', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
        logo: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};