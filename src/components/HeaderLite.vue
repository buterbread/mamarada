<template>
  <header class="header header--inner">
    <div class="container">
      <div class="headerWrapper">
        <div class="header-top">
          <a href="/" class="headerLogo">Мама Рада :)</a>

          <ul class="langMenu">
            <li class="langMenu-item">
              <a href="#" :class="`langMenu-link ${locale === 'ua' ? 'isActive' : ''}`" v-on:click="(e) => changeLang(e, 'ua')">Укр</a>
            </li>
            <li class="langMenu-item">
              <a href="#" :class="`langMenu-link ${locale === 'ru' ? 'isActive' : ''}`" v-on:click="(e) => changeLang(e, 'ru')">Рус</a>
            </li>
          </ul>

          <template v-if="false">
            <ul class="mediaLinks mediaLinks_header">
              <li class="mediaLinks-item">
                <a href="#" class="mediaLinks-link"><i class="icon icon-instagram"></i>Instagram</a>
              </li>
              <li class="mediaLinks-item">
                <a href="#" class="mediaLinks-link"><i class="icon icon-facebook"></i>Facebook</a>
              </li>
            </ul>

            <a href="#" class="sandwichMenu">
              <i class="sandwichMenu-bar"></i>
              <i class="sandwichMenu-bar"></i>
              <i class="sandwichMenu-bar"></i>
            </a>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderLite',
  methods: {
    changeLang (e, locale) {
      e.preventDefault()
      this.$i18n.locale = locale
      this.$store.dispatch('locales/setLocale', locale)
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locales/locale'
    })
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
