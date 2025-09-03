<script setup>
const benefits = [
  {
    title: 'Optimised Energy Efficiency',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  },
  {
    title: 'Multi-faceted Water Filtration',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  },
  {
    title: 'Uncompromising Quality and Durability',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  },
  {
    title: 'An Ultra-Pampering Spa Experience',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  },
  {
    title: 'Easy Care for Unparalleled Enjoyment',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  },
  {
    title: 'Optimised Energy Efficiency',
    description: 'The point of using Lorem Ipsum is that using making it look like readable.'
  }
]
</script>

<template>
  <section class="benefits">
    <p class="benefits__subtitle">OUR AWESOME BENEFITS</p>
    <h2 class="benefits__title">Actually what you’ll get from</h2>
    <article class="benefitsList">
      <section class="benefitsItem" v-for="(item, idx) in benefits" :key="idx">
        <img src="../assets/image/Icons.png" alt="" class="icon">
        <h3 class="benefits__item-title">{{ item.title }}</h3>
        <p class="benefits__item-desc">{{ item.description }}</p>
      </section>
    </article>
  </section>
</template>

<style scoped lang="scss">
  @import url("../assets/style/benefits.scss");
</style>