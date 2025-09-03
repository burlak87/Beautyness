<script setup>
const titleObjects = [
  {
    imgPath: "../../public/Icon(1).png", 
    title: "Beauty Experts"
  }, 
  {
    imgPath: "../../public/Icon(2).png",
    title: "Great Services"
  }, 
  {
    imgPath: "../../public/Icon(3).png",
    title: "100% Genuine"
  }
]

</script>

<template>
    <article class="otherFeatures">
      <span>Our Values</span>
      <h3>The work values we thrive for</h3>
      <section class="featuresContent" v-for="(titleObject, index) in titleObjects" :key="index">
        <img :src="titleObject.imgPath" alt="">
        <article class="contentText">
          <h4>{{ titleObject.title }}</h4>
          <p>The majority have suffered alteration in some form, <br> buying to injected humour, or randomised words which <br> desktop publishing packages.</p>
        </article>
      </section>
    </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/otherFeatures.scss");
</style>