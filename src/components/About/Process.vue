<template>
  <div class="container process">
    <div class="process__title">The process we follow</div>
    <div class="row">
      <div class="col-xl-3" v-for="(item, key) in list" :key="key">
        <div class="process-item">
          <div class="process-item__title">{{ item.title }}</div>
          <div class="process-item__description">{{ item.description }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Process",

  data() {
    return {
      list: [
        {
          title: "Planning",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
          title: "Conception",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
          title: "Design",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
          title: "Development",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.process {
  padding-top: 128px;
  padding-bottom: 128px;

  &__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 48px;
    text-align: center;
  }
}
.process-item {
  position: relative;
  padding-top: 32px + 24px;

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
    color: $brand-dark-blue;
  }
  &__description {
    font-size: 16px;
    line-height: 28px;
    opacity: .7;
    color: $brand-dark-blue;
  }

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 24px;
    width: 24px;
    background-color: $brand-royal-blue;
    border-radius: 100%;
  }
  &::after {
    position: absolute;
    content: "";
    right: 24px;
    top: 12px;
    background-image: url("../../assets/about/process-dots.svg");
    background-repeat: repeat-x;
    width: 224px;
    height: 24px;
  }
}
</style>