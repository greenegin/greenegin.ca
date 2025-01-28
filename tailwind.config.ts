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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.3' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.7' },
          '25%': { transform: 'translate(10px, -15px) scale(1.05)', opacity: '1' },
          '50%': { transform: 'translate(20px, 0) scale(0.95)', opacity: '0.8' },
          '75%': { transform: 'translate(10px, 15px) scale(1.02)', opacity: '0.9' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.8' },
          '25%': { transform: 'translate(-15px, 10px) scale(0.98)', opacity: '1' },
          '50%': { transform: 'translate(0, 20px) scale(1.05)', opacity: '0.7' },
          '75%': { transform: 'translate(15px, 10px) scale(1)', opacity: '0.9' },
        },
        'float-complex-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '20%': { transform: 'translate(60px, -40px) scale(1.2)', opacity: '0.8' },
          '40%': { transform: 'translate(100px, 20px) scale(0.8)', opacity: '0.3' },
          '60%': { transform: 'translate(20px, 80px) scale(1.1)', opacity: '0.7' },
          '80%': { transform: 'translate(-40px, 40px) scale(0.9)', opacity: '0.6' },
        },
        'float-complex-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '20%': { transform: 'translate(-80px, 60px) scale(0.9)', opacity: '0.8' },
          '40%': { transform: 'translate(-20px, -100px) scale(1.3)', opacity: '0.4' },
          '60%': { transform: 'translate(60px, -30px) scale(0.7)', opacity: '0.9' },
          '80%': { transform: 'translate(30px, 80px) scale(1.1)', opacity: '0.5' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        sway: 'sway 20s ease-in-out infinite',
        'sway-delayed': 'sway 25s ease-in-out infinite reverse',
        'float-slow': 'float 15s ease-in-out infinite',
        'float-slower': 'float 20s ease-in-out infinite',
        pulse: 'pulse 10s ease-in-out infinite',
        'float-1': 'float-1 20s ease-in-out infinite',
        'float-2': 'float-2 25s ease-in-out infinite',
        'float-complex-1': 'float-complex-1 600s ease-in-out infinite',
        'float-complex-2': 'float-complex-2 700s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config