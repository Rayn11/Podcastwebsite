/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1ec960',
          dark: '#25292b'
        },
        primary: {
          50: '#ebfbf1',
          100: '#d7f7e3',
          200: '#b0eec8',
          300: '#88e6ac',
          400: '#61dd91',
          500: '#1ec960',
          600: '#18a14d',
          700: '#13793a',
          800: '#0d5026',
          900: '#072813',
          950: '#041409'
        },
        secondary: {
          50: '#f5f6f6',
          100: '#e6e7e8',
          200: '#c7cacb',
          300: '#a8acae',
          400: '#898e91',
          500: '#6b7074',
          600: '#25292b',
          700: '#1e2123',
          800: '#17191a',
          900: '#0f1011',
          950: '#080809'
        }
      },
      fontFamily: {
        sans: [
          'Inter var',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        strong: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};