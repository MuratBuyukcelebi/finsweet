<template>
  <div class="work">
    <Hero/>
    <Project/>
  </div>
</template>

<script>
import Hero from "../components/Work/Hero";
import Project from "../components/Work/Project";
export default {
  name: "Work",
  components: {Project, Hero}
}
</script>

<style scoped>

</style>