<template>
  <header class="bg-white sticky top-0 h-[80px] border z-20">
    <nav class="flex flex-row justify-between items-center relative">
      <!-- Logo -->
      <div
        class="lg:basis-1/6 basis-full lg:text-center font-semibold max-w-full"
      >
        <img
          src="../../assets/logo.jpg"
          alt="logo"
          class="h-16 inline-block px-10"
        />
      </div>
      <!-- menu -->
      <ul
        :class="{
          hidden: isMenuHidden,
          'header-menu-expanded': !isMenuHidden && isScreenSmall,
          'animate-slideDown': !isSlideDown && isScreenSmall,
        }"
        class="basis-10/12 lg:flex lg:items-center lg:gap-14 uppercase text-lg font-medium lg:ps-10"
      >
        <li class="header-menu-items" @click="scrollToElement('trangchu')">
          Trang Chủ
        </li>
        <li class="header-menu-items" @click="scrollToElement('gioithieu')">
          Giới thiệu về công ty
        </li>
        <li class="header-menu-items" @click="scrollToElement('service')">
          Dịch Vụ
        </li>
        <li class="header-menu-items" @click="scrollToElement('lienhe')">
          Liên hệ
        </li>
      </ul>
      <!-- button toggle  -->
      <div @click="toggleMenu()" class="lg:hidden cursor-pointer basis-1/12">
        <svg
          id="header-top-menu-toggle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>
<script setup>
// INIT
import { ref, onMounted, onBeforeMount } from "vue";
// PROPERTIES
const isMenuHidden = ref(true);
const isScreenSmall = ref(null);
const isSlideDown = ref(true);
// FUNCTIONS
const toggleMenu = () => {
  isMenuHidden.value = !isMenuHidden.value;
  isSlideDown.value = !isSlideDown.value;
};
const handleResize = () => {
  isScreenSmall.value = window.innerWidth < 1024;
};
const scrollToElement = (targetID) => {
  const targetElement = document.getElementById(targetID);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
//LIFE CYCLE
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onBeforeMount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
