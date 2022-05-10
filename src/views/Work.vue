<template>
  <div class="work">
    <Hero/>
    <Project/>
    <div class="work__contact">
      <div class="work__contact-title">Let's build something great together</div>
      <div class="work__contact-description">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</div>
      <div class="btn btn-primary">Contact Us</div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Work/Hero";
import Project from "../components/Work/Project";
export default {
  name: "Work",
  components: {
    Project,
    Hero
  }
}
</script>

<style lang="scss" scoped>
.work {
  &__contact {
    padding-top: 128px;
    padding-bottom: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-title {
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      text-align: center;
      color: $brand-dark-blue;
      margin-bottom: 20px;
      max-width: 730px;
    }
    &-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: $brand-dark-blue;
      opacity: 0.7;
      max-width: 562px;
      margin-bottom: 40px;
    }
  }
}
</style>