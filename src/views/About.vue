<template>
  <div class="About">
    <Hero/>
    <We/>
    <Process/>
    <Vision/>
    <Benefits/>
    <Team/>
  </div>
</template>

<script>
import Hero from "../components/About/Hero";
import We from "../components/About/We";
import Process from "../components/About/Process";
import Vision from "../components/About/Vision";
import Benefits from "../components/Benefits";
import Team from "../components/About/Team";

export default {
  name: "About",
  components: {
    Team,
    Benefits,
    Vision,
    Process,
    Hero,
    We
  }
}
</script>

<style lang="scss" scoped>
</style>