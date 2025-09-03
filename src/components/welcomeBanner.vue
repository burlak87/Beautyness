<script setup>
  defineProps({
    span: String,
    title: String,
    btn: String,
    btnClass: String,
  })
</script>

<template>
    <article class="welcome-banner">
      <span>{{ span }}</span>
      <h2 v-html="title"></h2>
      <button :class="btnClass">{{ btn }}</button>
    </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/welcomeBanner.scss");
</style>