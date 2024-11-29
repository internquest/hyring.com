/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
        'xxs':'325px',
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveScale: {
          '0%': {
            transform: 'matrix(1,0,0,1,4,0)'
          },
          '50%': {
            transform: 'matrix(1,0,0,1,4,-1362)'
          },
          '100%': {
            transform: 'matrix(1,0,0,1,4,-984)'
          }
        },
        bouncer:{
          '0%': {
            transform: 'translateY(0)'
        },
        
        '50%': {
            transform: 'translateY(-5px)'
          },
        '100%': {
            transform: 'translateY(0)'
        }
        }
      },
      animation: {
        'number-scale': 'moveScale 2s linear infinite'
      }
    },
  },
  plugins: [],
};
