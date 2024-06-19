/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'banner-cierre-bg':"url('/assets/bannerCierre.jpg')"  
      },
      fontFamily: {
        grotesk: ['Overused Grotesk', 'sans-serif'],
        alternative: ['Overused Alternative', 'sans-serif'],
      },
      colors: {
        primary: '#1A202C',
        secondary: '#2D3748',
        accent: '#38B2AC',
        'custom-blue': '#2B55A0',
        'custom-green': '#B4E5A3',
        'custom-white': '#EDEDE6',
      },
    },
  },
  plugins: [],
};
