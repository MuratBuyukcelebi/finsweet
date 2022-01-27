<template>
  <div>
    <hero/>
    <work/>
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

export default {
  components: {Work, Hero}
}
</script>