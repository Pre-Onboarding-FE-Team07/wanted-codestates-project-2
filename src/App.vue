<template>
  <header-area />
  <router-view />
</template>

<script lang="ts" setup>
import HeaderArea from '@/components/shared/HeaderArea.vue';

import(/* webpackChunkName: "chart-js" */ 'chart.js/auto');
</script>
