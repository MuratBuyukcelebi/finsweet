<template>
  <div>
    <hero/>
    <work/>
    <project/>
    <features/>
    <comments/>
    <Faq/>
    <contact/>
    <blog/>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/main";
</style>

<script>
import Hero from "../components/Home/Hero";
import Work from "../components/Home/Work";
import Project from "../components/Home/Project";
import Features from "../components/Home/Features";
import Comments from "../components/Home/Comments";
import Contact from "../components/Home/Contact";
import Blog from "../components/Home/Blog";
import Faq from "../components/Home/Faq";

export default {
  components: {Faq, Blog, Contact, Comments, Features, Project, Work, Hero}
}
</script>