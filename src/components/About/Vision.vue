<template>
  <div class="vision">
    <div class="container vision__list">
      <div class="row align-items-center">
        <div class="col-xl-6">
          <div class="vision__top">Our Mission</div>
          <div class="vision__title">Inspire, Innovate, Share</div>
          <div class="vision__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="col-xl-5 offset-xl-1">
          <img class="vision__image" src="../../assets/about/vision/1.png" alt="vision-image">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-5">
          <img class="vision__image" src="../../assets/about/vision/2.png" alt="vision-image">
        </div>
        <div class="col-xl-6 offset-xl-1">
          <div class="vision__top">Our Vision</div>
          <div class="vision__title">Laser focus</div>
          <div class="vision__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vision"
}
</script>

<style lang="scss" scoped>
.vision {
  background-color: $brand-accnet;
  padding-top: 128px;
  padding-bottom: 128px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
  &__top {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 16px;
    color: $brand-dark-blue;
  }
  &__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    color: $brand-dark-blue;
    margin-bottom: 16px;
  }
  &__descripiton {
    font-size: 16px;
    line-height: 28px;
    opacity: .7;
    color: $brand-dark-blue;
  }
  &__image {
    height: 336px;
    width: auto;
  }
}
</style>