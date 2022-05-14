<template>
  <div class="container">
    <div class="d-flex flex-column align-items-center py-4">
      <h1 class="mb-4">Price Cards</h1>
      <div class="row">
        <div class="col-xl-4" v-for="(item, key) in priceing" :key="key">
          <Price v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "../components/Pricing/Price";

export default {
  name: "elements",
  components: {
    Price
  },
  data() {
    return {
      priceing: [
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem  aliqua.",
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          front: true,
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
        {
          currency: "$",
          price: "0",
          purpose: "month",
          title: "Basic",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          feature: [
            {
              active: false,
              title: "All limited links"
            },
            {
              active: true,
              title: "Own analytics platform"
            },
            {
              active: true,
              title: "Chat support"
            },
            {
              active: true,
              title: "Optimize hashtags"
            },
            {
              active: true,
              title: "Unlimited users"
            },
          ],
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>