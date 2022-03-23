<template>
  <board-container>
    <template #header>
      <span class="text-main">종합</span> 전적
    </template>
    <template #sub-header>
      <span>200전</span>
      <span>135승</span>
      <span>65패</span>
    </template>
    <template #content>
      <div class="flex justify-between">
        <circle-progress
          v-for="(progress, index) in progressList"
          :key="index"
          :title="progress.title"
          :value="progress.value"
          :color="progress.color"
          :stroke="7"
          :radius="45"
          class="px-2"
        />
      </div>
      <div class="flex items-center justify-between gap-1 p-2 mt-5 border-t">
        <span class="text-sm text-main">최대주행</span>
        <span class="text-sm">모드</span>
        <h4 class="ml-auto text-lg font-bold">
          통합
        </h4>
      </div>
    </template>
  </board-container>
</template>

<script lang="ts" setup>
import CircleProgress from '@/components/shared/CircleProgress.vue';
import BoardContainer from '@/components/user/BoardContainer.vue';

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
