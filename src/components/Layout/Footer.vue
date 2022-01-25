<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <a href="#" class="footer__logo"><img src="../../assets/layout/logo.svg" alt="logo"></a>
          <div class="footer__description">We are always open to discuss your project and improve your online presence.</div>
          <div class="footer__contact">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
@import "src/assets/scss/main";

  .footer {
    background-color: $brand-tint-blue;

    &__logo {
      margin-bottom: 22px;

      img {
        height: 38px;
      }
    }
    &__description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #FFFFFF;
      opacity: 0.8;
    }
  }
</style>