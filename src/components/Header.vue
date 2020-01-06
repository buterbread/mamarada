<template>
  <header class="header">
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

        <h1 class="headerTitle">{{ $t('Slogan') }}</h1>

        <ul class="headerMenu">
          <li class="headerMenu-item">
            <router-link to="#nannyToGo" class="headerMenu-link">{{ $t('NannyToGo') }}</router-link>
          </li>
          <li class="headerMenu-item">
            <router-link to="#nannyForFamily" class="headerMenu-link">{{ $t('NannyForFamily') }}</router-link>
          </li>
          <li class="headerMenu-item">
            <router-link to="#kidsWithIndividualNeeds" class="headerMenu-link">{{ $t('KidsWithIndividualNeeds') }}</router-link>
          </li>
          <li class="headerMenu-item">
            <router-link to="#autoDaddy" class="headerMenu-link">{{ $t('AutoDaddy') }}</router-link>
          </li>
          <li v-if="false" class="headerMenu-item">
            <router-link to="#babyBoxes" class="headerMenu-link">{{ $t('BabyBoxes') }}</router-link>
          </li>
          <li class="headerMenu-item">
            <router-link to="#kidsCosmetics" class="headerMenu-link">{{ $t('KidsCosmetics') }}</router-link>
          </li>
        </ul>

        <div class="header-bottom">
          <a :href="`tel:${phoneNumber}`" class="headerPhone">{{phoneLabel}}</a>
          <a :href="`tel:${phoneNumber}`" class="button headerCallButton">{{ $t('ToCall') }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import contact from '../config/contact'
const { phones } = contact;
const { phoneLabel, phoneNumber } = phones[0] || {};

export default {
  name: 'Header',
  methods: {
    changeLang (e, locale) {
      e.preventDefault();
      this.$i18n.locale = locale;
      this.$store.dispatch('locales/setLocale', locale);
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locales/locale'
    })
  },
  data () {
    return {
      phoneLabel,
      phoneNumber
    }
  }
}
</script>

<style lang="scss">

</style>
