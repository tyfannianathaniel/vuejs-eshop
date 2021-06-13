// const path = require('path');

module.exports = {
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue-i18n-loader')
  //     .test(/\.(json5?|ya?ml)$/)
  //     .type('javascript/auto')
  //     .use('vue-i18n-loader')
  //       .loader('@intlify/vue-i18n-loader')
  //       .end()
  //     .include.add( _ => {
  //       return [
  //         path.resolve(__dirname, './src/locales'),
  //       ]
  //     })
  // },
  // The code above seems to be completely useless
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: true,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
