<template>
  <div>
    <hero/>
    <work/>
    <project/>
  </div>
</template>

<style lang="scss">
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

export default {
  components: {Project, Work, Hero}
}
</script>