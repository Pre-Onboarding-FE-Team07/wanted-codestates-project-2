<template>
  <section class="relative flex flex-col items-center justify-center w-full bg-darken h-[600px] text-white px-4 overflow-hidden">
    <div class="absolute top-[450px] h-[198px] w-[6400px] bg-wave bg-repeat-x animate-wave" />
    <div class="opacity-80 absolute top-[450px] -left-20 h-[198px] w-[6400px] bg-wave bg-repeat-x animate-second-wave" />
    <div class="max-w-[1000px] w-full">
      <h1 class="text-xl">
        3월 TMI 랭킹
      </h1>
      <div class="w-8 h-[3px] bg-white my-2" />
      <div class="flex flex-col mb-4 text-xs">
        <span>랭킹 산정기간 2022년 03월 01일 00:00:00  ~  2022년 03월 31일 24:00:00</span>
        <span>최근 업데이트 2022년 03월 24일 09:15:14</span>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <select-button
          :options="teamOptions"
          mode="white"
        />
        <select-button
          :options="modeOptions"
          mode="white"
        />
      </div>
    </div>
    <div class="w-full pt-16 overflow-x-scroll md:w-fit">
      <top-rank />
    </div>
  </section>
  <rank-table class="-mt-16">
    <tr
      v-for="(ranker, index) in rankers"
      :key="index"
      class="text-center bg-white cursor-pointer group hover:text-main"
    >
      <td class="py-2 border-l border-y group-hover:border-main">
        {{ index + 4 }}
      </td>
      <td class="text-left border-y group-hover:border-main">
        {{ ranker.name }}
      </td>
      <td class="border-y group-hover:border-main">
        {{ ranker.point.toLocaleString() || 0 }} PT
      </td>
      <td class="border-y group-hover:border-main">
        {{ ranker.driveCount }}회
      </td>
      <td class="border-r border-y group-hover:border-main">
        {{ ranker.avgRank }} 위
      </td>
    </tr>
  </rank-table>
</template>

<script lang="ts" setup>
import SelectButton from '@/components/shared/SelectButton.vue';
import TopRank from '@/components/rank/TopRank.vue';
import RankTable from '@/components/rank/RankTable.vue';

const teamOptions = [
  { content: '개인전' },
  { content: '팀전' },
];

const modeOptions = [
  { content: '통합' },
  { content: '매빠' },
  { content: '무부' },
];

const rankers = Array(50).fill({
  name: '1234Kcm', point: 3608, driveCount: '508', avgRank: 2.3,
});
</script>
