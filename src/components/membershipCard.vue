<script setup>
const dataObject = [
  {
    title: "Comfort Relax",
    price: "$49",
    var: "GOLD CARD",
  },
  {
    title: "Luxury Retreat",
    price: "$89",
    var: "PLATINUM",
  },
  ]
</script>

<template>
  <article class="membershipCards">
    <section class="titleBlock">
      <p>EASY & AFFORDABLE BOOKING</p>
      <h2>Membership Cards</h2>
    </section>

    <section class="membershipCardsList">
      <article class="card" v-for="(data, index) in dataObject" :key="index">
        <section class="cardContent">
          <h3>{{ data.title }}</h3>
          <ul class="cardFeatures">
            <li><img src="../assets/image/Vector.png" alt="" class="icon-check"> Releases muscle tension</li>
            <li><img src="../assets/image/Vector.png" alt="" class="icon-check"> Relieves lower back pain</li>
            <li><img src="../assets/image/Vector.png" alt="" class="icon-check"> Heals sports injuries</li>
            <li><img src="../assets/image/Vector.png" alt="" class="icon-check"> Increases mobility</li>
            <li><img src="../assets/image/Vector.png" alt="" class="icon-check"> Increases muscle strength</li>
          </ul>
          <button class="btnCard">SUBSCRIBE NOW</button>
        </section>

        <aside class="cardPriceBlock">
          <p>{{ data.price }} <span>per month</span></p>
        </aside>

        <section class="cardVerticalText">{{ data.var }}</section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import url("../assets/style/membershipCard.scss");
</style>