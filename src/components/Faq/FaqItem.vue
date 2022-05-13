<template>
  <div class="faq-item collapsed" data-bs-toggle="collapse" :data-bs-target="`#${id}`">
    <button class="faq-item__header collapsed" type="button">
      <span class="faq-item__header-title"><span class="faq-item__header-number">{{ number }}</span><span class="faq-item__header-text">{{ text }}</span></span>
      <span class="faq-item__header-icon"></span>
    </button>
    <div class="faq-item__body collapse" :id="id" data-bs-parent="#faqAccordion">
      <div class="faq-item__inner">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqItem",
  props: {
    number: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.faq-item {
  border-bottom: 2px solid #ECECF1;
  padding-bottom: 32px;

  &__header {
    background-color: transparent;
    border: none;
    padding-top: 32px;
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
    padding-left: 60px + 24px + 8px;
  }
  &__inner {
    max-width: 624px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 32px;
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

  @include media-breakpoint-down(xl) {
    padding-bottom: 24px;

    &__body {
      padding-left: 92px;
    }
    &__inner {
      padding-top: 24px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  @include media-breakpoint-down(md) {
    padding-bottom: 16px;

    &__header {
      &-title {
        gap: 32px;
      }
      &-number {
        font-size: 18px;
        line-height: 24px;
        width: 16px;
      }
      &-text {
        font-size: 18px;
        line-height: 24px;
      }
    }
    &__body {
      padding-left: 54px;
    }
    &__inner {
      padding-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
  }
  @include media-breakpoint-down(sm) {
    padding-bottom: 16px;

    &__header {
      &-title {
        gap: 12px;
      }
      &-number {
        font-size: 14px;
        line-height: 20px;
        width: 16px;
      }
      &-text {
        font-size: 13px;
        line-height: 20px;
      }
      &-icon {
        height: 12px;
        width: 12px;

        &::after {
          width: 12px;
        }
        &::before {
          height: 12px;
        }
      }
    }
    &__body {
      padding-left: 34px;
    }
    &__inner {
      padding-top: 14px;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>