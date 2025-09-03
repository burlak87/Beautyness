<script setup>
const dataObject = [
  {
    imgPath: "../../public/Image(2).png",
    title: "Spa & Massage",
    paragraph: "If you are going to use a passage offer <br> Lorem Ipsum, you need to be sure <br> hidden in the middle of text.",
  },
  {
    imgPath: "../../public/Image(4).png",
    title: "Hair & Beauty",
    paragraph: "If you are going to use a passage offer <br> Lorem Ipsum, you need to be sure <br> hidden in the middle of text.",
  },
  {
    imgPath: "../../public/Image(3).png",
    title: "Body Treatments",
    paragraph: "If you are going to use a passage offer <br> Lorem Ipsum, you need to be sure <br> hidden in the middle of text.",
  },
]
</script>

<template>
  <article class="features">
    <section class="featuresContent">
      <article class="featuresItem" v-for="(data, index) in dataObject" :key="index">
        <img :src="data.imgPath" alt="">
        <h3>{{ data.title }}</h3>
        <p v-html="data.paragraph"></p>
        <button>READ MORE</button>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/features.scss");
</style>