<template>
  <div class="features">
    <Hero/>
    <benefits/>
    <Content/>
    <Faq/>
  </div>
</template>

<script>
import Hero from "../components/Features/Hero";
import Benefits from "../components/Benefits";
import Content from "../components/Features/Content";
import Faq from "../components/Faq";

export default {
  name: "Features",
  components: {Faq, Content, Benefits, Hero}
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  flex-direction: column-reverse;
  padding-top: 128px - 48px;
}
</style>