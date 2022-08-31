const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(()=>{
  return function({addUtilities}){
    addUtilities({
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    })
  }
})