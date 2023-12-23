/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: theme => ({
      ...theme.colors,
      primary: '#5823b8',
      light: '#c2b6fc',
      pBlack: '#202020',
      pWhite: '#f6f6f6',
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '200%': '200% auto',
      },
      gridTemplateRows: {
        'customRow': '40.4px 1fr'
      }
    },
  },
  plugins: [],
}
