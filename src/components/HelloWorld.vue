<script setup lang="ts">
import { ref } from 'vue';
import LogoSrc from '@assets/vue.svg?component';
import vueLogo from '@assets/vueLogo.png';
import wallhaven1 from '@assets/wallhaven-5wzqk9.png';
import wallhaven2 from '@assets/wallhaven-955o8w.jpg';
import wallhaven3 from '@assets/wallhaven-e73p1r.png';
import wallhaven4 from '@assets/wallhaven-mp3w88.jpg';
import wallhaven5 from '@assets/wallhaven-p2gg8j.jpg';
const icons = import.meta.glob('../assets/icons/icon-*.svg', { eager: true });
console.log(icons);
const iconUrls = Object.values(icons).map((mod) => mod.default);
console.log(iconUrls);
// ToDo：这里不知道为什么无法通过import.meta.env取到自定义环境变量
// const url = new URL('./vueLogo.png', import.meta.env.VITE_IMG_BASE_URL).href;
console.log(import.meta.env);
</script>

<template>
  <p class="header">
    header

    <span class="item">123 </span>
    <!-- <img :src="url" alt="" /> -->
    <img :src="vueLogo" alt="" />
    <LogoSrc />
  </p>
  <img
    v-for="(icon, index) in iconUrls"
    :key="index"
    :src="icon"
    alt=""
    style="width: 20px"
  />
  <img :src="wallhaven1" alt="" />
  <img :src="wallhaven2" alt="" />
  <img :src="wallhaven3" alt="" />
  <img :src="wallhaven4" alt="" />
  <img :src="wallhaven5" alt="" />
</template>

<style lang="scss" scoped>
.header {
  color: $theme-color;
  background: green;
  .item {
    color: yellow;
  }
}
</style>
