/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00856F',
          hover: '#006B5A'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      }
    },
    fontFamily: {
      sans: ['DM Sans Variable', 'sans-serif'],
      display: ['DM Sans Variable', 'sans-serif'],
      body: ['DM Sans Variable', 'sans-serif']
    }
  },
  plugins: [],
};