<template>
  <div class="header">
    <div class="container header__container">
      <a href="#" class="header__logo"><img src="../../../src/assets/layout/logo.svg" alt="logo"></a>
      <nav class="header__menu">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/features">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Blog</a>
      </nav>
      <a href="/contact" class="header__button">Contact us</a>
      <button class="header-mobile__open">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
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
      transition: all .3s;

      &:hover {
        border-color: rgba(244, 246, 252, 0.4);
      }
      &:active {
        transform: translateY(2px);
      }
    }

    @include media-breakpoint-down(xl) {
      &__menu {
        display: none;
      }
      &__button {
        display: none;
      }
    }
  }
  .header-mobile {
    &__open {
      background-color: transparent;
      border: none;
      outline: none;
      height: 36px;
      width: 36px;
      display: none;

      svg {
        path {
          fill: #fff;
        }
      }

      @include media-breakpoint-down(xl) {
        display: block;
      }
    }
  }
</style>