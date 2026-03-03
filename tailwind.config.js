/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97706', // Deep Saffron
          dark: '#b86205',
        },
        bg: {
          main: '#ffffff',
          secondary: '#f9fafb',
        },
        text: {
          main: '#1f2937',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Tiro Devanagari Marathi', 'Outfit', 'Noto Sans Devanagari', 'Mukta', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
