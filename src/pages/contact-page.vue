<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import WorkerContactLocation from '@/components/worker-contact-location.vue';
import Form from '@/components/form.vue';
import Footer from '@/components/footer.vue';

const myDataObject = {
  span: "BEAUTYNESS EXPERT MANAGER",
  title: "We are here to help <br> you always...",
  paragraph: "There are many variations of passages of Lorem Ipsum available, <br> but the majority have suffered alteration in some form, buying <br> to many desktop publishing packages.",
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
  btnClass: "none",
  icnClass: "none",
  reverse: "none"
}

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="GET IN TOUCH WITH US" title="We Are Ready To Assist <br> You In 24x7" btn="" btnClass="none"/>
    <WorkerContactLocation imgPath="../../public/Image(33).png" :dataObject="myDataObject" />
    <Form />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>