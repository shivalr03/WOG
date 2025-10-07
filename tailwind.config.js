/**
 * Tailwind CSS configuration
 *
 * We define a custom `brand` color palette derived from the provided
 * red, yellow, green and blue brand colours. These colours can be
 * referenced throughout the application via the class names like
 * `bg-brand-red`, `text-brand-green`, etc. Neutral greys are handled
 * by Tailwind's default palette.
 */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{json}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e53935',
          yellow: '#fdd835',
          green: '#43a047',
          blue: '#1e88e5',
        },
      },
    },
  },
  plugins: [],
};