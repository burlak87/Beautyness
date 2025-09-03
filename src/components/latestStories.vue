<script setup>
  const { dataObject } = defineProps({
    dataObject: {
      type: Object,
      required: true,
    }
  })

  var activeArticle = dataObject.activeArticlesOrExperts
</script>

<template>
  <article class="latestStories">
    <section :class="dataObject.titleClass">
      <span>Meet our Experts</span>
      <h3>The amazing women behind <br> Beautyness</h3>
    </section>

    <section class="articleActive" v-if="activeArticle">
      <article class="articleBlock" v-for="(article, index) in dataObject.articlesAndExperts" :key="index">
        <img :src="article.imgPath" alt="">
        <span>{{ article.span }}</span>
        <h3 v-html="article.title"></h3>
        <p v-html="article.paragraph"></p>
      </article>
    </section>
    
    <section class="expertActive" v-else>
      <article class="expertBlock" v-for="(expert, index) in dataObject.articlesAndExperts" :key="index">
        <img :src="expert.imgPath" alt="">
        <h3 v-html="expert.title"></h3>
        <span>{{ expert.span }}</span>
        <p v-html="expert.paragraph"></p>
        <section class="icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
        </section>
      </article>
    </section>
    
    <button :class="dataObject.btnClass">VIEW MORE STORIES</button>
  </article>    
</template>

<style scoped lang="scss">
  @import url("../assets/style/latestStories.scss");
</style>