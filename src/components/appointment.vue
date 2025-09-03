<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  note: ''
})

function onSubmit() {
  // заглушка отправки формы
  alert('Форма отправлена!')
}
</script>

<template>
  <article class="appointment">
    <section class="appointmentTitle">
      <span>SCHEDULE YOUR PRESENCE</span>
      <h2>Make an Appointment</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>
    </section>
    <form class="appointmentForm" @submit.prevent="onSubmit">
      <article class="inputRow">
        <label class="inputField">
          <i class="far fa-user icon"></i>
          <input type="text" placeholder="Name" v-model="form.name" />
        </label>
        <label class="inputField">
          <i class="far fa-envelope icon"></i>
          <input type="email" placeholder="Email" v-model="form.email" />
        </label>
      </article>
      <article class="inputRow">
        <label class="inputField">
          <i class="far fa-phone-alt icon"></i>
          <input type="tel" placeholder="Phone" v-model="form.phone" />
        </label>
        <label class="inputField">
          <i class="far fa-book-open icon"></i>
          <input type="text" placeholder="Service You Need" v-model="form.service" />
        </label>
      </article>
      <article class="inputRow lastRow">
        <label class="inputField textareaField">
          <i class="far fa-book-open icon"></i>
          <textarea placeholder="Any Note For Us" v-model="form.note"></textarea>
        </label>
        <button type="submit" class="btnSubmit">
          GET AN APPOINTMENT
        </button>
      </article>
      <p class="appointmentFooter">
      Your personal information will not be passed on to any third parties. please read our
      <strong>Privacy Policy</strong>.
    </p>
    </form>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/appointment.scss");
</style>