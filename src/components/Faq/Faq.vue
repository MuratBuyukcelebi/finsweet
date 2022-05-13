<template>
  <div class="container">
    <div class="faq">
      <div class="row">
        <div class="col-xl-4">
          <div class="faq__content">
            <div class="faq__content-title">{{ title }}</div>
            <a href="#" class="faq__content-contact">{{ contact }}</a>
          </div>
        </div>
        <div class="col-xl-8">
          <div id="faqAccordion">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  props: {
    title: {
      type: String,
    },
    contact: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
.faq {
  padding-top: 128px;
  padding-bottom: 128px;

  &__content {
    &-title {
      font-weight: 600;
      font-size: 38px;
      line-height: 56px;
      color: $brand-dark-blue;
      margin-bottom: 16px;
    }
    &-contact {
      font-weight: 500;
      font-size: 18px;
      line-height: 32px;
      opacity: .7;
      color: $brand-royal-blue !important;

      &:hover {
        text-decoration: underline !important;
      }
    }
  }
}

@include media-breakpoint-down(xxl) {
  .faq {
    &__content {
      &-title {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 10px;
      }
    }
  }
}
@include media-breakpoint-down(xl) {
  .faq {
    padding-top: 96px;
    padding-bottom: 96px;

    &__content {
      &-title {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}
@include media-breakpoint-down(md) {
  .faq {
    padding-top: 64px;
    padding-bottom: 64px;

    &__content {
      &-title {
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
}
@include media-breakpoint-down(sm) {
  .faq {
    padding-top: 48px;
    padding-bottom: 48px;

    &__content {
      &-title {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
</style>