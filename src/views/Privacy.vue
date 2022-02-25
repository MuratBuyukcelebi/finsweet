<template>
  <div class="container">
    <div class="privacy">
      <div class="privacy__top">
        <div class="privacy__top-title">Privacy Policy</div>
        <div class="privacy__top-description">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </div>
      </div>
      <div class="privacy__content">
        <div class="privacy__content-title">Lorem ipsum dolor.</div>
        <div class="privacy__content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span>Excepteur sint occaecat</span> cupidatat non proident.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="privacy__content m-0">
        <div class="privacy__content-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="privacy__content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <span>cupidatat</span> non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy"
}
</script>

<style lang="scss" scoped>
.privacy {
  padding-top: 128px;
  padding-bottom: 128px;

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 64px;

    &-title {
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      color: $brand-dark-blue;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      opacity: 0.7;
      color: $brand-dark-blue;
      max-width: 562px;
    }
  }
  &__content {
    margin-bottom: 40px;

    &-title {
      font-weight: 600;
      font-size: 38px;
      line-height: 56px;
      margin-bottom: 32px;
      color: $brand-dark-blue;
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 24px;

     p {
       font-size: 16px;
       line-height: 28px;
       color: $brand-dark-blue;
       opacity: 0.7;
       margin: 0;

       span {
         color: $brand-royal-blue;
       }
     }
      ul {
        display: flex;
        gap: 12px;
        flex-direction: column;
        padding-left: 18px;
        margin: 0;

        li {
          font-size: 16px;
          line-height: 28px;
          color: $brand-dark-blue;
          opacity: 0.7;
        }
      }
    }
  }
}
</style>