/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-dark': '#0D0D0D',
      'primary-light': '#EDEDED',
      'primary-accent': '#1565C0',

      // for backgrounds only:
      dark: '#0D0D0D',
      light: '#FFFFFF',

      grayscale: {
        100: '#f2f2f2',
        200: '#bfbfbf',
        300: '#808080',
        400: '#404040',
        500: '#262626',
      },

      states: {
        100: '#708349', // success
        200: '#DF3716', // danger
      },

      transparent: 'transparent',
    },

    fontFamily: {
      primary: ['var(--font-primary)'],
    },

    screens: {
      sm: '480px', //breakpoint mobile
      md: ' 744px', // breakpoint tablet
      lg: '976px', //breakpoint landscape tablet
      xl: '1280px', // breakpoint desktop +
      '2xl': '1580px',
    },

    extend: {
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        cursor: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            transform: '1',
          },
        },
      },
      animation: {
        cursor: 'cursor 1s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};
