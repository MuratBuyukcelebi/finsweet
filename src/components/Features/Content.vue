<template>
  <div class="content">
    <div class="content-item">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6">
            <div class="content-item__top">Use Client-first</div>
            <div class="content-item__title">Top agencies and freelancers around the world use <br class="d-xl-block d-none"> Client-first</div>
            <div class="content-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
          </div>
          <div class="col-xl-6">
            <div class="content-item__image">
              <img src="../../assets/features/content/1.png" alt="content-image">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-item" style="--background: #F4F6FC;">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-xl-6">
            <div class="content-item__top">Free Revision Rounds</div>
            <div class="content-item__title">Get free Revisions and one week of free maintenance</div>
            <div class="content-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          </div>
          <div class="col-xl-6">
            <div class="content__image">
              <img src="../../assets/features/content/2.png" alt="content-image">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-item">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6">
            <div class="content-item__top">24/7 Support</div>
            <div class="content-item__title">Working with us, you will be getting 24/7 priority support</div>
            <div class="content-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          </div>
          <div class="col-xl-6">
            <div class="content-item__image">
              <img src="../../assets/features/content/3.png" alt="content-image">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-item"  style="--background: #FFFCF3;">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-xl-6">
            <div class="content-item__top">Quick Delivery</div>
            <div class="content-item__title">Guranteed 1 week delivery for standard five pager website</div>
            <div class="content-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          </div>
          <div class="col-xl-6">
            <div class="content-item__image">
              <img src="../../assets/features/content/4.png" alt="content-image">
            </div>
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
  &-item:first-child {
    padding-top: 0;
  }
}
.content-item {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 128px;
  padding-bottom: 128px;

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
    max-width: 630px;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.6;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    height: 100%;
    background: var(--background);
    z-index: -1;
    pointer-events: none;
  }
}
</style>