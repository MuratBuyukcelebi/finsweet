<template>
  <div>
    <hero/>
    <work/>
    <project/>
    <features/>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/main";

.button__list {
  padding: 100px;
  display: flex;
  justify-content: space-evenly;
}
</style>
<script>
import Hero from "../components/Home/Hero";
import Work from "../components/Home/Work";
import Project from "../components/Home/Project";
import Features from "../components/Home/Features";

export default {
  components: {Features, Project, Work, Hero}
}
</script>