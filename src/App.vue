<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Service1 from "./components/Service1.vue";
import Service2 from "./components/Service2.vue";
import Feature from "./components/Feature.vue";
import Advantage from "./components/Advantage.vue";
import Pricing from "./components/Pricing.vue";
import Documentation from './components/Documentation.vue';
import Footer from "./components/Footer.vue";

const showDocs = ref(false);

const updateView = () => {
  showDocs.value = window.location.hash === '#docs';
};

const goHome = () => {
  window.location.hash = '#home-section';
};

onMounted(() => {
  window.addEventListener('hashchange', updateView);
  updateView(); // Initial check on page load
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateView);
});


</script>

<template>
  <Header />

  <main v-if="!showDocs">
    <Hero />
    <Service1 />
    <Service2 />
    <Feature />
    <Pricing />
    <Advantage />
  </main>

  <Documentation v-else @back="goHome" />

  <Footer />
</template>
