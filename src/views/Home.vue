<template>
  <div>
    <hero/>
    <work/>
    <project/>
    <features/>
    <comments/>
    <test/>
    <faq/>
    <contact/>
    <blog/>
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
import Comments from "../components/Home/Comments";
import Faq from "../components/Home/Faq";
import Contact from "../components/Home/Contact";
import Blog from "../components/Home/Blog";
import Test from "../components/Home/Test";

export default {
  components: {Test, Blog, Contact, Faq, Comments, Features, Project, Work, Hero}
}
</script>