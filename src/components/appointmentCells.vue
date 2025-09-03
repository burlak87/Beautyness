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
          Claim upto 50% off er<br />
          on the most popular<br />
          services...
        </h2>
        <p class="discount-desc">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, buying to 
          injected humour, or randomised words.
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

      <form class="content-right" @submit.prevent="onSubmit">
        <section class="input-group">
          <label>
            <i class="far fa-user icon"></i>
            <input type="text" placeholder="Name" v-model="form.name" required />
          </label>
        </section>
        <section class="input-group">
          <label>
            <i class="far fa-envelope icon"></i>
            <input type="email" placeholder="Email" v-model="form.email" required />
          </label>
        </section>
        <section class="input-group">
          <label>
            <i class="far fa-phone-alt icon"></i>
            <input type="tel" placeholder="Phone" v-model="form.phone" required />
          </label>
        </section>
        <section class="input-group">
          <label>
            <i class="far fa-book-open icon"></i>
            <input type="text" placeholder="Service You Need" v-model="form.service" required />
          </label>
        </section>
        <section class="input-group textarea-group">
          <label>
            <i class="far fa-book-open icon"></i>
            <textarea placeholder="Any Note For Us" v-model="form.note" rows="4"></textarea>
          </label>
        </section>
        <button type="submit" class="btn-submit">GET AN APPOINTMENT</button>
      </form>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/appointmentCells.scss");
</style>