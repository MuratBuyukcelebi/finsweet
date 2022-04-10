<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="hero-content__title">Building stellar websites for early startups</div>
          <div class="hero-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
          <div class="hero-content__actions">
            <a href="#" class="btn btn-primary">View our work</a>
            <a href="#" class="hero-content__button"><span>View Pricing</span><img src="../../assets/icons/arrow.svg" alt="svg"></a>
          </div>
        </div>
        <div class="col-lg-6 offset-xl-1">
          <img class="hero__image" src="../../assets/home/hero.svg" alt="hero-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style lang="scss" scoped>
  .hero {
    overflow: hidden;
    padding-top: 128px;
    padding-bottom: 128px;
    background-color: $brand-tint-blue;

    &-content {
      &__title {
        font-weight: 600;
        font-size: 54px;
        line-height: 74px;
        color: #fff;
        margin-bottom: 24px;
      }
      &__description {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: #FFFFFF;
        opacity: 0.7;
        margin-bottom: 48px;
      }
      &__actions {
        display: flex;
        align-items: center;
        gap: 40px;
      }
      &__button {
        display: flex;
        align-items: center;
        gap: 16px;

        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
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
    &__image {
      pointer-events: none;
    }

    @include media-breakpoint-down(xxl) {
      padding-top: 96px;
      padding-bottom: 96px;

      &-content {
        &__title {
          font-size: 42px;
          line-height: 60px;
        }
        &__description {
          font-size: 14px;
          line-height: 24px;
        }
        &__actions {
          gap: 24px;
        }
        &__button {
          gap: 8px;

          span {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
    @include media-breakpoint-down(lg) {
      &__image {
        display: none;
      }
    }
    @include media-breakpoint-down(md) {
      padding-top: 64px;
      padding-bottom: 64px;

      &-content {
        &__title {
          font-size: 32px;
          line-height: 48px;
        }
        &__description {
          font-size: 14px;
          line-height: 20px;
        }
        &__actions {
          gap: 16px;
        }
      }
    }
    @include media-breakpoint-down(sm) {
      &-content {
        &__title {
          font-size: 26px;
          line-height: 36px;
          max-width: 360px;
        }
        &__description {
          max-width: 360px;
          margin-bottom: 24px;
        }
      }
    }
  }
</style>