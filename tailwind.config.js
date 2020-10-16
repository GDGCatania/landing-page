/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: false,
  theme: {
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem', // 48px
    },
    fontWeight: {
      normal: 'normal',
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      none: '1',
      tight: '1.14',
      snug: '1.33',
      normal: '1.5',
    },
    fontFamily: {
      sans: [
        '"Open Sans", sans-serif',
      ],
    },
    letterSpacing: {
      normal: '0',
      wide: '1px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      gray: {
        default: '#5f6368',
        100: '#F2F2F2',
        200: '#E0E0E0',
        500: '#B2B2B2',
        900: '#202124',
      },
    },
    extend: {
      borderWidth: {
        2: '2px',
        3: '3px',
      },
      colors: {
        success: {
          lighter: '#EBF6E9',
          light: '#D6EED3',
          default: '#99D492',
          darken: '#5B7F57',
        },
        danger: {
          lighter: '#F7E6E6',
          light: '#EFCECE',
          default: '#D88484',
          darken: '#A88484',
        },
        warning: {
          default: '#E6B36B',
        },
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        40: '0.4',
        60: '0.6',
      },
      screens: {
        retina: {
          raw: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
        },
      },
      boxShadow: {
        lighter: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        light: '0 8px 16px rgba(0, 0, 0, 0.08)',
        heavy: '0 10px 20px rgba(0, 0, 0, 0.3)',
        header: '0 0 16px 0 rgba(0, 0, 0, 0.08)',
      },
      padding: {
        7: '1.75rem', // 28px
        16: '4rem', // 64px
        34: '8.5rem', // 136px
        36: '9rem', // 144px
      },
      margin: {
        7: '1.75rem', // 28px
        14: '3.5rem', // 56 px
        34: '8.5rem', // 136px
        36: '9rem', // 144px
      },
      height: {
        bar: '.625rem', // 10 px
        14: '3.5rem', // 56 px
      },
      width: {
        14: '3.5rem', // 56 px
      },
    },
  },
  variants: {},
  plugins: [],
};
