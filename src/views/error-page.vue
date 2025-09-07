<script setup>
import Header from '@/components/header.vue';
import WelcomeBanner from '@/components/welcomeBanner.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <WelcomeBanner span="PAGE NOT FOUND" title="404 Error Page" btn="" btnClass="none" />
    <article class="errorBanner">
      <span>404</span>
      <h3>Page not Found!!!</h3>
      <p>The page you are looking for doesn't exist. Please try searching <br> for some other page, or return to the website's homepage to find <br> what you're looking for.</p>
      <button>BACK TO HOME</button>
    </article>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped lang="scss">
  @import "../assets/var";

  .errorBanner {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    background-image: url("../public/Background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    span {
      font-size: 64px;
      color: $light-blue;
    }
    h3 {
      font-weight: 700;
      font-size: 40px;
      color: $dark-text;
    }
    p {
      font-weight: 400;
      font-size: 19px;
      color: $gray-text;
    }
    button {
      width: 250px;
      height: 65px;
      background-color: $light-blue;
      color: $white-text;
      border: $bd;
    }
  }
</style>