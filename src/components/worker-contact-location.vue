<script setup>
  defineProps({
    imgPath: String,
    dataObject: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
<article class="worker-contact-location" :class="dataObject.reverse">
    <section class="image">
      <img :src="imgPath" alt="">
    </section>
    <section class="contact-information">
      <span>{{ dataObject.span }}</span>
      <h4 v-html="dataObject.title"></h4>
      <p v-html="dataObject.paragraph"></p>
      <article class="contact" v-for="(iconBlock, index) in dataObject.iconsBlock" :key="index">
        <section class="icon-block">
          <i :class="iconBlock.icons"></i>
        </section>
        <section>
          <h4>{{ iconBlock.title }}</h4>
          <p>{{ iconBlock.paragraph }}</p>
        </section>
      </article>
      <button :class="dataObject.btnClass">MAKE A RESERVATION</button>
      <article :class="dataObject.icnClass">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin-in"></i>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/worker-contact-location.scss");
</style>