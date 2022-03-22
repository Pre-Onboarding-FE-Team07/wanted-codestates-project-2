<template>
  <search-area />
  <news-card-container />
</template>

<script lang="ts">
import SearchArea from '@/components/SearchArea.vue';
import NewsCardContainer from '@/components/NewsCardContainer.vue';

export default {
  components: { SearchArea, NewsCardContainer },
};
</script>
