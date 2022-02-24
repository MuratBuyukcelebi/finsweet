<template>
  <div class="container contact">
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="contact__top">
          <div class="contact__top-title">Contact Us</div>
          <div class="contact__top-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        </div>
      </div>
      <div class="col-xl-10">
        <div class="contact-form">
          <div class="row justify-content-center">
            <div class="col-xl-5">
              <div class="contact-form__item mb-4">
                <label for="input1" class="contact-form__item-title">Name</label>
                <input type="email" class="contact-form__item-input" id="input1" placeholder="Enter your name">
              </div>
              <div class="contact-form__item">
                <label for="input2" class="contact-form__item-title">Subject</label>
                <input type="email" class="contact-form__item-input" id="input2" placeholder="Provide context">
              </div>
            </div>
            <div class="col-xl-5">
              <div class="contact-form__item mb-4">
                <label for="input3" class="contact-form__item-title">Email</label>
                <input type="email" class="contact-form__item-input" id="input3" placeholder="Enter your Emial">
              </div>
              <div class="contact-form__item">
                <label for="exampleFormControlInput1" class="contact-form__item-title">Subject</label>
                <input type="email" class="contact-form__item-input" id="exampleFormControlInput1" placeholder="Select Subject">
              </div>
            </div>
            <div class="col-xl-10">
              <div class="contact-form__item contact-form__item--textarea mt-3">
                <label for="textarea" class="contact-form__item-title">Message</label>
                <textarea class="contact-form__item-input" placeholder="Write your  question here" id="textarea"></textarea>
              </div>
            </div>
            <div class="col-xl-10">
              <button class="btn btn-secondary">Send Messege</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 128px;
  padding-bottom: 128px;

  &__top {
    margin-bottom: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-title {
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      text-align: center;
      color: $brand-dark-blue;
      margin-bottom: 16px;
    }
    &-description {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: $brand-dark-blue;
      opacity: 0.7;
      max-width: 562px;
    }
  }
}
.contact-form {
  background: $brand-gray;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 12px;

  &__item {
    display: flex;
    flex-direction: column;

    &-title {
      font-weight: 500;
      font-size: 18px;
      line-height: 32px;
      color: #000000;
      margin-bottom: 6px;
    }
    &-input {
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      padding: 18px 32px;
      font-size: 16px;
      line-height: 28px;
      color: #000000;
      outline: none !important;
      background: transparent;
      resize: none;

      &::placeholder {
        color: #000000;
        font-size: 16px;
      }
    }

    &--textarea {
      margin-bottom: 32px;

      textarea {
        height: 138px;
      }
    }
  }
}
</style>