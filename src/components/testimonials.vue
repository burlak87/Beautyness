<script setup>
const dataObject = [
  {
    imgPath: "../../public/Image(8).png",
    titleName: "James Williams",
    location: "United States",
  },
  {
    imgPath: "../../public/Image(9).png",
    titleName: "Lieo Jessica",
    location: "United Kingdom"
  },
]

</script>

<template>
    <article class="testimonials">
      <span>Testimonials</span>
      <h3>What our Customers says...</h3>
      <section class="testimonialsContent">
        <article class="review" v-for="(data, index) in dataObject" :key="index">
          <p>“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “</p>
          <section class="authorReview">
            <img :src="data.imgPath" alt="">
            <article class="reviewContent">
              <img src="../assets/image/Reviews.png" alt="">
              <h5>{{ data.titleName }}</h5>
              <p>{{ data.location }}</p>
            </article>
            <img src="../assets/image/Icon.png" alt="">
          </section>
        </article>
      </section>
    </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/testimonials.scss");
</style>