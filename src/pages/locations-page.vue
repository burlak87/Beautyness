<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import WorkerContactLocation from '@/components/worker-contact-location.vue';
import Footer from '@/components/footer.vue';

const myDataObject = {
  span: "COLUMBIA",
  title: "Washington D.C",
  paragraph: "",
  iconsBlock: [
    {
      icons: "fal fa-home",
      title: "Visit Us:", 
      paragraph: "NO.09a, Downtown, SAN DIEAGO, USA",
    },
    {
      icons: "far fa-envelope", 
      title: "Drop Us:", 
      paragraph: "supnoneport@beautyness.com",
    },
    {
      icons: "far fa-phone-alt", 
      title: "Call Us:", 
      paragraph: "Call: 1-800-123-9999",
    }, 
  ],
  btnClass: "btn-active",
  icnClass: "none",
  reverse: "none",
}

const myDataObjectTwo = {
  span: "SAN FRANCISCO",
  title: "New York",
  paragraph: "",
  iconsBlock: [
    {
      icons: "fal fa-home",
      title: "Visit Us:", 
      paragraph: "NO.09a, Downtown, SAN DIEAGO, USA",
    },
    {
      icons: "far fa-envelope", 
      title: "Drop Us:", 
      paragraph: "supnoneport@beautyness.com",
    },
    {
      icons: "far fa-phone-alt", 
      title: "Call Us:", 
      paragraph: "Call: 1-800-123-9999",
    }, 
  ],
  btnClass: "btn-active",
  icnClass: "none",
  reverse: "reverse",
}

const myDataObjectThree = {
  span: "FRANCE",
  title: "Paris",
  paragraph: "",
  iconsBlock: [
    {
      icons: "fal fa-home",
      title: "Visit Us:", 
      paragraph: "NO.09a, Downtown, SAN DIEAGO, USA",
    },
    {
      icons: "far fa-envelope", 
      title: "Drop Us:", 
      paragraph: "supnoneport@beautyness.com",
    },
    {
      icons: "far fa-phone-alt", 
      title: "Call Us:", 
      paragraph: "Call: 1-800-123-9999",
    }, 
  ],
  btnClass: "btn-active",
  icnClass: "none",
  reverse: "none",
}

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="WHERE ARE HERE!" title="Our Location" btn="" btnClass="none"/>
    <WorkerContactLocation imgPath="../../public/Image(44).png" :dataObject="myDataObject" />
    <WorkerContactLocation imgPath="../../public/Image(43).png" :dataObject="myDataObjectTwo" />
    <WorkerContactLocation imgPath="../../public/Image(42).png" :dataObject="myDataObjectThree" />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
