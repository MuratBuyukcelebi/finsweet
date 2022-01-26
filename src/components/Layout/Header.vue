<template>
  <div class="header">
    <div class="container header__container">
      <a href="#" class="header__logo"><img src="../../../src/assets/layout/logo.svg" alt="logo"></a>
      <nav class="header__menu">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Blog</a>
      </nav>
      <a href="#" class="header__button">Contact us</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  @import "src/assets/scss/main";

  .header {
    background-color: $brand-tint-blue;
    padding: 16px 0;

    &__container {
      display: flex;
      align-items: center;
    }
    &__logo {
      margin-right: auto;

      img {
        height: 26px;
      }
    }
    &__menu {
      display: flex;
      align-items: center;
      gap: 32px;
      margin-right: 48px;

      a {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: #BBBBCB;
        transition: all .2s;

        &:hover {
          color: #fff;
        }
      }
    }
    &__button {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #FFFFFF !important;
      padding: 16px 48px;
      border: 2px solid rgba(244, 246, 252, 0.2);
      border-radius: 40px;
      transition: all .2s;

      &:hover {
        border-color: rgba(244, 246, 252, 0.4);
      }
      &:active {
        transform: translateY(2px);
      }
    }

    @include media-breakpoint-down(xl) {
      display: none;
    }
  }
</style>