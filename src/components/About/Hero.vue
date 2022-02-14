<template>
  <div class="hero container">
    <div class="row align-items-center">
      <div class="col-xl-5">
        <div class="hero__top">About us</div>
        <div class="hero__title">Our designs solve problems</div>
        <div class="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
      </div>
      <div class="col-xl-6 offset-xl-1">
        <div class="hero__image">
          <img src="../../assets/about/hero.png" alt="hero-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 128px;
  padding-bottom: 128px;

  &__top {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: $brand-dark-blue;
    margin-bottom: 8px;
  }
  &__title {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    color: $brand-dark-blue;
    margin-bottom: 32px;
  }
  &__descripiton {
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.7;
    text-align: justify;
  }
  &__image {
    img {
      height: 336px;
    }
  }
}
</style>