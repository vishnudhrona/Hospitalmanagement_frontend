/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      spacing : {
        'custom' : '235px'
      },
      fontSize:{
        'lg': '0.75rem',
        'md': '0.90rem',
        'xl': '1.5rem',
      },
      width:{
        'custom-navbar' : '800px' 
      },
      
      colors: {
        customColor: '#2b7786',
        footerColor : "#0a1f29",
        doctorName : "#42a895",
        buttonColor : "#00b48d",
        buttonHov : "#17a2b8",
        megamenuColor : "#429997"
      },
    },
  },
  plugins: [ require('flowbite/plugin') ],
}

