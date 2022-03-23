<template>
  <div class="w-full h-[330px] shadow-lg p-3 bg-flag bg-cover bg-center">
    <h3 class="m-2 text-[#07f] ">
      {{ title }}
    </h3>
    <div class="border border-[#07f]" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Fill title here',
  },
});
</script>
