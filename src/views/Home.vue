<template>
  <div class="wrapper">
    <Header />

    <div class="body body--home">
      <PricesSection />

      <section v-if="false" class="homeSection homeSection--accented" id="babyBoxes">
        <div class="container">
          <h2 class="homeSection-title">Бебибоксы</h2>
        </div>
      </section>

      <section class="homeSection" id="kidsCosmetics">
        <div class="container">
          <Cosmetics />
        </div>
      </section>

      <HowToOrderSection />
      <WorkConditionsSection />
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Cosmetics from '../components/HomeCosmetics.vue'
import PricesSection from '../components/PricesSection.vue'
import HowToOrderSection from '../components/HowToOrderSection.vue'
import WorkConditionsSection from '../components/WorkConditionsSection.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Cosmetics,
    PricesSection,
    HowToOrderSection,
    WorkConditionsSection,
    Footer
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/button.scss';
  @import '../assets/styles/header.scss';
  @import '../assets/styles/body.scss';
  @import '../assets/styles/home.scss';
  @import '../assets/styles/prices';
  @import '../assets/styles/cosmetics';
  @import '../assets/styles/footer.scss';
</style>
