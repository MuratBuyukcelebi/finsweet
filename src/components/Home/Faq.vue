<template>
  <div class="faq container">
    <div class="row">
      <div class="col-xl-4">
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

  &__header {
    background-color: transparent;
    border: none;
    padding: 32px 0;
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
    padding-bottom: 48px;
    font-weight: 500;
    font-size: 18px;
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

</style>