module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, 
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlankList: ['tab-bar'],
      minPixelValue: 1, 
      mediaQuery: false
    }
  }
}