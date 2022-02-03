<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    screenSize() {
      document.documentElement.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
      document.documentElement.style.setProperty('--app-width', `${document.documentElement.clientWidth}px`)
    }
  },
  created() {
    let that = this;
    that.screenSize();
    window.addEventListener("resize", function () {
      that.screenSize();
    });
    this.layout = { ...this.layoutBase }
    // Detect iPhone
    let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream
    let aspect = window.screen.width / window.screen.height
    if (iPhone && aspect.toFixed(3) === "0.462") {
      that.bars = true;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "~bootstrap/dist/css/bootstrap.css";
@import "src/assets/scss/main";
@import "src/assets/scss/variables";

html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  position: relative;
  height: var(--app-height, 100vh);
  width: var(--app-width, 100%);

  a {
    text-decoration: none;
  }
}
</style>
