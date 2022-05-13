<template>
  <div>
    <Hero/>
    <Work/>
    <Project/>
    <Features/>
    <Comments/>
    <Faq title="Frequently asked questions" contact="Contact us For More Info">
      <FaqItem v-for="(item, key) in faq" v-bind="item" :key="key" />
    </Faq>
    <Contact/>
    <Blog/>
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
import Faq from "../components/Faq/Faq";
import FaqItem from "../components/Faq/FaqItem";

export default {
  components: {
    Blog,
    Contact,
    Comments,
    Features,
    Project,
    Work,
    Hero,
    Faq,
    FaqItem,
  },
  data() {
    return {
      faq: [
        {
          id: "faq1",
          number: "01",
          text: "How much time does it take?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq2",
          number: "02",
          text: "What is your class naming convention?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq3",
          number: "03",
          text: "How do you communicate?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq4",
          number: "04",
          text: "I have a bigger project. Can you handle it?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "faq5",
          number: "05",
          text: "What is your class naming convention?",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]
    }
  },
}
</script>