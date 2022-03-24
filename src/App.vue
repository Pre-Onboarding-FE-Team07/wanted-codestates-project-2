<template>
  <header-area />
  <tab-navigation
    :tabs="tabs"
  />
  <router-view />
</template>

<script lang="ts" setup>
import HeaderArea from '@/components/shared/HeaderArea.vue';
import TabNavigation from '@/components/shared/TabNavigation.vue';

const tabs = [
  { to: '/', name: '홈' },
  { to: '/rank', name: '랭킹' },
  { to: '/track', name: '트랙' },
];
</script>
