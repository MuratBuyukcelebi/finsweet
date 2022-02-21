<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <div class="hero__title">All the features<br class="d-xl-block d-none">you need</div>
          <div class="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <a href="#" class="btn btn-primary">View Pricing</a>
        </div>
        <div class="col-xl-6 offset-xl-1">
          <div class="hero__image">
            <img src="../../assets/features/hero.svg" alt="hero-image">
          </div>
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
  background: #1C1E53;
  padding-top: 128px;
  padding-bottom: 128px;

  &__title {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    color: #fff;
    margin-bottom: 32px;
  }
  &__description {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    opacity: 0.7;
    margin-bottom: 32px;
  }
  &__image {
    position: relative;

    img {
      position: absolute;
      right: 16px;
    }
  }
}
</style>