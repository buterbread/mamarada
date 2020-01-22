module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'ua',
      fallbackLocale: 'ua',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  lintOnSave: process.env.NODE_ENV === 'production'
}
