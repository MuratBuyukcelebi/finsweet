<template>
  <div class="container">
    <div class="we">
      <div class="row justify-content-center">
        <div class="col-xl-11 offset-xl-1">
          <div class="we__top">Who we are</div>
        </div>
        <div class="col-xl-5 offset-xl-1">
          <div class="we__title">Goal focussed</div>
          <div class="we__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="col-xl-5 offset-xl-1">
          <div class="we__title">Goal focussed</div>
          <div class="we__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="col-xl-12">
          <img class="we__image" src="../../assets/about/we.png" alt="we-about">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "We"
}
</script>

<style lang="scss" scoped>
.we {
  background: #F4F5F5;
  padding-top: 80px;

  &__top {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    margin-bottom: 4px;
  }
  &__title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    color: $brand-dark-blue;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.7;
  }
  &__image {
    margin-top: 80px;
    width: 100%;
    height: 340px;
  }
}
</style>