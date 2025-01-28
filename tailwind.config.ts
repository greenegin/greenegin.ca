import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        'orbit-1': {
          '0%': { transform: 'translate(20%, 20%)' },
          '25%': { transform: 'translate(60%, 30%)' },
          '50%': { transform: 'translate(20%, 70%)' },
          '75%': { transform: 'translate(-20%, 50%)' },
          '100%': { transform: 'translate(20%, 20%)' },
        },
        'orbit-2': {
          '0%': { transform: 'translate(-20%, 60%)' },
          '25%': { transform: 'translate(30%, 70%)' },
          '50%': { transform: 'translate(70%, 30%)' },
          '75%': { transform: 'translate(20%, -10%)' },
          '100%': { transform: 'translate(-20%, 60%)' },
        },
      },
      animation: {
        'orbit-1': 'orbit-1 40s linear infinite',
        'orbit-2': 'orbit-2 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
