<template>
  <tab-navigation />
  <search-area />
  <transition appear>
    <news-card-container />
  </transition>
</template>

<script lang="ts" setup>
import SearchArea from '@/components/home/SearchArea.vue';
import TabNavigation from '@/components/shared/TabNavigation.vue';
import NewsCardContainer from '@/components/home/NewsCardContainer.vue';
</script>

<style lang="postcss" scoped>
.v-enter-active {
  @apply transition-all duration-500;
}

.v-enter-from {
  @apply opacity-0 translate-y-10;
}

.v-enter-to {
  @apply opacity-100 translate-y-0;
}
</style>
