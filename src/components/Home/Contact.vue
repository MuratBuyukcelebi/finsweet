<template>
  <div class="contact">
    <div class="container">
      <div class="row gx-0 contact__container">
        <div class="col-lg-6 d-lg-block d-none">
          <div class="contact__content">
            <div class="contact__content-image">
              <div class="contact__content-image__filter">
                <img src="../../assets/home/contact.png" alt="image">
              </div>
            </div>
            <div class="contact__content-title">Building stellar websites for early startups</div>
            <div class="contact__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact__form">
            <div class="contact__form-title">Send inquiry</div>
            <div class="contact__form-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
            <form class="contact__form-entry">
              <input type="text" placeholder="Your Name">
              <input type="email" placeholder="Email">
              <input type="url" placeholder="Paste your Figma design URL">
              <button type="submit" class="btn btn-primary">Send an Inquiry</button>
            </form>
            <a href="#" class="contact__form-button"><span>Get in touch with us</span><img src="../../assets/icons/arrow.svg" alt="svg"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
.contact {

  &__container {
    overflow: hidden;
    max-height: 691px;
  }
  &__content {
    position: relative;
    padding: 96px;
    z-index: 1;

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      &__filter {
        position: relative;
        width: 100%;
        height: 100%;

        img {
          z-index: -1;
        }

        &::before {
          content: "";
          position: absolute;
          background: rgba(28, 30, 83, 0.5);
          height: 100%;
          width: 100%;
          z-index: 0;
          top: 0;
          left: 0;
        }
      }
    }
    &-title {
      font-weight: 600;
      font-size: 54px;
      line-height: 74px;
      color: #FFFFFF;
      z-index: 99;
      margin-bottom: 24px;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #FFFFFF;
    }
  }
  &__form {
    padding: 96px 96px 48px;
    background: #1C1E53;
    z-index: 0;

    &-title {
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      color: #FFFFFF;
      margin-bottom: 16px;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: $brand-gray;
      margin-bottom: 40px;
    }
    &-entry {
      display: flex;
      flex-direction: column;
      gap: 16px;

      input {
        background-color: transparent;
        height: 64px;
        width: 100%;
        border: 1.5px solid rgba(255, 255, 255, 0.05) !important;
        border-radius: 8px;
        padding: 0 32px;
        outline: none !important;
        color: #fff;

        &::placeholder {
          font-size: 16px;
          line-height: 28px;
          color: $brand-gray;
          opacity: 0.5;
        }
      }
      button {
        margin-top: 24px;
      }
    }
    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 28px;

      span {
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        color: #fff;
      }
      img {
        transition: all .3s;
      }

      &:hover {
        img {
          transform: translateX(6px);
        }
      }
    }
  }

  @include media-breakpoint-down(xxl) {
    &__content {
      padding: 80px 52px 52px;

      &-title {
        font-size: 48px;
        line-height: 1.5;
      }
      &-image {
        img {
          height: 620px;
          width: 100%;
        }
      }
    }
    &__form {
      padding: 48px 48px 24px;
    }
  }
  @include media-breakpoint-down(xl) {
    &__content {
      padding: 64px 32px 32px;

      &-title {
        font-size: 32px;
      }
      &-image {
        img {
          height: 620px;
          width: 100%;
        }
      }
    }
    &__form {
      padding: 24px 32px;

      &-button {
        margin-top: 20px;
      }
    }
  }
  @include media-breakpoint-down(lg) {
    background: #1C1E53;

    &__form {
      padding: 36px 0;

      &-title {
       text-align: center;
      }
      &-description {
        text-align: center;
        margin-bottom: 30px;
      }
    }

  }
  @include media-breakpoint-down(sm) {
    &__form {
      &-title {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
}
</style>