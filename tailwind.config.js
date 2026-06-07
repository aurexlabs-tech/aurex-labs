/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      // Mapping our CSS custom properties (defined in styles.scss)
      colors: {
        brand: {
          navy: 'var(--color-deep-navy)', // Deep tech base (Logo Dark)
          blue: 'var(--color-rich-blue)', // Primary Action (Logo Blue)
          cyan: 'var(--color-cyan-glow)', // Accent Highlight (Logo Cyan)
          white: 'var(--color-soft-white)', // Information base (Logo Light)
        },
      },
      fontFamily: {
        // Our new signature font
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        // Advanced premium shadow configurations
        premium: 'var(--shadow-premium)',
        'premium-v2': 'var(--shadow-premium-v2)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'bounce-custom': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
