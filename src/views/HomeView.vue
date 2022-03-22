<template>
  <search-area />
  <news-card-container />
</template>

<script lang="ts">
import SearchArea from '@/components/home/SearchArea.vue';
import NewsCardContainer from '@/components/home/NewsCardContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { SearchArea, NewsCardContainer },
});
</script>
