<template>
  <div class="pricing">
    <div class="container pricing__list">
      <div class="pricing__top">
        <div class="pricing__top-title">Our Pricing Plans</div>
        <div class="pricing__top-description">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</div>
      </div>
      <div class="row">
        <div class="col-xl-4" v-for="(item, key) in priceing" :key="key">
          <Price v-bind="item" />
        </div>
      </div>
      <Faq title="Frequently asked questions" contact="Contact us For More Info">
        <FaqItem v-for="(item, key) in faq" v-bind="item" :key="key" />
      </Faq>
    </div>
  </div>
</template>

<script>
import Faq from "../components/Faq/Faq";
import FaqItem from "../components/Faq/FaqItem";
import Price from "../components/Pricing/Price";

export default {
  name: "Pricing",

  components: {
    Price,
    FaqItem,
    Faq
  },
  data() {
    return {
      faq: [
        {
          id: "faq1",
          number: "01",
          text: "How much time does it take?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq2",
          number: "02",
          text: "What is your class naming convention?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq3",
          number: "03",
          text: "How do you communicate?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq4",
          number: "04",
          text: "I have a bigger project. Can you handle it?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq5",
          number: "05",
          text: "What is your class naming convention?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      priceing: [
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem  aliqua.",
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          front: true,
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  &__list {
    padding-top: 128px;
  }
  &__top {
    margin-bottom: 64px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &-title {
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      color: $brand-dark-blue;
      margin-bottom: 16px;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: $brand-dark-blue;
      opacity: 0.7;
      max-width: 562px;
    }
  }
}
.pricing-item {
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
    &-limit {
      font-size: 16px;
      line-height: 28px;
      color: $brand-royal-blue;
    }
  }
  &__location {
    margin-bottom: 50px;
    min-height: 130px;

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
    justify-content: center;

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

      &--active & {
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
  &__button {
    width: 100%;
  }

  &--center {
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
  &--center & {
    z-index: 1;

    &__top {
      position: relative;
      z-index: 1;

      &-price {
        color: #fff;
      }
      &-limit {
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