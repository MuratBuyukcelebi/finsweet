<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__content-top">What we created</div>
        <div class="hero__content-title">Our Work Portfolio</div>
        <div class="hero__content-description">We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</div>
        <div class="hero__content-social">
          <a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook-icon"></a>
          <a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter-icon"></a>
          <a href="#"><img src="../../assets/icons/linkedin.svg" alt="linkedin-icon"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.hero {
  background: $brand-gray;
  padding-top: 96px;
  padding-bottom: 96px;
}
</style>