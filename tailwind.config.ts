import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search-image": "url('static/img/buscar.png')",
      },
      colors: {
        gris: '#3d3d3d',
        gris2: '#6f6f6f',
        gris3: '#e1e1e1',
        naranja: '#DA552F',
        color1: '#d1d1d1',
        color2: '#DA552F',
      },
      fontFamily: {
        nunito_sans: ['var(--font-nunito_sans)'],
        poppins: ['var(--font-poppins)'],
      },
      backgroundSize: {
        '16': '4rem',
      },
      textIndent: {
        99: '-99999px',
      },
      maxWidth:{
        600: '600px',
      },
      flexBasis:{
        'flex-basis-150': '150px',
      },
    },
  },
  plugins: [],
};
export default config;
