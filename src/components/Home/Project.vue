<template>
  <div class="project">
    <div class="container">
      <div class="project__title">
        <span>View our projects</span>
        <a href="#" class="project__title-action">
          <span>View More</span>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
          </svg>
        </a>
      </div>
      <div class="row">
        <div class="col-xl-8">
          <div class="project__design">
            <div class="project__design-image"><img src="../../assets/home/projects/card-2.png" alt="image"></div>
            <div v-bind:class="[{ active: isActive }]" class="project__design-content">
              <div class="project__design-content__title">Workhub office Webflow Webflow Design</div>
              <div class="project__design-content__description">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </div>
              <a href="#" class="project__design-content__button">
                <span>View project</span>
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
                </svg>
              </a>
            </div>
            <button @click="isActive = !isActive" class="project__design-button">
              <span>Read Case Studies</span>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="project__portfolio">
            <div class="project__portfolio-image">
              <img src="../../assets/home/projects/card-3.png" alt="image">
              <div class="project__portfolio-content">
                <div class="project__portfolio-content__title">Unisaas Website Design</div>
                <a href="#" class="project__portfolio-content__button">
                  <span>View portfolio</span>
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="project__portfolio-image">
              <img src="../../assets/home/projects/card-3.png" alt="image">
              <div class="project__portfolio-content">
                <div class="project__portfolio-content__title">Unisaas Website Design</div>
                <a href="#" class="project__portfolio-content__button">
                  <span>View portfolio</span>
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
                  </svg>
                </a>
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
  data() {
    return {
      isActive: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .project {
    padding-top: 128px;
    padding-bottom: 128px;

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 64px;

      span {
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: $brand-dark-blue;
      }
      a {
        span {
          margin-right: 16px;
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          color: #282938 !important;
        }
        svg {
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
    &__design {
      position: relative;

      &-image {
        z-index: 0;

        img {
          width: 100%;
          height: 600px;
        }
      }
      &-content {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
        height: 100%;
        width: 50%;
        padding: 0 34px 76px 50px;
        transition: all .5s;
        pointer-events: none;
        opacity: 0;

        &__title {
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          color: #FFFFFF;
          margin-bottom: 16px;
          margin-top: 312px;
        }
        &__description {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          color: #FFFFFF;
          opacity: 0.8;
          margin-bottom: 40px;
        }
        &__button {
          display: flex;
          align-items: center;
          gap: 12px;

          span {
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            color: $brand-yellow;
          }
          svg {
            transition: all .3s;

            path {
              fill: $brand-yellow;
            }
          }

          &:hover {
            svg {
              transform: translateX(6px);
            }
          }
        }

        &.active {
          pointer-events: auto;
          opacity: 1;
        }
      }
      &-button {
        position: absolute;
        left: 48px;
        bottom: 50px;
        display: flex;
        align-items: center;
        background-color: transparent;
        gap: 12px;
        border: none;

        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          color: #FCD980;
        }
        svg {
          transition: all .3s;

          path {
            fill: $brand-yellow;
          }
        }

        &:hover {
          svg {
            transform: translateX(6px);
          }
        }
      }
    }
    &__portfolio {
      display: flex;
      flex-direction: column;
      gap: $grid-gutter-width;

      &-image {
        position: relative;

        &:hover .project__portfolio-content {
          opacity: 1;
        }
      }
      &-content {
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
        padding: 0 56px;
        height: 100%;
        opacity: 0;
        transition: all .6s;

        &__title {
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          color: #FFFFFF;
          margin-bottom: 10px;
          margin-top: 128px;
        }
        &__button {
          display: flex;
          align-items: center;
          gap: 12px;

          span {
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            color: $brand-yellow;
          }
          svg {
            transition: all .3s;

            path {
              fill: $brand-yellow;
            }
          }

          &:hover {
            svg {
              transform: translateX(6px);
            }
          }
        }
      }

      img {
        width: 100%;
        height: 284px;
      }
    }
  }
</style>