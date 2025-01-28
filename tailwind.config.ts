import type { Config } from 'tailwindcss'

const config: Config = {
  // ... (keep existing config)
  
  theme: {
    // ... (keep existing theme settings)
    
    extend: {
      // ... (keep existing extensions)
      
      keyframes: {
        // ... (keep existing keyframes)
        
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
        // ... (keep existing animations)
        'orbit-1': 'orbit-1 40s linear infinite',
        'orbit-2': 'orbit-2 40s linear infinite',
      },
    },
  },
}

export default config
