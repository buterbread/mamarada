<template>
  <section class="homeSection homeSection--accented">
    <div class="container">
      <h2 class="homeSection-title">{{ $t('HowToOrder.Title') }}</h2>
      <ul class="howToOrder">
        <li class="howToOrder-item"><span v-html="$t('HowToOrder.para1', { phoneHref: `tel:${phoneNumber}`, smsHref: `sms:${phoneNumber}`, viberChatHref: viberChatLink, telegramChatHref: telegramChatLink, })"></span></li>
        <li class="howToOrder-item">{{ $t('HowToOrder.para2') }}</li>
        <li class="howToOrder-item">{{ $t('HowToOrder.para3') }}</li>
        <li class="howToOrder-item">{{ $t('HowToOrder.para4') }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import contact from '../config/contact'
const { phones, socialMedia } = contact
const { phoneLabel, phoneNumber } = phones[0] || {}
const { viberChatLink, telegramChatLink } = socialMedia || {}

export default {
  name: 'HowToOrderSection',
  data () {
    return {
      phoneLabel,
      phoneNumber,
      viberChatLink,
      telegramChatLink
    }
  }
}
</script>

<style lang="scss">

</style>
