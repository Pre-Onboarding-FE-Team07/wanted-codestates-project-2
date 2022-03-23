<template>
  <header class="flex items-center justify-between gap-3 m-3 px-6 max-w-[1300px] w-full">
    <img
      src="@/assets/logo_kart.png"
      alt=""
    >
    <router-link to="/">
      <img
        src="@/assets/tmi_logo_default_b.svg"
        alt=""
      >
    </router-link>
    <a
      class="ml-auto text-xs text-gray-600"
      href="https://kart.nexon.com/Main/Index.aspx"
      target="_blank"
      rel="noopener"
    >카트라이더 홈페이지 바로가기</a>
  </header>
  <tab-navigation :tabs="tabs" />
</template>

<script lang="ts" setup>
import TabNavigation from '@/components/shared/TabNavigation.vue';

const tabs = [
  { to: '/', name: '홈' },
  { to: '/rank', name: '랭킹' },
  { to: '/track', name: '트랙' },
];
</script>
