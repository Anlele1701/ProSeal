<script setup>
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <div class="min-h-screen bg-web-bg mx-auto">
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>
