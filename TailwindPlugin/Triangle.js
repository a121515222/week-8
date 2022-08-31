const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(()=>{
  return function({addUtilities}){
    addUtilities({
      '.triangle-br-black': {
        'border-color': 'transparent transparent black transparent',
      },
    })
  }
})