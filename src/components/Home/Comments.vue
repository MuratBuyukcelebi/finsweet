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
          <div class="comments__list">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments"
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
}
</style>