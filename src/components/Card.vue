<template>
  <div class="card"
       :class="[`color--${color}`]"
  >
    <div class="card__logo">
      <img :src="require(`../assets/icons/${icon}.svg`)" alt="card icon">
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    color: {
      type: String,
      default: "white",
      validator: (value) => ['gray', 'white'].includes(value),
    },
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
.card {
  padding: 58px 32px 48px 48px;
  background-color: #fff;
  border: none !important;

  &__logo {
    margin-bottom: 24px;
  }
  &__title {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    color: $brand-dark-blue;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    opacity: 0.7;
    color: $brand-dark-blue;
  }

  &.color {
    &--gray {
      background-color: $brand-gray;
    }
    &--white {
      background-color: #fff;
    }
  }

  @include media-breakpoint-down(lg) {
    padding: 36px 30px;

    &__logo {
      margin-bottom: 20px;
    }
    &__title {
      font-size: 20px;
    }
  }
  @include media-breakpoint-down(sm) {
    padding: 30px 20px;

    &__logo {
      margin-bottom: 10px;

      img {
        height: 30px;
        Width: 30px;
      }
    }
    &__title {
      font-size: 20px;
      margin-bottom: 0.5rem;
    }
  }
}
</style>