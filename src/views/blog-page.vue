<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import LatestStories from '@/components/latestStories.vue';
import Footer from '@/components/footer.vue';

const myDataObject = {
  titleClass: "none",
  activeArticlesOrExperts: true,
  activeClass: "expert",
  articlesAndExperts: [
    {
      imgPath: "../../public/Image(34).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "The energy efficiency of the <br> hydrotherapy or swim",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(35).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "Tips to improve your body <br> via cleansing",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(36).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "Experience the beauty at <br> our beauty spa",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(37).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "The best and perfect <br> skincare strategy",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(38).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "Fell the natural reverse <br> aging process",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(39).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "How to make the make-up <br> stay last",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
  ],
  btnClass: "btn-active",
}

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="GET IN TOUCH WITH US" title="Articles & News" btn="" btnClass="none"/>
    <LatestStories :dataObject="myDataObject" />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>