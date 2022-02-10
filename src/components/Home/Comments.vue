<template>
  <div class="comments">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="comments__content">
            <div class="comments__content-title">What our clients <br class="d-xl-block d-none"> say about us</div>
            <div class="comments__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="comments__slider">
            <div class="comments__list">
              <flickity  class="flickity" ref="flickity" :options="flickityOptions">
                <div class="carousel-cell">
                  <div class="comments__item">
                    <div class="comments__item-title">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</div>
                    <div class="comments__item-user">
                      <div class="comments__item-user__icon"><img src="https://randomuser.me/api/portraits/women/66.jpg" alt="image"></div>
                      <div class="comments__item-user__information">
                        <span class="comments__item-user__name">Jenny Wilson</span>
                        <span class="comments__item-user__class">Vice President</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-cell">
                  <div class="comments__item">
                    <div class="comments__item-title">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</div>
                    <div class="comments__item-user">
                      <div class="comments__item-user__icon"><img src="https://randomuser.me/api/portraits/women/66.jpg" alt="image"></div>
                      <div class="comments__item-user__information">
                        <span class="comments__item-user__name">Jenny Wilson</span>
                        <span class="comments__item-user__class">Vice President</span>
                      </div>
                    </div>
                  </div>
                </div>
              </flickity>
            </div>
            <div class="comments__slider-actions">
              <div class="comments__slider-button">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6" d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z" fill="#282938"/>
                </svg>
              </div>
              <div class="comments__slider-button active">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6" d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z" fill="#282938"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: #FAFBFE;

  &__content {
    &-title {
      font-weight: 600;
      font-size: 38px;
      line-height: 56px;
      color: $brand-dark-blue;
      margin-bottom: 16px;
    }
    &-description {
      font-size: 16px;
      line-height: 28px;
      color: $brand-dark-blue;
      opacity: 0.7;
    }
  }
  &__item {
    &-title {
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      color: $brand-dark-blue;
      margin-bottom: 48px;
    }
    &-user {
      display: flex;
      align-items: center;
      gap: 14px;

      &__icon {
        img {
          border-radius: 50%;
          height: 52px;
          width: 52px;
        }
      }
      &__information {
        display: flex;
        flex-direction: column;
      }
      &__name {
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        color: $brand-dark-blue;
      }
      &__class {
        font-weight: 500;
        font-size: 12px;
        line-height: 28px;
        color: $brand-dark-blue;
      }
    }
  }
  &__slider {
    position: relative;

    &-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 48px;
      width: 48px;
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s;

      &.active {
        background-color: #5239FA;

        svg {
          transform: rotate(180deg);

          path {
            fill: #fff;
            opacity: 1;
          }
        }
      }

      &:hover {
        background-color: darken(#fff, 5%);

        &.active {
          background-color: darken(#5239FA, 5%);
        }
      }
    }
  }
}
</style>