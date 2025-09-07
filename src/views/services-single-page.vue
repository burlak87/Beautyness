<script setup>
  import Header from '@/components/header.vue';
  import WelcomeBanner from '@/components/welcomeBanner.vue';
  import AboutInfoService from '@/components/aboutInfoService.vue';
  import MembershipCard from '@/components/membershipCard.vue';
  import Appointment from '@/components/appointment.vue';
  import Benefits from '@/components/benefits.vue';
  import Footer from '@/components/footer.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="The Perfect Service" title="Service to Elevate the <br> Better lifestyle" btn="Make a reservation" btnClass="btn-active" />
    <AboutInfoService />
    <MembershipCard />
    <Appointment />
    <Benefits />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped lang="scss">
</style>