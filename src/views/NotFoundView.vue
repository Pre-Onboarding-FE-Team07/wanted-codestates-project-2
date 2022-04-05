<template>
  <tab-navigation
    bg-color="main"
    :start-index="-1"
  />
  <section class="h-[80vh] flex justify-center items-center flex-col gap-8 text-gray-500">
    <img
      src="@/assets/img_404.png"
      alt="404"
      class="animate-shake w-[250px] md:w-[300px]"
    >
    <h1 class="text-3xl md:text-5xl font-bold">
      페이지를 찾을 수 없습니다.
    </h1>
    <h3 class="text-xs md:text-base">
      요청하신 페이지가 사라졌거나, 잘못된 경로로 접근했습니다.
    </h3>
  </section>
</template>

<script lang="ts" setup>
import TabNavigation from '@/components/shared/TabNavigation.vue';
</script>
