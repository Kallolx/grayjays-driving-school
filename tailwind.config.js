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
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg) scale(0)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        slideUp: 'slideUp 0.3s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        rotateIn: 'rotateIn 0.6s ease-out forwards',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
    fontFamily: {
      sans: ['DM Sans Variable', 'sans-serif'],
      display: ['DM Sans Variable', 'sans-serif'],
      body: ['DM Sans Variable', 'sans-serif']
    }
  },
  plugins: [],
};