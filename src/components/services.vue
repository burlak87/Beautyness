<script setup>
import { defineProps } from "vue";

const props = defineProps({
  smallTitle: {
    type: String,
    default: "OUR SERVICES",
  },
  mainTitle: {
    type: String,
    required: true,
  },
  serviceBlocks: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <article class="our-services">
    <section class="header">
      <p class="small-title">{{ smallTitle }}</p>
      <h2 class="main-title">{{ mainTitle }}</h2>
    </section>

    <section class="services-layout">
      <article 
        v-for="(block, index) in serviceBlocks" 
        :key="index" 
        :class="['service-block', { 'reverse': (!(index % 2 == 0)) }]"
      >
        <img class="image-container" :src="block.image" :alt="block.alt" />

        <section class="services-list">
          <ul>
            <li v-for="(service, i) in block.services" :key="i" class="service-item">
              <article class="service-name-price">
                <strong>{{ service.name }}</strong>
                <span class="dots"></span>
                <span class="price">from {{ service.price }}</span>
              </article>
              <p class="service-desc">{{ service.description }}</p>
              <hr v-if="i !== block.services.length - 1" />
            </li>
          </ul>

          <button class="btn-appointment">{{ block.buttonText }}</button>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/services.scss");
</style>