export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#14949A', dark: '#0B5E66', deep: '#08454B', light: '#E4F3F3' },
        gold: { DEFAULT: '#D9A62E', light: '#F2D57E', dark: '#A97C14' },
        dome: '#1F7A4D',
        navy: '#1F3A8A',
        ink: '#0F1A1C',
        cloud: '#F7FAFA',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,26,28,0.04), 0 10px 30px -12px rgba(15,26,28,0.14)',
        lift: '0 2px 6px rgba(15,26,28,0.06), 0 28px 56px -20px rgba(11,94,102,0.35)',
        glass: '0 8px 32px -8px rgba(8,69,75,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
        gold: '0 10px 28px -10px rgba(217,166,46,0.75)',
      },
      borderRadius: { '4xl': '2rem' },
      transitionTimingFunction: { brand: 'cubic-bezier(0.23, 1, 0.32, 1)' },
    },
  },
  plugins: [],
};
