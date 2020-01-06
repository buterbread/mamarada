<template>
  <div>
    <h2 class="homeSection-title">{{ $t('KidsCosmetics') }}</h2>
    <ul class="kidsCosmetics">
      <li v-for="item in cosmeticsList" :key="item.id" class="kidsCosmetics-item">
        <a :href="`/cosmetics/${item.id}`" class="kidsCosmetics-link">
          <div class="kidsCosmetics-imageBox">
            <img :src="item.previewUrl" :alt="item.title" class="kidsCosmetics-image" />
          </div>
          <div class="kidsCosmetics-content">
            <div class="kidsCosmetics-header">
              <h3 class="kidsCosmetics-title">{{item.info[locale].title}}</h3>
              <span class="kidsCosmetics-price">₴{{item.price}}</span>
            </div>
            <div class="kidsCosmetics-description">
              <p class="kidsCosmetics-descriptionPara">{{item.info[locale].description}}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Cosmetics',
  created () {
    this.$store.dispatch('cosmetics/fetchListData')
  },
  computed: {
    ...mapState({
      cosmetics: state => {
        return state.cosmetics
      }
    }),
    ...mapGetters({
      cosmeticsList: 'cosmetics/list',
      locale: 'locales/locale'
    })
  }
}
</script>
