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
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
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