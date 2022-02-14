<template>
  <div class="About">
    <Hero/>
    <We/>
    <Process/>
  </div>
</template>

<script>
import Hero from "../components/About/Hero";
import We from "../components/About/We";
import Process from "../components/About/Process";
export default {
  name: "About",
  components: {Process, Hero, We}
}
</script>

<style scoped>

</style>