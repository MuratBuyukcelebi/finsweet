<template>
  <div class="features">
    <div class="container">
      <div class="features__header">
        <div class="features__header-top">Features</div>
        <div class="features__header-title">Design that solves problems, one product at a time</div>
      </div>
      <div class="features__list">
        <Card
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          v-for="item in features"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card";

export default {
  name: "Features",
  components: {Card},

  data() {
    return {
      features: [
        {
          title: "Uses Client First",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "people",
        },
        {
          title: "Two Free Revision Round",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "ok",
        },
        {
          title: "Template Customization",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "pen",
        },
        {
          title: "24/7 Support",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "faq",
        },
        {
          title: "Quick Delivery",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "timer",
        },
        {
          title: "Hands-on approach",
          description:"We design and develop products that solve real-world problems. We use the latest technologies to create the best user experience.",
          icon: "notebook",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .features {
    padding-top: 128px;
    padding-bottom: 128px;
    background: $brand-gray;

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 48px;

      &-top {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: $brand-dark-blue;
        margin-bottom: 12px;
      }
      &-title {
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: $brand-dark-blue;
        text-align: center;
        max-width: 630px;
      }
    }
    &__list {
      display: grid;
      gap: 24px 32px;
      grid-template-columns: auto auto auto;
    }

    @include media-breakpoint-down(xl) {
      padding-top: 96px;
      padding-bottom: 96px;

      &__header {
        &-title {
          font-size: 36px;
          line-height: 48px;
        }
      }
      &__list {
        grid-template-columns: auto auto;
      }
    }
    @include media-breakpoint-down(md) {
      padding-top: 64px;
      padding-bottom: 64px;

      &__header {
        &-title {
          font-size: 32px;
          line-height: 1.5;
        }
      }
      &__list {
        grid-template-columns: auto;
        gap: 16px;
      }
    }
    @include media-breakpoint-down(sm) {
      &__header {
        margin-bottom: 24px;

        &-title {
          font-size: 22px;
          max-width: 360px;
        }
      }
    }
  }
</style>