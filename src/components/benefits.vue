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
  <article class="benefits">
    <p>OUR AWESOME BENEFITS</p>
    <h2>Actually what you’ll get from</h2>
    <section class="benefitsList">
      <article class="benefitsItem" v-for="(item, idx) in benefits" :key="idx">
        <img src="../assets/image/Icons.png" alt="" class="icon">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/benefits.scss");
</style>