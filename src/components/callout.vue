<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  note: '',
});

function onSubmit() {
  // Для примера: просто выводим форму в консоль
  console.log('Form submitted:', { ...form });
  // Здесь можно добавить логику отправки данных
}
</script>

<template>
  <article class="discount-section">
    <section class="container">
      <article class="content-left">
        <p class="discount-label">FLAT DISCOUNT</p>
        <h2 class="discount-title">
          Claim upto 50% offer <br> on the most popular services...
        </h2>
        <p class="discount-desc">
          Our Retreat is not meant to be an occasional treat, but rather a part of your <br> routine that restores balance to your daily life.
        </p>
        <section class="contact-discount">
          <article class="contact-info">
            <p>
              <span class="dots"></span>
              <strong> MAIL US :</strong><br />
              info@beautyness.com
            </p>
            <p>
              <span class="dots"></span>
              <strong> CALL US :</strong><br />
              (+22) 123 4568 009
            </p>
          </article>
          <article class="flat-offer">
            <p class="get-flat">- GET FLAT -</p>
            <p class="percent">50<span>%</span></p>
            <p class="discount-text">Discount</p>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/callout.scss");
</style>