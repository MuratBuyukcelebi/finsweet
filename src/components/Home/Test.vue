<template>
  <div>
    <h2>FreeScroll</h2>
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">31</div>
      <div class="carousel-cell">31</div>
      <div class="carousel-cell">31</div>
      <div class="carousel-cell">31</div>
      <div class="carousel-cell">31</div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true
        // any options from Flickity can be used
      }
    }
  }
}
</script>

<style scoped>

</style>