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
      // ... (keep existing color and border radius configs)
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
        'orbit-1': {
          '0%': { transform: 'translate(-40%, -40%)' },
          '20%': { transform: 'translate(40%, -30%)' },
          '40%': { transform: 'translate(40%, 80%)' },
          '60%': { transform: 'translate(-40%, 60%)' },
          '80%': { transform: 'translate(-30%, 20%)' },
          '100%': { transform: 'translate(-40%, -40%)' },
        },
        'orbit-2': {
          '0%': { transform: 'translate(40%, 70%)' },
          '25%': { transform: 'translate(-30%, 60%)' },
          '50%': { transform: 'translate(-40%, -30%)' },
          '75%': { transform: 'translate(30%, -40%)' },
          '100%': { transform: 'translate(40%, 70%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'orbit-1': 'orbit-1 45s linear infinite',
        'orbit-2': 'orbit-2 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
