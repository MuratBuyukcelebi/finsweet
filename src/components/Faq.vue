<template>
  <div class="faq container">
    <div class="row">
      <div class="col-xl-4 mb-xl-0 mb-md-3 mb-0">
        <div class="faq__title">Frequently<br class="d-xl-block d-none">asked questions</div>
        <a href="#" class="faq__contact">Contact us for more info</a>
      </div>
      <div class="col-xl-8">
        <div class="faq__list faq__accordion" id="faqAccordion">
          <div class="faq-item collapsed" data-bs-toggle="collapse" data-bs-target="#faq1">
            <button class="faq-item__header collapsed" type="button">
              <span class="faq-item__header-title"><span class="faq-item__header-number">01</span><span class="faq-item__header-text">How much time does it take?</span></span>
              <span class="faq-item__header-icon"></span>
            </button>
            <div class="faq-item__body collapse" id="faq1" data-bs-parent="#faqAccordion">
              <div class="faq-item__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="faq-item collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
            <button class="faq-item__header collapsed" type="button">
              <span class="faq-item__header-title"><span class="faq-item__header-number">02</span><span class="faq-item__header-text">What is your class naming convention?</span></span>
              <span class="faq-item__header-icon"></span>
            </button>
            <div class="faq-item__body collapse" id="faq2" data-bs-parent="#faqAccordion">
              <div class="faq-item__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="faq-item collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">
            <button class="faq-item__header collapsed" type="button">
              <span class="faq-item__header-title"><span class="faq-item__header-number">03</span><span class="faq-item__header-text">How do you communicate?</span></span>
              <span class="faq-item__header-icon"></span>
            </button>
            <div class="faq-item__body collapse" id="faq3" data-bs-parent="#faqAccordion">
              <div class="faq-item__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="faq-item collapsed" data-bs-toggle="collapse" data-bs-target="#faq4">
            <button class="faq-item__header collapsed" type="button">
              <span class="faq-item__header-title"><span class="faq-item__header-number">04</span><span class="faq-item__header-text">I have a bigger project. Can you handle it?</span></span>
              <span class="faq-item__header-icon"></span>
            </button>
            <div class="faq-item__body collapse" id="faq4" data-bs-parent="#faqAccordion">
              <div class="faq-item__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div class="faq-item collapsed" data-bs-toggle="collapse" data-bs-target="#faq5">
            <button class="faq-item__header collapsed" type="button">
              <span class="faq-item__header-title"><span class="faq-item__header-number">05</span><span class="faq-item__header-text">What is your class naming convention?</span></span>
              <span class="faq-item__header-icon"></span>
            </button>
            <div class="faq-item__body collapse" id="faq5" data-bs-parent="#faqAccordion">
              <div class="faq-item__inner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq"
}
</script>

<style lang="scss" scoped>
.faq {
  padding-top: 128px;
  padding-bottom: 128px;

  &__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    color: $brand-dark-blue;
    margin-bottom: 16px;
  }
  &__contact {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    opacity: .7;
    color: $brand-royal-blue !important;

    &:hover {
      text-decoration: underline !important;
    }
  }
}
.faq-item {
  border-bottom: 2px solid #ECECF1;
  padding-bottom: 32px;

  &__header {
    background-color: transparent;
    border: none;
    padding-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      display: flex;
      align-items: center;
      gap: 60px;
    }
    &-number {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: $brand-royal-blue;
      width: 24px;
    }
    &-text {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: $brand-dark-blue;
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
      position: relative;
      transition: all .3s;

      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 2px;
        background-color: $brand-dark-blue;
      }
      &::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 16px;
        background-color: $brand-dark-blue;
      }
    }
  }
  &__body {
    padding-left: 60px + 24px;
  }
  &__inner {
    max-width: 624px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 32px;
    line-height: 32px;
    color: $brand-dark-blue;
    opacity: 0.7;
  }

  &:not(.collapsed) {
    .faq-item__header {
      &-icon {
        transform: rotate(-45deg);
      }
    }
  }
}

@include media-breakpoint-down(xxl) {
  .faq {
    &__title {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 10px;
    }

  }
  .faq-item {
    &__header {
      &-title {
        gap: 40px;
      }
      &-number {
        font-size: 20px;
        line-height: 32px;
        width: 20px;
      }
      &-text {
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
}
@include media-breakpoint-down(xl) {
  .faq {
    padding-top: 96px;
    padding-bottom: 96px;

    &__title {
      font-size: 24px;
      line-height: 36px;
    }
  }
  .faq-item {
    padding-bottom: 24px;

    &__body {
      padding-left: 64px;
    }
    &__inner {
      padding-top: 24px;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
@include media-breakpoint-down(md) {
  .faq {
    padding-top: 64px;
    padding-bottom: 64px;

    &__title {
      font-size: 20px;
      line-height: 32px;
    }
  }
  .faq-item {
    padding-bottom: 16px;

    &__header {
      &-title {
        gap: 32px;
      }
      &-number {
        font-size: 18px;
        line-height: 24px;
        width: 16px;
      }
      &-text {
        font-size: 18px;
        line-height: 24px;
      }
    }
    &__body {
      padding-left: 48px;
    }
    &__inner {
      padding-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
@include media-breakpoint-down(sm) {
  .faq {
    padding-top: 48px;
    padding-bottom: 48px;

    &__title {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .faq-item {
    padding-bottom: 16px;

    &__header {
      &-title {
        gap: 12px;
      }
      &-number {
        font-size: 14px;
        line-height: 20px;
        width: 16px;
      }
      &-text {
        font-size: 13px;
        line-height: 20px;
      }
      &-icon {
        height: 12px;
        width: 12px;

        &::after {
          width: 12px;
        }
        &::before {
          height: 12px;
        }
      }
    }
    &__body {
      padding-left: 32px;
    }
    &__inner {
      padding-top: 14px;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>