<template>
  <header-area />
  <router-view />
</template>

<script lang="ts">
import HeaderArea from '@/components/HeaderArea.vue';

export default {
  components: { HeaderArea },
};
</script>
