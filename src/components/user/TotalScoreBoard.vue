<template>
  <div class="px-2 bg-white border border-gray-200">
    <header class="flex items-center justify-between p-1 m-1 border-b">
      <h5 class="my-1 font-bold">
        <span class="text-main">종합</span> 전적
      </h5>
      <div class="flex items-center gap-1 text-xs">
        <span>200전</span>
        <span>135승</span>
        <span>65패</span>
      </div>
    </header>
    <div class="flex">
      <circle-progress
        v-for="(progress, index) in progressList"
        :key="index"
        :title="progress.title"
        :value="progress.value"
        :color="progress.color"
        :stroke="7"
        :radius="45"
        class="px-2 border-r border-gray-200 last:border-r-0"
      />
    </div>
    <div class="flex items-center justify-between gap-1 p-2 mt-5 border-t">
      <span class="text-sm text-main">최대주행</span>
      <span class="text-sm">모드</span>
      <h4 class="ml-auto text-lg font-bold">
        통합
      </h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CircleProgress from '@/components/shared/CircleProgress.vue';

const progressList = [{
  title: '승률',
  color: '#07f',
  value: 68,
}, {
  title: '완주율',
  color: '#9bd728',
  value: 99,
}, {
  title: '리타이어율',
  color: '#f62459',
  value: 1,
},
];
</script>
