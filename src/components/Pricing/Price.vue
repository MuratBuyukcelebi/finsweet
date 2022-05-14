<template>
  <div class="pricing" :class="{'pricing--front' : front}">
    <div class="pricing__top">
      <span class="pricing__top-price">{{ currency }}{{ price }}</span>
      <span class="pricing__top-for">{{ purpose }}</span>
    </div>
    <div class="pricing__location">
      <div class="pricing__location-title">{{ title }}</div>
      <div class="pricing__location-description">{{ description }}</div>
    </div>
    <div class="pricing__feature">
      <div class="pricing__feature-item" v-for="(item, key) in feature" :key="key" :class="!item.active || 'active'">
        <div class="pricing__feature-item__icon">
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#A8AAB0"/>
          </svg>
        </div>
        <div class="pricing__feature-item__text">{{ item.title }}</div>
      </div>
    </div>
    <a href="#" class="btn w-100" :class="front ? 'btn-primary' : 'btn-secondary'">Get Start</a>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: {
    currency: {
      type: String,
      default: "$",
    },
    price: {
      type: String,
      default: "0",
    },
    purpose: {
      type: String,
      default: "month",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    front: {
      type: Boolean,
      default: false,
    },
    feature: {
      type: Array,
      active: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: "",
      },
    },
  }
}
</script>

<style scoped lang="scss">
.pricing {
  padding: 64px 48px;
  background: $brand-gray;
  border-radius: 12px;

  &__top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    &-price {
      font-weight: 600;
      font-size: 38px;
      line-height: 56px;
      color: $brand-dark-blue;
    }
    &-for {
      font-size: 16px;
      line-height: 28px;
      color: $brand-royal-blue;
    }
  }
  &__location {
    margin-bottom: 44px;
    min-height: 130px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: $brand-dark-blue;
      margin-bottom: 8px;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      opacity: .7;
      color: $brand-dark-blue;
    }
  }
  &__feature {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    min-height: 268px;
    margin-bottom: 64px;
    justify-content: flex-start;

    &-item {
      display: flex;
      align-items: center;
      gap: 12px;

      &__text {
        font-size: 16px;
        line-height: 28px;
        color: $brand-dark-blue;
        opacity: 0.7;
      }

      .active & {
        &__icon {
          svg {
            path {
              fill: #97DAAD;
            }
          }
        }
        &__text {
          opacity: 1;
        }
      }
    }
  }

  &--front {
    position: relative;
    background: #1C1E53 !important;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      height: 1150px;
      width: 1150px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 100%;
      bottom: 155px;
      left: -84%;
      z-index: 0;
      pointer-events: none;
    }
  }
  &--front & {
    z-index: 1;

    &__top {
      position: relative;
      z-index: 1;

      &-price {
        color: #fff;
      }
      &-for {
        color: $brand-yellow;
      }
    }
    &__location {
      position: relative;
      z-index: 1;

      &-title {
        color: #fff;
      }
      &-description {
        color: #fff;
      }
    }
    &__feature {
      position: relative;
      z-index: 1;

      &-item {
        &__text {
          color: #fff;
        }
      }
    }
    &__button {
      width: 100%;
    }
  }
}
</style>