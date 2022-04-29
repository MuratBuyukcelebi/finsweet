<template>
  <div class="work">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-xl-0 mb-5">
          <div class="work-content__title">How we work</div>
          <div class="work-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          <a href="#" class="work-content__button">
            <span>Get in touch with us</span>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
            </svg>
          </a>
        </div>
        <div class="col-lg-6 offset-xl-2 offset-lg-1">
          <div class="work-order__list">
            <div class="work-order__item" v-for="item in list">
              <div class="work-order__item-logo"><span class="work-order__item-logo__text">{{ item.number }}</span></div>
              <div class="work-order__item-title">{{ item.title }}</div>
              <div class="work-order__item-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",

  data() {
    return {
      list: [
        {
          number: 1,
          title: "Strategy",
          description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
        },
        {
          number: 2,
          title: "Wireframing",
          description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
        },
        {
          number: 3,
          title: "Design",
          description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
        },
        {
          number: 4,
          title: "Development",
          description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .work {
    padding-top: 128px;
    padding-bottom: 128px;
    background: #F4F6FC;

    &-content {
      &__title {
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: $brand-dark-blue;
        margin-bottom: 16px;
      }
      &__description {
        font-size: 16px;
        line-height: 28px;
        color: $brand-dark-blue;
        opacity: 0.7;
        margin-bottom: 16px;
      }
      &__button {
        display: flex;
        align-items: center;
        gap: 12px;

        span {
          font-weight: 500;
          font-size: 18px;
          line-height: 32px;
          color: $brand-royal-blue;
        }
        svg {
          transition: all .3s;

          path {
            fill: $brand-royal-blue;
          }
        }

        &:hover {
          svg {
            transform: translateX(6px);
          }
        }
      }
    }
    &-order {
      &__list {
        display: grid;
        grid-template-columns: auto auto;
        gap: 48px 24px;
      }
      &__item {
        &-logo {
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 50px;
          background-repeat: no-repeat;
          background-color: $brand-royal-blue;
          margin-bottom: 16px;
          border-radius: 8px;
          overflow: hidden;

          &__text {
            font-weight: 500;
            font-size: 18px;
            line-height: 32px;
            color: #fff;
            z-index: 1;
          }

          &::after {
            content: "";
            position: absolute;
            background-color: #5239FA;
            height: 50px;
            width: 50px;
            bottom: 9px;
            left: 8px;
            border-radius: 8px;
            z-index: 0;
          }
          &::before {
            content: "";
            position: absolute;
            background-color: #FCD980;
            right: 26px;
            top: 27px;
            height: 50px;
            width: 50px;
            border-radius: 8px;
            z-index: 0;
          }
        }
        &-title {
          font-weight: 500;
          font-size: 32px;
          line-height: 48px;
          color: $brand-dark-blue;
          margin-bottom: 8px;
       }
        &-description {
          font-size: 16px;
          line-height: 28px;
          color: $brand-dark-blue;
          opacity: 0.7;
        }
      }
    }

    @include media-breakpoint-down(xl) {
      padding-top: 96px;
      padding-bottom: 96px;

      &-content {
        &__title {
          font-size: 36px;
          line-height: 48px;
        }
        &__description {
          font-size: 14px;
          line-height: 24px;
        }
        &__button {
          span {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
      &-order {
        &__item {
          &-logo {
            height: 40px;
            width: 40px;
            margin-bottom: 8px;

            &::after {
              height: 40px;
              width: 40px;
              bottom: 5px;
              left: 5px;
            }
            &::before {
              right: 20px;
              top: 20px;
              height: 40px;
              width: 40px;
            }
          }
          &-title {
            font-size: 24px;
            line-height: 32px;
          }
          &-description {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
    @include media-breakpoint-down(md) {
      padding-top: 64px;
      padding-bottom: 64px;

      &-order {
        &__list {
          grid-template-columns: auto;
        }
      }
    }
    @include media-breakpoint-down(sm) {
      &-content {
        &__title {
          font-size: 26px;
          line-height: 1.5;
          margin-bottom: 8px;
        }
        &__description {
          font-size: 14px;
          line-height: 24px;
        }
        &__button {
          span {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
      &-order {
        &__item {
          &-description {
            max-width: 300px;
          }
        }
      }
    }
  }
</style>