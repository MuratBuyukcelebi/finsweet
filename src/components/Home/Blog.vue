<template>
  <div class="blog container">
    <div class="blog__title">Our blog</div>
    <div class="row gy-lg-0 gy-5">
      <div class="col-lg-4" v-for="item in blog">
        <div class="blog-item">
          <div class="blog-item__image"><img :src="require(`../../assets/home/blog/${item.image}.png`)" alt="image"></div>
          <div class="blog-item__history">{{ item.date }}</div>
          <div class="blog-item__title"> {{ item.title }} </div>
          <div class="blog-item__description">{{ item.description }}</div>
          <a href="#" class="blog-item__button">
            <span>Read More</span>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",

  data() {
    return {
      blog: [
        {
          image: "1",
          date: "Jan 25, 2019",
          title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
          description: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
        },
        {
          image: "2",
          date: "Jan 25, 2019",
          title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
          description: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
        },
        {
          image: "3",
          date: "Jan 25, 2019",
          title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
          description: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  padding-top: 128px;
  padding-bottom: 128px;

  &__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    color: $brand-dark-blue;
    margin-bottom: 64px;
  }
}
.blog-item {
  &__image {
    width: 100%;
    margin-bottom: 40px;

    img {
      width: 100%;
    }
  }
  &__history {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.7;
    margin-bottom: 16px;
  }
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: $brand-dark-blue;
    margin-bottom: 16px;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    color: $brand-dark-blue;
    opacity: 0.7;
    margin-bottom: 32px;
  }
  &__button {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #282938;
    }
    svg {
      width: 24px;
      transition: all .3s;

      path {
        fill: #282938;
      }
    }

    &:hover {
      svg {
        transform: translateX(6px);
      }
    }
  }
}
@include media-breakpoint-down(xxl) {
  .blog-item {
    &__image {
      margin-bottom: 32px;
    }
    &__history {
      margin-bottom: 8px;
    }
    &__title {
      font-size: 20px;
      line-height: 32px;
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
}
@include media-breakpoint-down(xl) {
  .blog {
    padding-top: 96px;
    padding-bottom: 96px;

    &__title {
      font-size: 36px;
      line-height: 48px;
      margin-bottom: 24px;
    }
  }
  .blog-item {
    &__image {
      margin-bottom: 24px;
    }
    &__history {
      margin-bottom: 8px;
    }
    &__title {
      font-size: 18px;
      line-height: 32px;
    }
  }
}
@include media-breakpoint-down(lg) {
  .blog {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  .blog-item {
    &__image {
      margin-bottom: 16px;
    }
    &__history {
      margin-bottom: 8px;
    }
    &__title {
      font-size: 16px;
      line-height: 24px;
      max-width: 500px;
    }
    &__description {
      max-width: 500px;
      margin-bottom: 20px;
    }
  }
}
</style>