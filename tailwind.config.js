const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./app/**/*.{html,ejs}", "./node_modules/flowbite/**/*.js" ],
  theme: {
    fontSize: {
      xs:['12px', {
        lineHeight: '15px',
      }],
      sm: ['14px', {
        lineHeight: '21px',
      }],
      base:['16px', {
        lineHeight: '24px',
      }],
      lg:['18px', {
        lineHeight: '27px',
      }],
      xl:['20x', {
        lineHeight: '30px',
      }],
      '22px':['22px', {
        lineHeight: '32px',
      }],
      '2xl':['24px', {
        lineHeight: '36px',
      }],
      '3xl':['28px', {
        lineHeight: '32px',
      }],
      '32px':['32px', {
        lineHeight: '36px',
      }],
      '5xl':['48px', {
        lineHeight: '72px',
      }],
      '6xl':['60px', {
        lineHeight: '90px',
      }],
      '7xl':['72px', {
        lineHeight: '108px',
      }],
      '8xl':['80px', {
        lineHeight: '80px',
      }],
      '9xl':['128px', {
        lineHeight: '192px',
      }],
    },
    extend: {
      container:{
        center:true,
        padding:'12px',
      },
      screens: {
        'xs': '340px',
        ...defaultTheme.screens,
      },
      colors:{
        primary:{
          red:'#E6553B',
          gray:'#F0F0F0'
        },
      },
      boxShadow: {
        'hamburger': '0 10px black',
      },
      height: {
        '1/3screen': '33vh',
        '2/5screen': '40vh',
        '1/2screen': '50vh',
        '2/3screen': '66vh',
        '7/10screen': '70vh',
        '3/4screen': '75vh',
        '4/5screen': '80vh',
        '3px': '3px',
        '4.5': '18px',
        '16': '64px',
        '25' : '100px',
      },
      minHeight:{
        '25': '100px',
      },
      maxHeight: {
        '25': '100px',
      },
      width: {
        '50px': '50px',
        '16': '64px',
        '25' : '100px',
        '9/20' : '45%',
        '9/10' : '90%',
      },
      padding: {
        '4.5': '18px',
        '6.5': '26px',
        '9.5': '38px',
        '13': '52px',
        '15': '60px',
        '18': '72px',
        '21': '84px',
        '22': '88px',
        '34': '132px',
      },
      spacing: {
        '1/5': '20%',
      },
      fontFamily: {
        'google-material': ['"Material Icons"'],
        'Paytone-one': ['"Paytone One"'],
      },
      listStyleType: {
        square: 'square',
      },
      borderWidth: {
        '0.5': '2px'
      },
      aspectRatio: {
        '10/9': '10 / 9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    require('./TailwindPlugin/WriteMode'),
    require('./TailwindPlugin/Triangle'),
  ],
  
}