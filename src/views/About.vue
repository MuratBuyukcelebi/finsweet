<template>
  <div class="About">
    <Hero/>
    <We/>
    <Process/>
    <Vision/>
    <Benefits/>
  </div>
</template>

<script>
import Hero from "../components/About/Hero";
import We from "../components/About/We";
import Process from "../components/About/Process";
import Vision from "../components/About/Vision";
import Benefits from "../components/About/Benefits";

export default {
  name: "About",
  components: {Benefits, Vision, Process, Hero, We}
}
</script>

<style scoped>

</style>