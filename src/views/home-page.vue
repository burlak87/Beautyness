<script setup>
import Header from '@/components/header.vue';
import WelcomeBlock from '@/components/welcomeBlock.vue';
import Features from '@/components/features.vue';
import OtherAboutInfo from '@/components/otherAboutInfo.vue';
import Services from '@/components/services.vue';
import Testimonials from '@/components/testimonials.vue';
import Benefits from '@/components/benefits.vue';
import AppointmentCells from '@/components/appointmentCells.vue';
import LatestStories from '@/components/latestStories.vue';
import Footer from '@/components/footer.vue';

const dataServiceObject = [
    {
      image: '../../public/Image(6).png',
      alt: 'Face masks',
      buttonText: 'GET AN APPOINTMENT',
      services: [
        { name: 'Face masks', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Full body massage', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },
    {
      image: '../../public/Image(7).png',
      alt: 'Spa treatment',
      buttonText: 'GET AN APPOINTMENT',
      services: [
        { name: 'Face masks', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Full body massage', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    }
  ]

const myDataObject = {
  titleClass: "none",
  activeArticlesOrExperts: true,
  activeClass: "expert",
  articlesAndExperts: [
    {
      imgPath: "../../public/Image(34).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "The energy efficiency of the hydrotherapy or swim",
      paragraph: "The point of using Lorem Ipsum hiter <br> that using making it look like others <br> readable will get end.",
    },
    {
      imgPath: "../../public/Image(35).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "Tips to improve your body via cleansing",
      paragraph: "The point of using Lorem Ipsum hiter that using making it look like others readable will get end.",
    },
    {
      imgPath: "../../public/Image(36).png",
      span: "11TH AUGUST 2021 - BY PETER BERGSON",
      title: "Experience the beauty at our beauty spa",
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
    <WelcomeBlock />
    <Features />
    <OtherAboutInfo />
    <Services mainTitle="We are Experienced in making you very Beautiful" :serviceBlocks="dataServiceObject" />
    <Testimonials />
    <Benefits />
    <AppointmentCells />
    <LatestStories :dataObject="myDataObject" />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
