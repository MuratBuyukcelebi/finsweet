<template>
  <div class="team">
    <div class="container">
      <div class="team__title">Meet our team</div>
      <div class="row team__list">
        <div class="col-xl-3" v-for="(item, key) in list" :key="key">
          <div class="team-item">
            <div class="team-item__avatar">
              <img class="team-item__avatar-image" :src="item.image" alt="image">
              <div class="team-item__avatar-social">
                <a :href="`${item.facebook}`"><img src="../../assets/icons/facebook.svg" alt="facebook"></a>
                <a :href="`${item.twitter}`"><img src="../../assets/icons/twitter.svg" alt="twitter"></a>
                <a :href="`${item.linkedin}`"><img src="../../assets/icons/linkedin.svg" alt="linkedin"></a>
              </div>
            </div>
            <div class="team-item__title">{{ item.title }}</div>
            <div class="team-item__position">{{ item.position }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",

  data() {
    return {
      list: [
        {
          title: "John Smith",
          position: "CEO",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          facebook: "#",
          twitter: "#",
          linkedin: "#"
        },
        {
          title: "Simon Adams",
          position: "CTO",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          facebook: "#",
          twitter: "#",
          linkedin: "#"
        },
        {
          title: "Paul Jones",
          position: "Design Lead",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          facebook: "#",
          twitter: "#",
          linkedin: "#"
        },
        {
          title: "Sara Hardin",
          position: "Project Manager",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          facebook: "#",
          twitter: "#",
          linkedin: "#"
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.team {
  padding-top: 128px;
  padding-bottom: 128px;
  background: $brand-gray;

  &__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    color: $brand-dark-blue;
    margin-bottom: 48px;
  }
  &__list {
    background-color: #fff;
  }
}
.team-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 48px;
  padding-bottom: 32px;

  &__avatar {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 168px;
    width: 168px;
    border-radius: 100%;
    margin-bottom: 30px;

    &-social {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 10px;
      bottom: -100px;
      transition: all .6s;
    }
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      width: 168px;
      height: 168px;
      background: linear-gradient(348.37deg, #5239FA 17.97%, rgba(255, 255, 255, 0) 79.2%);
      bottom: -200px;
      transition: all .6s;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: $brand-dark-blue;
    margin-bottom: 2px;
  }
  &__position {
    font-size: 16px;
    line-height: 28px;
    opacity: 0.7;
    color: #1D2130;
  }

  &:hover {
    & .team-item__avatar {
      &-social {
        bottom: 14px;
      }
      &::before {
        bottom: -30px;
      }
    }
  }
}
</style>