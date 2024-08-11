<template>
  <!-- Hero section -->
  <div id="trangchu">
    <img src="../assets/Banner.png" class="w-full max-w-full" />
  </div>
  <!--First para  -->
  <div id="gioithieu">
    <BD_FirstPara></BD_FirstPara>
  </div>
  <!--  -->
  <Banner1> </Banner1>
  <div id="service">
    <BDService></BDService>
  </div>
  <MarqueeSection></MarqueeSection>
  <!-- Map section -->
  <div id="lienhe">
    <MapSection></MapSection>
  </div>
</template>
<script setup>
import BD_FirstPara from "@/components/BDFirstPara.vue";
import BDService from "@/components/BDService.vue";
import MapSection from "@/components/MapSection.vue";
import Banner1 from "@/components/Banner1.vue";
import MarqueeSection from "@/components/FeedBackSection.vue";
</script>
