<template>
  <div class="container">
    <div class="content">
      <div class="row align-items-center content-item">
        <div class="col-xl-6">
          <div class="content__top">Use Client-first</div>
          <div class="content__title">Top agencies and freelancers around the world use Client-first</div>
          <div class="content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
        </div>
        <div class="col-xl-6">
          <div class="content__image">
            <img src="../../assets/features/content/1.png" alt="content-image">
          </div>
        </div>
      </div>
      <div class="row align-items-center content-item">
        <div class="col-xl-6">
          <div class="content__top">Free Revision Rounds</div>
          <div class="content__title">Get free Revisions and one week of free maintenance</div>
          <div class="content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
        <div class="col-xl-6">
          <div class="content__image">
            <img src="../../assets/features/content/2.png" alt="content-image">
          </div>
        </div>
      </div>
      <div class="row align-items-center content-item">
        <div class="col-xl-6">
          <div class="content__top">24/7 Support</div>
          <div class="content__title">Working with us, you will be getting 24/7 priority support</div>
          <div class="content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
        <div class="col-xl-6">
          <div class="content__image">
            <img src="../../assets/features/content/3.png" alt="content-image">
          </div>
        </div>
      </div>
      <div class="row align-items-center content-item" style="--background: #FCD980;">
        <div class="col-xl-6">
          <div class="content__top">Quick Delivery</div>
          <div class="content__title">Guranteed 1 week delivery for standard five pager website</div>
          <div class="content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
        <div class="col-xl-6">
          <div class="content__image">
            <img src="../../assets/features/content/4.png" alt="content-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style lang="scss" scoped>
.content {
  &__top {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #000;
    opacity: 0.9;
  }
  &__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    color: $brand-dark-blue;
    margin-bottom: 16px;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.6;
  }

  &:first-child &-item {
    padding-top: 0;
  }
  & &-item:nth-child(2n) {
    flex-direction: row-reverse;
  }
}
.content-item {
  position: relative;
  padding-top: 128px;
  padding-bottom: 128px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    height: 100%;
    background: var(--background);
    opacity: 10%;
    z-index: -1;
    pointer-events: none;
  }
}
</style>