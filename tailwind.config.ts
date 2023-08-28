import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      colors: {
        black: '#142326',
        charcoal: '#394548',
        'white-dark': '#edeeee',
        'gray-dark': '#606a6c',
        'blue-dark': '#0396A6',
        'blue-light': '#E0F2F4',
        teal: '#0396a6',
      },
      boxShadow: {
        center: '0 10px 20px 5px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        normal: '0.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
