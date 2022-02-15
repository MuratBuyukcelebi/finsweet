<template>
  <div class="team">
    <div class="container">
      <div class="team__title">Meet our team</div>
      <div class="row team__list">
        <div class="col-xl-3">
          <div class="team-item">
            <div class="team-item__logo">
              <img src="../../assets/about/team/1.png" alt="image">
              <div class="team-item__logo-social">
                <a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a>
                <a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a>
                <a href="#"><img src="../../assets/icons/linkedin.svg" alt="linkedin"></a>
              </div>
            </div>
            <div class="team-item__title">John Smith</div>
            <div class="team-item__class">CEO</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="team-item">
            <div class="team-item__logo">
              <img src="../../assets/about/team/2.png" alt="image">
              <div class="team-item__logo-social">
                <a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a>
                <a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a>
                <a href="#"><img src="../../assets/icons/linkedin.svg" alt="linkedin"></a>
              </div>
            </div>
            <div class="team-item__title">Simon Adams</div>
            <div class="team-item__class">CTO</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="team-item">
            <div class="team-item__logo">
              <img src="../../assets/about/team/3.png" alt="image">
              <div class="team-item__logo-social">
                <a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a>
                <a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a>
                <a href="#"><img src="../../assets/icons/linkedin.svg" alt="linkedin"></a>
              </div>
            </div>
            <div class="team-item__title">Paul Jones</div>
            <div class="team-item__class">Design Lead</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="team-item">
            <div class="team-item__logo">
              <img src="../../assets/about/team/4.png" alt="image">
              <div class="team-item__logo-social">
                <a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a>
                <a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a>
                <a href="#"><img src="../../assets/icons/linkedin.svg" alt="linkedin"></a>
              </div>
            </div>
            <div class="team-item__title">Sara Hardin</div>
            <div class="team-item__class">Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team"
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

  &__logo {
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
  &__class {
    font-size: 16px;
    line-height: 28px;
    opacity: 0.7;
    color: #1D2130;
  }

  &:hover {
    & .team-item__logo {
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