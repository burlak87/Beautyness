<script setup>
const dataObject = [
  {
    imgPath: "../../public/Icon(1).png",
    text: "Beauty Experts",
  },
  {
    imgPath: "../../public/Icon(2).png",
    text: "Great Services",
  },
  {
    imgPath: "../../public/Icon(3).png",
    text: "100% Genuine",
  },
]
</script>

<template>
  <article class="otherAboutInfo">
    <section class="aboutContent">
      <span>About Us</span>
      <h3>The Beauty is about <br> being Comfortable <br> in your own skin!</h3>
      <p>There are many variations of passages of Lorem Ipsum available, <br> but the majority have suffered alteration in some form, buying to <br> injected humour, or randomised words which don't look even <br> many desktop publishing packages.</p>
      <article class="contentIconList">
        <section class="contentIconItem" v-for="(data, index) in dataObject" :key="index">
          <img :src="data.imgPath" alt="">
          <p> {{ data.text }} </p>
        </section>
      </article>
    </section>
    <img src="../assets/image/Image(5).png" alt="">
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/otherAboutInfo.scss");
</style>