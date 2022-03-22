<template>
  <header-area />
  <router-view />
</template>

<script lang="ts">
import HeaderArea from '@/components/shared/HeaderArea.vue';

export default {
  components: { HeaderArea },
};
</script>
