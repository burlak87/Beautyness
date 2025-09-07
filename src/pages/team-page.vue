<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import LatestStories from '@/components/latestStories.vue';
import Footer from '@/components/footer.vue';

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
    {
      imgPath: "../../public/Image(31).png",
      span: "Beautyness Expert",
      title: "Bonham Carter",
      paragraph: "I must explain to you how all this <br> mistaken idea of denouncing pleasure <br> that will araise praising pain",
    },
    {
      imgPath: "../../public/Image(30).png",
      span: "Beautyness Expert",
      title: "Evanna Lynch",
      paragraph: "I must explain to you how all this <br> mistaken idea of denouncing pleasure <br> that will araise praising pain",
    },
    {
      imgPath: "../../public/Image(29).png",
      span: "Beautyness Expert",
      title: "Natalia Tena",
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
    <WelcomeBanner span="THE BEAUTY TEAM" title="Beautyness Experts" btn="" btnClass="none"/>
    <LatestStories :dataObject="myDataObject" />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
