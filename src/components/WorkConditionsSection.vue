<template>
  <section class="homeSection">
    <div class="container">
      <h2 class="homeSection-title">{{ $t('WorkConditions.Title') }}</h2>
      <ul class="termsOfService">
        <li class="termsOfService-item">{{ $t('WorkConditions.para1') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para2') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para3') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para4') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para5') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para6') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para7') }}</li>
        <li class="termsOfService-item">{{ $t('WorkConditions.para8') }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkConditionsSection',
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
