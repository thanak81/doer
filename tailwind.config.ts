import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			main_background: '#006E75',
  			main_foreground: '#0B978E',
  			success: '#0ABF89',
  			warning: '#F4A261',
  			danger: '#E63946',
  			hover: '#008A7B',
  		},
  		fontFamily: {
  			primary: [
  				'var(--font-nunito)'
  			],
  			secondary: [
  				'var(--font-roboto)'
  			]
  		},
  		fontSize: {
  			h1: '3.6rem',
  			h2: '3rem',
  			h3: '2.4rem',
  			base: '1.6rem',
  			sm: '1.4rem',
  			xs: '1.2rem'
  		},
  	}
  },
  plugins: [],
} satisfies Config;
