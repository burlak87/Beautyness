<script setup>
  import Header from '@/components/header.vue';
  import WelcomeBanner from '@/components/welcomeBanner.vue';

  import Services from '@/components/services.vue';
  import Callout from '@/components/callout.vue';

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
    },

    {
      image: '../../public/Image(22).png',
      alt: 'Spa treatment',
      buttonText: 'GET AN APPOINTMENT',
      services: [
        { name: 'Face masks', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Full body massage', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },

    {
      image: '../../public/Image(21).png',
      alt: 'Spa treatment',
      buttonText: 'GET AN APPOINTMENT',
      services: [
        { name: 'Face masks', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Full body massage', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },

    {
      image: '../../public/Image(20).png',
      alt: 'Spa treatment',
      buttonText: 'GET AN APPOINTMENT',
      services: [
        { name: 'Face masks', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Full body massage', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },
  ]
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="The Perfect Service" title="Service to Elevate the <br> Better lifestyle" btn="Make a reservation" btnClass="btn-active" />
    <Services mainTitle="We are Experienced in making you very Beautiful" :serviceBlocks="dataServiceObject"/>
    <Callout />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped lang="scss">
</style>