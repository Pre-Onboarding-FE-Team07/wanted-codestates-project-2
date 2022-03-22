<template>
  <search-area />
  <section class="relative z-10 flex flex-col w-full gap-3 m-5 xl:-mt-5 xl:flex-row max-w-[1000px]">
    <news-card title="TMI 업데이트 로그">
      <table class="w-full">
        <thead>
          <tr class="text-sm">
            <th class="relative font-normal after:absolute after:right-0 after:top-1 after:bg-[#ccc] after:w-[1px] after:h-4 ">
              내용
            </th>
            <th class="font-normal">
              날짜
            </th>
          </tr>
        </thead>
      </table>
    </news-card>
    <news-card title="카트라이더 TMI 영상" />
  </section>
</template>

<script lang="ts">
import SearchArea from '@/components/SearchArea.vue';
import NewsCard from '@/components/NewsCard.vue';

export default {
  components: { SearchArea, NewsCard },
};
</script>
