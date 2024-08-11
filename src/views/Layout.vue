<script setup>
import Header from "@/components/layout/Header.vue";
import { RouterView } from "vue-router";
import Footer from "@/components/layout/Footer.vue";
</script>
<template>
  <div class="min-h-screen bg-web-bg mx-auto">
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>
