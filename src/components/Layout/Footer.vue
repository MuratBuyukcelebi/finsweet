<template>
  <div class="footer">
    <div class="container">
      <div class="row flex-lg-row flex-column-reverse gy-lg-0 gy-5">
        <div class="col-lg-5">
          <a href="#" class="footer__logo"><img src="../../assets/layout/logo.svg" alt="logo"></a>
          <div class="footer__description">We are always open to discuss your project and improve your online presence.</div>
          <div class="footer-contact">
            <div class="footer-contact__item">
              <div class="footer-contact__item-title">Email me at</div>
              <a href="mailto:contact@website.com" class="footer-contact__item-touch">contact@website.com</a>
            </div>
            <div class="footer-contact__item">
              <div class="footer-contact__item-title">Call us</div>
              <a href="tel:+908172647817624" class="footer-contact__item-touch">0927 6277 28525</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="footer-social">
            <div class="footer-social__title">Lets Talk!</div>
            <div class="footer-social__description">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</div>
            <div class="footer-social__list">
              <a href="#"><img src="../../assets/layout/facebook.svg" alt="facebook-icon"></a>
              <a href="#"><img src="../../assets/layout/twitter.svg" alt="twitter-icon"></a>
              <a href="#"><img src="../../assets/layout/instagram.svg" alt="instagram-icon"></a>
              <a href="#"><img src="../../assets/layout/linkedin.svg" alt="linkedin-icon"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-container">
        <div class="footer__bottom-copy">
          Copyright 2022, Finsweet.com
        </div>
        <nav class="footer__bottom-menu">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
        </nav>
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
  .footer {
    padding-top: 96px;
    background-color: $brand-tint-blue;

    &__logo {
      display: block;
      margin-bottom: 22px !important;

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
      margin-bottom: 86px;
    }
    &-contact {
      display: flex;
      gap: 30px;
      padding: 16px 32px;
      background-color: $brand-yellow;

      &__item {
        &-title {
          color: $brand-dark-blue;
          font-weight: 500;
          font-size: 18px;
          line-height: 32px;
        }
        &-touch {
          color: $brand-dark-blue !important;
          font-size: 16px;
          line-height: 28px;

          &:hover {
            text-decoration: underline !important;
          }
        }
      }
    }
    &-social {
      &__title {
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: #fff;
        margin-bottom: 14px;
      }
      &__description {
        font-size: 16px;
        line-height: 28px;
        color: $brand-gray;
        margin-bottom: 28px;
      }
      &__list {
        display: flex;
        align-items: center;
        gap: 26px;
      }
    }
    &__bottom {
      background-color: #fff;

      &-container {
        padding-top: 32px;
        padding-bottom: 32px;
        display: flex;
        align-items: center;
      }
      &-copy {
        color: $brand-dark-blue;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        margin-right: auto;
      }
      &-menu {
        display: flex;
        align-items: center;
        gap: 32px;

        a {
          color: $brand-dark-blue !important;
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;

          &:hover {
            text-decoration: underline !important;
          }
        }
      }
    }


    @include media-breakpoint-down(xl) {
      padding-top: 80px;

      &__description {
        margin-bottom: 20px;
      }
      &-contact {
        padding: 10px;
        gap: 12px;

        &__item {
          &-title {
            font-size: 14px;
            line-height: 20px;
          }
          &-touch {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
      &-social {
        &__title {
          font-size: 32px;
          line-height: 48px;
        }
        &__description {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 16px;
        }
        &__list {
          gap: 16px;
        }
      }
      &__bottom {
        &-container {
          padding-top: 16px;
          padding-bottom: 16px;
        }
        &-copy {
          font-size: 14px;
          line-height: 24px;
        }
        &-menu {
          gap: 16px;

          a {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
    @include media-breakpoint-down(lg) {
      .footer-contact {
        max-width: 500px;
        padding: 16px;
      }
    }
    @include media-breakpoint-down(md) {
      &-social {
        &__title {
          font-size: 28px;
          line-height: 1.5;
          margin-bottom: 8px;
        }
        &__description {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 10px;
        }
        &__list {
          display: flex;
          align-items: center;
          gap: 26px;
        }
      }
    }
  }
</style>