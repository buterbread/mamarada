<template>
  <div class="wrapper">
    <Header />
    <div class="body">
      <div class="container">
        <div v-if="cosmeticsItem" class="details">
          <h1 class="details-title">{{ cosmeticsItem.details[locale].title }}</h1>
          <h2 class="details-line">{{ cosmeticsItem.details[locale].productLine }}</h2>
          <img :src="cosmeticsItem.itemUrl" :alt="cosmeticsItem.details[locale].title" class="details-image" width="335" height="335">
          <div class="details-content" v-html="cosmeticsItem.details[locale].description"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/HeaderLite.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'cosmeticsDetails',
  components: {
    Header,
    Footer
  },
  created () {
    this.$store.dispatch('cosmetics/fetchItemData', this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      cosmeticsItem: 'cosmetics/item',
      locale: 'locales/locale'
    })
  }
}
</script>

<style lang="scss">
  .details {
    color: #333;
  }

  .details-image {
    display: block;
    margin: 0 auto 15px auto;
    width: 250px;
    height: 250px;
  }

  .details-title {
    margin: 0 auto 15px auto;
    text-align: center;
  }

  .details-line {
    text-align: center;
    font-size: 18px;
    margin: 0 auto 15px auto;
  }

  .details-content {
    font-size: 14px;
    line-height: 1.4;

    h3 {
      line-height: 1.2;
      font-size: 16px;
      font-weight: bold;
      margin: 0 auto 10px auto;
    }

    p {
      margin: 0 auto 10px auto;
    }

    p + h3 {
      margin-top: 25px;
    }
  }
</style>
