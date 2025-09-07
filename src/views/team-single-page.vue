<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import WorkerContactLocation from '@/components/worker-contact-location.vue';
import Footer from '@/components/footer.vue';

const myDataObject = {
  span: "GET IN TOUCH!",
  title: "Sherlin D'Cruz",
  paragraph: "There are many variations of passages of Lorem Ipsum available, <br> but the majority have suffered alteration in some form, by injecte <br> humour, or randomised words which don't look even slightly <br> believable. If you are going to use a passage of Lorem Ipsum, you <br> need to be sure there isn't anything embarrassing hidden in the <br> middle of text. All the Lorem Ipsum generators on the Internet <br> tend to repeat.",
  iconsBlock: [
    {
      icons: "far fa-phone-alt",
      title: "", 
      paragraph: "(+22)1423585980",
    },
    {
      icons: "far fa-envelope", 
      title: "", 
      paragraph: "sherlindcruz@gmail.com",
    },
  ],
  btnClass: "btn-active",
  icnClass: "icn-active",
}
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="THE EXPERT" title="Creative Beauty Team" btn="" btnClass="none"/>
    <WorkerContactLocation imgPath="../../public/Image(32).png" :dataObject="myDataObject" />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
