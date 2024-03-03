/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 5s ease infinite',
        'gradient-fast': 'gradient 2s linear infinite'

      },
      keyframes: {
        'gradient': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      }
    },
  },
  plugins: [],
}

