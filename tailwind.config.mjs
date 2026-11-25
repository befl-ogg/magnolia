/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#11100F',
        charcoal: '#1C1A18',
        bone: '#F4F1EC',
        concrete: '#E6E1D9',
        alabaster: '#FAF8F5',
        ink: '#1A1816',
        stoneMuted: '#565048',
        bronze: '#C2A27A',
        bronzeDeep: '#84643D',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
};
