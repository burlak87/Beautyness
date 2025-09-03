<script setup>
import Header from '../components/header.vue';
import WelcomeBanner from '../components/welcomeBanner.vue';
import OtherFeatures from '../components/otherFeatures.vue';
import AboutInfo from '../components/aboutInfo.vue';
import LatestStories from '../components/latestStories.vue';
import Testimonials from '../components/testimonials.vue';
import Follow from '../components/follow.vue';
import Footer from '../components/footer.vue';

const myDataObject = {
  titleClass: "title",
  activeArticlesOrExperts: false,
  articlesAndExperts: [
    {
      imgPath: "../../public/Image(26).png",
      span: "Beautyness Expert",
      title: "Sherlin D’Cruz",
      paragraph: "I must explain to you how all this <br> mistaken idea of denouncing pleasure <br> that will araise praising pain",
    },
    {
      imgPath: "../../public/Image(27).png",
      span: "Beautyness Expert",
      title: "Maria Sharapova",
      paragraph: "I must explain to you how all this <br> mistaken idea of denouncing pleasure <br> that will araise praising pain",
    },
    {
      imgPath: "../../public/Image(28).png",
      span: "Beautyness Expert",
      title: "Angeline Jenifer",
      paragraph: "I must explain to you how all this <br> mistaken idea of denouncing pleasure <br> that will araise praising pain",
    },
  ],
  btnClass: "none",
}

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="SHORT STORY ABOUT US" title="The big story behind, our beautyness center" btn="Make a reservation" btnClass="btn-active"/>
    <OtherFeatures />
    <AboutInfo />
    <LatestStories :dataObject="myDataObject" />
    <Testimonials />
    <Follow />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
